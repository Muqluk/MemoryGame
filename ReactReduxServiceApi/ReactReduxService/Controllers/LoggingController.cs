using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;


using log4net;
using log4net.Core;
using Newtonsoft.Json;


namespace ReactReduxService.Controllers
{
    public class LoggingController : ApiController
    {
        private static readonly ILog Logger = LogManager.GetLogger(typeof(LoggingController));

        [HttpGet]
        public HttpResponseMessage GET()
        {
            //Logger.Logger.Log(new LoggingEvent(
            //            new LoggingEventData
            //            {
            //                TimeStampUtc = DateTime.UtcNow,
            //                Level = Level.Info,
            //                LoggerName = "API",
            //                Message = @"LoggingController.Get() called.",
            //                ExceptionString = String.Empty
            //            }
            //        ));
            IEnumerable<ILogEntry> retVal = Enumerable.Empty<ILogEntry>();
            try
            {
                IEnumerable<ILogEntry> logs = Enumerable.Empty<ILogEntry>();

                using (var conn = new System.Data.SqlClient.SqlConnection())
                {
                    conn.ConnectionString = "Server=.;Database=ReactReduxDb;User Id=sa;Password=High3r01!;";

                    using (var cmd = new System.Data.SqlClient.SqlCommand())
                    {
                        cmd.CommandType = System.Data.CommandType.Text;
                        cmd.Connection = conn;
                        cmd.CommandText = "Select [TimeStamp],[Thread],[Level],[Logger],[Message],[Exception]FROM[ReactReduxDb].[logging].[webExceptions] order by [TimeStamp] desc";

                        if (conn.State != System.Data.ConnectionState.Open)
                        {
                            conn.Open();
                        }

                        var rdr = cmd.ExecuteReader();
                        if (rdr.HasRows)
                        {
                            while (rdr.Read())
                            {
                                logs = logs.Concat<ILogEntry>(new[] { new LogEntry {
                                        TimeStamp = (DateTime)rdr["TimeStamp"],
                                        Thread = rdr["Thread"].ToString(),
                                        Level = rdr["Level"].ToString(),
                                        Logger = rdr["Logger"].ToString(),
                                        Message = rdr["Message"].ToString(),
                                        Exception = rdr["Exception"].ToString()
                                    }});
                            }
                        }
                        conn.Close();
                    }
                }

                var response = this.Request.CreateResponse(HttpStatusCode.OK);
                response.Content = new StringContent(JsonConvert.SerializeObject(logs), Encoding.UTF8, "application/json");
                //var a = 1;
                //var b = 0;

                //var c = a / b;
                return response;
                //return logs;
            }
            catch (Exception e)
            {
                Logger.Logger.Log(
                    new LoggingEvent(
                        new LoggingEventData
                        {
                            TimeStampUtc = DateTime.UtcNow,
                            Level = Level.Error,
                            LoggerName = "API",
                            Message = @"Error in LoggingController.Get()",
                            ExceptionString = e.Message
                        }
                    )
               );

                var response = this.Request.CreateResponse(HttpStatusCode.InternalServerError);
                response.Content = new StringContent(JsonConvert.SerializeObject(new[] { new { Exception = e.Message } }));
                return response;
            }
        }

        public void Post(ILogEntry entry)
        {

        }

        protected IEnumerable<string> generateSampleData()
        {
            IEnumerable<string> retVal = Enumerable.Empty<string>();
            retVal = retVal.Concat<string>(new[] { "abcd 1" });
            retVal = retVal.Concat<string>(new[] { "abcd 2" });
            retVal = retVal.Concat<string>(new[] { "abcd 3" });
            retVal = retVal.Concat<string>(new[] { "abcd 4" });
            retVal = retVal.Concat<string>(new[] { "abcd 5" });
            retVal = retVal.Concat<string>(new[] { "abcd 6" });
            retVal = retVal.Concat<string>(new[] { "abcd 7" });
            retVal = retVal.Concat<string>(new[] { "abcd 8" });
            retVal = retVal.Concat<string>(new[] { "abcd 9" });
            retVal = retVal.Concat<string>(new[] { "abcd 0" });
            return retVal;
        }
    }

    public interface ILogEntry
    {
        DateTime TimeStamp { get; set; }
        string Thread { get; set; }
        string Level { get; set; }
        string Logger { get; set; }
        string Message { get; set; }
        string Exception { get; set; }
    }

    public class LogEntry : ILogEntry
    {
        public DateTime TimeStamp { get; set; }
        public string Thread { get; set; }
        public string Level { get; set; }
        public string Logger { get; set; }
        public string Message { get; set; }
        public string Exception { get; set; }
    }

}

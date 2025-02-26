﻿namespace DiCho.DataService.ViewModels
{
    public class NotificationModel
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public string Time { get; set; }
    }

    public class NotificationViewModel
    {
        public string Title { get; set; }
        public string Body { get; set; }
        public string Time { get; set; }
    }
}

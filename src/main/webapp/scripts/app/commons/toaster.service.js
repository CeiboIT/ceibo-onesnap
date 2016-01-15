/**
 * Created by mmasuyama on 11/10/2015.
 */
/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="subscriptions.service.ts" />
var AngularTest;
(function (AngularTest) {
    var ToasterService = (function () {
        /** @ngInject */
        function ToasterService(StreamsService, $mdToast, $translate) {
            var _this = this;
            this.StreamsService = StreamsService;
            this.$mdToast = $mdToast;
            this.$translate = $translate;
            this.toasterStream = new Rx.Subject();
            this.observables = [];
            this.StreamsService.setGeneralListener(this.toasterStream);
            this.toasterStream.subscribe(function (observable) {
                _this.observables.push(observable);
                _this.streams = Rx.Observable.merge(_this.observables);
                _this.streams.subscribe(function (notification) {
                    _this.showToaster(notification, 'SUCCESS');
                });
            }, function (error) {
                _this.showToaster(error, 'ERROR');
            });
        }
        ToasterService.prototype.showToaster = function (notification, type) {
            switch (notification.type) {
                case ('PUT'):
                    this.$mdToast.showSimple('Datos actualizados correctamente (texto Hardcodeado)');
                    break;
                case ('POST'):
                    this.$mdToast.showSimple('Datos guardados correctamente (texto Hardcodeado)');
                    break;
                case ('DELETE'):
                    this.$mdToast.showSimple('Datos eliminados correctamente (texto Hardcodeado)');
                    break;
            }
        };
        return ToasterService;
    })();
    AngularTest.ToasterService = ToasterService;
    angular.module('angularTest').service('ToasterService', ToasterService);
})(AngularTest || (AngularTest = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbnMvdG9hc3Rlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkFuZ3VsYXJUZXN0IiwiQW5ndWxhclRlc3QuVG9hc3RlclNlcnZpY2UiLCJBbmd1bGFyVGVzdC5Ub2FzdGVyU2VydmljZS5jb25zdHJ1Y3RvciIsIkFuZ3VsYXJUZXN0LlRvYXN0ZXJTZXJ2aWNlLnNob3dUb2FzdGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILEFBR0Esa0RBSGtEO0FBQ2xELGlEQUFpRDtBQUVqRCxJQUFPLFdBQVcsQ0FrRGpCO0FBbERELFdBQU8sV0FBVyxFQUFDLENBQUM7SUFNbEJBLElBQWFBLGNBQWNBO1FBTXpCQyxnQkFBZ0JBO1FBQ2hCQSxTQVBXQSxjQUFjQSxDQU9KQSxjQUEwQ0EsRUFBVUEsUUFBUUEsRUFBVUEsVUFBVUE7WUFQdkdDLGlCQXdDQ0E7WUFqQ3NCQSxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBNEJBO1lBQVVBLGFBQVFBLEdBQVJBLFFBQVFBLENBQUFBO1lBQVVBLGVBQVVBLEdBQVZBLFVBQVVBLENBQUFBO1lBQ25HQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxJQUFJQSxFQUFFQSxDQUFDQSxPQUFPQSxFQUFNQSxDQUFDQTtZQUMxQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDdEJBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7WUFFM0RBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFNBQVNBLENBQUNBLFVBQUNBLFVBQVVBO2dCQUN0Q0EsS0FBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xDQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtnQkFDckRBLEtBQUlBLENBQUNBLE9BQU9BLENBQUNBLFNBQVNBLENBQUNBLFVBQUNBLFlBQVlBO29CQUNsQ0EsS0FBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsWUFBWUEsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzVDQSxDQUFDQSxDQUFDQSxDQUFBQTtZQUNKQSxDQUFDQSxFQUFDQSxVQUFDQSxLQUFLQTtnQkFDTkEsS0FBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBS0EsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFDbkNBLENBQUNBLENBQUNBLENBQUNBO1FBQ0xBLENBQUNBO1FBRURELG9DQUFXQSxHQUFYQSxVQUFZQSxZQUFZQSxFQUFFQSxJQUFJQTtZQUU1QkUsTUFBTUEsQ0FBQUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7Z0JBQ3hCQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtvQkFDTEEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsVUFBVUEsQ0FBQ0Esc0RBQXNEQSxDQUFDQSxDQUFDQTtvQkFDakZBLEtBQUtBLENBQUNBO2dCQUNaQSxLQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFDVkEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsbURBQW1EQSxDQUFDQSxDQUFDQTtvQkFDOUVBLEtBQUtBLENBQUNBO2dCQUNSQSxLQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtvQkFDWkEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsVUFBVUEsQ0FBQ0Esb0RBQW9EQSxDQUFDQSxDQUFDQTtvQkFDL0VBLEtBQUtBLENBQUNBO1lBQ1ZBLENBQUNBO1FBRUhBLENBQUNBO1FBR0hGLHFCQUFDQTtJQUFEQSxDQXhDQUQsQUF3Q0NDLElBQUFEO0lBeENZQSwwQkFBY0EsR0FBZEEsY0F3Q1pBLENBQUFBO0lBRURBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLENBQzVCQSxPQUFPQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLGNBQWNBLENBQUNBLENBQUNBO0FBQzdDQSxDQUFDQSxFQWxETSxXQUFXLEtBQVgsV0FBVyxRQWtEakIiLCJmaWxlIjoiY29tbW9ucy90b2FzdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgbW1hc3V5YW1hIG9uIDExLzEwLzIwMTUuXG4gKi9cblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cInN1YnNjcmlwdGlvbnMuc2VydmljZS50c1wiIC8+XG5cbm1vZHVsZSBBbmd1bGFyVGVzdCB7XG5cbiAgaW50ZXJmYWNlIElUb2FzdGVyIHtcbiAgICBzaG93VG9hc3Rlcihub3RpZmljYXRpb24sIHR5cGUpXG4gIH1cblxuICBleHBvcnQgY2xhc3MgVG9hc3RlclNlcnZpY2UgaW1wbGVtZW50cyBJVG9hc3RlcntcbiAgICBwcml2YXRlIHRvYXN0ZXJTdHJlYW07XG4gICAgcHJpdmF0ZSBhcnJheU9ic2VydjtcbiAgICBwcml2YXRlIHN0cmVhbXM7XG4gICAgcHJpdmF0ZSBvYnNlcnZhYmxlcztcblxuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICBTdHJlYW1zU2VydmljZTogQW5ndWxhclRlc3QuU3RyZWFtc1NlcnZpY2UsIHByaXZhdGUgJG1kVG9hc3QsIHByaXZhdGUgJHRyYW5zbGF0ZSkge1xuICAgICAgdGhpcy50b2FzdGVyU3RyZWFtID0gbmV3IFJ4LlN1YmplY3Q8e30+KCk7XG4gICAgICB0aGlzLm9ic2VydmFibGVzID0gW107XG4gICAgICB0aGlzLlN0cmVhbXNTZXJ2aWNlLnNldEdlbmVyYWxMaXN0ZW5lcih0aGlzLnRvYXN0ZXJTdHJlYW0pO1xuXG4gICAgICB0aGlzLnRvYXN0ZXJTdHJlYW0uc3Vic2NyaWJlKChvYnNlcnZhYmxlKSA9PiB7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZXMucHVzaChvYnNlcnZhYmxlKTtcbiAgICAgICAgdGhpcy5zdHJlYW1zID0gUnguT2JzZXJ2YWJsZS5tZXJnZSh0aGlzLm9ic2VydmFibGVzKTtcbiAgICAgICAgdGhpcy5zdHJlYW1zLnN1YnNjcmliZSgobm90aWZpY2F0aW9uKSA9PiB7XG4gICAgICAgICAgdGhpcy5zaG93VG9hc3Rlcihub3RpZmljYXRpb24sICdTVUNDRVNTJyk7XG4gICAgICAgIH0pXG4gICAgICB9LChlcnJvcik9PiB7XG4gICAgICAgIHRoaXMuc2hvd1RvYXN0ZXIoZXJyb3IsICdFUlJPUicpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1RvYXN0ZXIobm90aWZpY2F0aW9uLCB0eXBlKXtcbiAgICAgIFxuICAgICAgc3dpdGNoKG5vdGlmaWNhdGlvbi50eXBlKXtcbiAgICAgICAgY2FzZSgnUFVUJyk6XG4gICAgICAgICAgICAgIHRoaXMuJG1kVG9hc3Quc2hvd1NpbXBsZSgnRGF0b3MgYWN0dWFsaXphZG9zIGNvcnJlY3RhbWVudGUgKHRleHRvIEhhcmRjb2RlYWRvKScpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSgnUE9TVCcpOlxuICAgICAgICAgIHRoaXMuJG1kVG9hc3Quc2hvd1NpbXBsZSgnRGF0b3MgZ3VhcmRhZG9zIGNvcnJlY3RhbWVudGUgKHRleHRvIEhhcmRjb2RlYWRvKScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlKCdERUxFVEUnKTpcbiAgICAgICAgICB0aGlzLiRtZFRvYXN0LnNob3dTaW1wbGUoJ0RhdG9zIGVsaW1pbmFkb3MgY29ycmVjdGFtZW50ZSAodGV4dG8gSGFyZGNvZGVhZG8pJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICB9XG4gICAgXG4gICBcbiAgfVxuICBcbiAgYW5ndWxhci5tb2R1bGUoJ2FuZ3VsYXJUZXN0JylcbiAgLnNlcnZpY2UoJ1RvYXN0ZXJTZXJ2aWNlJywgVG9hc3RlclNlcnZpY2UpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
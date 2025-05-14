# `computeRegionHealthCheck` Submodule <a name="`computeRegionHealthCheck` Submodule" id="@cdktf/provider-google.computeRegionHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionHealthCheck <a name="ComputeRegionHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check google_compute_region_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheck;

ComputeRegionHealthCheck.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .checkIntervalSec(java.lang.Number)
//  .description(java.lang.String)
//  .grpcHealthCheck(ComputeRegionHealthCheckGrpcHealthCheck)
//  .healthyThreshold(java.lang.Number)
//  .http2HealthCheck(ComputeRegionHealthCheckHttp2HealthCheck)
//  .httpHealthCheck(ComputeRegionHealthCheckHttpHealthCheck)
//  .httpsHealthCheck(ComputeRegionHealthCheckHttpsHealthCheck)
//  .id(java.lang.String)
//  .logConfig(ComputeRegionHealthCheckLogConfig)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .sslHealthCheck(ComputeRegionHealthCheckSslHealthCheck)
//  .tcpHealthCheck(ComputeRegionHealthCheckTcpHealthCheck)
//  .timeouts(ComputeRegionHealthCheckTimeouts)
//  .timeoutSec(java.lang.Number)
//  .unhealthyThreshold(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.checkIntervalSec">checkIntervalSec</a></code> | <code>java.lang.Number</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.grpcHealthCheck">grpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a></code> | grpc_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.http2HealthCheck">http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a></code> | http2_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.httpHealthCheck">httpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.httpsHealthCheck">httpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a></code> | https_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#id ComputeRegionHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#project ComputeRegionHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created health check should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.sslHealthCheck">sslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a></code> | ssl_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.tcpHealthCheck">tcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a></code> | tcp_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#name ComputeRegionHealthCheck#name}

---

##### `checkIntervalSec`<sup>Optional</sup> <a name="checkIntervalSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.checkIntervalSec"></a>

- *Type:* java.lang.Number

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#check_interval_sec ComputeRegionHealthCheck#check_interval_sec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#description ComputeRegionHealthCheck#description}

---

##### `grpcHealthCheck`<sup>Optional</sup> <a name="grpcHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.grpcHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a>

grpc_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#grpc_health_check ComputeRegionHealthCheck#grpc_health_check}

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.healthyThreshold"></a>

- *Type:* java.lang.Number

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#healthy_threshold ComputeRegionHealthCheck#healthy_threshold}

---

##### `http2HealthCheck`<sup>Optional</sup> <a name="http2HealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.http2HealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a>

http2_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#http2_health_check ComputeRegionHealthCheck#http2_health_check}

---

##### `httpHealthCheck`<sup>Optional</sup> <a name="httpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.httpHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#http_health_check ComputeRegionHealthCheck#http_health_check}

---

##### `httpsHealthCheck`<sup>Optional</sup> <a name="httpsHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.httpsHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a>

https_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#https_health_check ComputeRegionHealthCheck#https_health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#id ComputeRegionHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#log_config ComputeRegionHealthCheck#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#project ComputeRegionHealthCheck#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The Region in which the created health check should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#region ComputeRegionHealthCheck#region}

---

##### `sslHealthCheck`<sup>Optional</sup> <a name="sslHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.sslHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a>

ssl_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#ssl_health_check ComputeRegionHealthCheck#ssl_health_check}

---

##### `tcpHealthCheck`<sup>Optional</sup> <a name="tcpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.tcpHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a>

tcp_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#tcp_health_check ComputeRegionHealthCheck#tcp_health_check}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#timeouts ComputeRegionHealthCheck#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.timeoutSec"></a>

- *Type:* java.lang.Number

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#timeout_sec ComputeRegionHealthCheck#timeout_sec}

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.Initializer.parameter.unhealthyThreshold"></a>

- *Type:* java.lang.Number

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#unhealthy_threshold ComputeRegionHealthCheck#unhealthy_threshold}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putGrpcHealthCheck">putGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttp2HealthCheck">putHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpHealthCheck">putHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpsHealthCheck">putHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putSslHealthCheck">putSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTcpHealthCheck">putTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetCheckIntervalSec">resetCheckIntervalSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetGrpcHealthCheck">resetGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttp2HealthCheck">resetHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttpHealthCheck">resetHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttpsHealthCheck">resetHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetSslHealthCheck">resetSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTcpHealthCheck">resetTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTimeoutSec">resetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGrpcHealthCheck` <a name="putGrpcHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putGrpcHealthCheck"></a>

```java
public void putGrpcHealthCheck(ComputeRegionHealthCheckGrpcHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putGrpcHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a>

---

##### `putHttp2HealthCheck` <a name="putHttp2HealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttp2HealthCheck"></a>

```java
public void putHttp2HealthCheck(ComputeRegionHealthCheckHttp2HealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttp2HealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a>

---

##### `putHttpHealthCheck` <a name="putHttpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpHealthCheck"></a>

```java
public void putHttpHealthCheck(ComputeRegionHealthCheckHttpHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a>

---

##### `putHttpsHealthCheck` <a name="putHttpsHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpsHealthCheck"></a>

```java
public void putHttpsHealthCheck(ComputeRegionHealthCheckHttpsHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putHttpsHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a>

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putLogConfig"></a>

```java
public void putLogConfig(ComputeRegionHealthCheckLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a>

---

##### `putSslHealthCheck` <a name="putSslHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putSslHealthCheck"></a>

```java
public void putSslHealthCheck(ComputeRegionHealthCheckSslHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putSslHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a>

---

##### `putTcpHealthCheck` <a name="putTcpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTcpHealthCheck"></a>

```java
public void putTcpHealthCheck(ComputeRegionHealthCheckTcpHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTcpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTimeouts"></a>

```java
public void putTimeouts(ComputeRegionHealthCheckTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a>

---

##### `resetCheckIntervalSec` <a name="resetCheckIntervalSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetCheckIntervalSec"></a>

```java
public void resetCheckIntervalSec()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGrpcHealthCheck` <a name="resetGrpcHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetGrpcHealthCheck"></a>

```java
public void resetGrpcHealthCheck()
```

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHealthyThreshold"></a>

```java
public void resetHealthyThreshold()
```

##### `resetHttp2HealthCheck` <a name="resetHttp2HealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttp2HealthCheck"></a>

```java
public void resetHttp2HealthCheck()
```

##### `resetHttpHealthCheck` <a name="resetHttpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttpHealthCheck"></a>

```java
public void resetHttpHealthCheck()
```

##### `resetHttpsHealthCheck` <a name="resetHttpsHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetHttpsHealthCheck"></a>

```java
public void resetHttpsHealthCheck()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetId"></a>

```java
public void resetId()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetLogConfig"></a>

```java
public void resetLogConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSslHealthCheck` <a name="resetSslHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetSslHealthCheck"></a>

```java
public void resetSslHealthCheck()
```

##### `resetTcpHealthCheck` <a name="resetTcpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTcpHealthCheck"></a>

```java
public void resetTcpHealthCheck()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeoutSec` <a name="resetTimeoutSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetTimeoutSec"></a>

```java
public void resetTimeoutSec()
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.resetUnhealthyThreshold"></a>

```java
public void resetUnhealthyThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionHealthCheck resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheck;

ComputeRegionHealthCheck.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheck;

ComputeRegionHealthCheck.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheck;

ComputeRegionHealthCheck.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheck;

ComputeRegionHealthCheck.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeRegionHealthCheck.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeRegionHealthCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeRegionHealthCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeRegionHealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionHealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.grpcHealthCheck">grpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference">ComputeRegionHealthCheckGrpcHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.healthCheckId">healthCheckId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.http2HealthCheck">http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference">ComputeRegionHealthCheckHttp2HealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpHealthCheck">httpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference">ComputeRegionHealthCheckHttpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpsHealthCheck">httpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference">ComputeRegionHealthCheckHttpsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference">ComputeRegionHealthCheckLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.sslHealthCheck">sslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference">ComputeRegionHealthCheckSslHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tcpHealthCheck">tcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference">ComputeRegionHealthCheckTcpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference">ComputeRegionHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.checkIntervalSecInput">checkIntervalSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.grpcHealthCheckInput">grpcHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.http2HealthCheckInput">http2HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpHealthCheckInput">httpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpsHealthCheckInput">httpsHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.sslHealthCheckInput">sslHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tcpHealthCheckInput">tcpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutSecInput">timeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.checkIntervalSec">checkIntervalSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `grpcHealthCheck`<sup>Required</sup> <a name="grpcHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.grpcHealthCheck"></a>

```java
public ComputeRegionHealthCheckGrpcHealthCheckOutputReference getGrpcHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference">ComputeRegionHealthCheckGrpcHealthCheckOutputReference</a>

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.healthCheckId"></a>

```java
public java.lang.Number getHealthCheckId();
```

- *Type:* java.lang.Number

---

##### `http2HealthCheck`<sup>Required</sup> <a name="http2HealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.http2HealthCheck"></a>

```java
public ComputeRegionHealthCheckHttp2HealthCheckOutputReference getHttp2HealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference">ComputeRegionHealthCheckHttp2HealthCheckOutputReference</a>

---

##### `httpHealthCheck`<sup>Required</sup> <a name="httpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpHealthCheck"></a>

```java
public ComputeRegionHealthCheckHttpHealthCheckOutputReference getHttpHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference">ComputeRegionHealthCheckHttpHealthCheckOutputReference</a>

---

##### `httpsHealthCheck`<sup>Required</sup> <a name="httpsHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpsHealthCheck"></a>

```java
public ComputeRegionHealthCheckHttpsHealthCheckOutputReference getHttpsHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference">ComputeRegionHealthCheckHttpsHealthCheckOutputReference</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.logConfig"></a>

```java
public ComputeRegionHealthCheckLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference">ComputeRegionHealthCheckLogConfigOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `sslHealthCheck`<sup>Required</sup> <a name="sslHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.sslHealthCheck"></a>

```java
public ComputeRegionHealthCheckSslHealthCheckOutputReference getSslHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference">ComputeRegionHealthCheckSslHealthCheckOutputReference</a>

---

##### `tcpHealthCheck`<sup>Required</sup> <a name="tcpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tcpHealthCheck"></a>

```java
public ComputeRegionHealthCheckTcpHealthCheckOutputReference getTcpHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference">ComputeRegionHealthCheckTcpHealthCheckOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeouts"></a>

```java
public ComputeRegionHealthCheckTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference">ComputeRegionHealthCheckTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `checkIntervalSecInput`<sup>Optional</sup> <a name="checkIntervalSecInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.checkIntervalSecInput"></a>

```java
public java.lang.Number getCheckIntervalSecInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `grpcHealthCheckInput`<sup>Optional</sup> <a name="grpcHealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.grpcHealthCheckInput"></a>

```java
public ComputeRegionHealthCheckGrpcHealthCheck getGrpcHealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a>

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.healthyThresholdInput"></a>

```java
public java.lang.Number getHealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `http2HealthCheckInput`<sup>Optional</sup> <a name="http2HealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.http2HealthCheckInput"></a>

```java
public ComputeRegionHealthCheckHttp2HealthCheck getHttp2HealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a>

---

##### `httpHealthCheckInput`<sup>Optional</sup> <a name="httpHealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpHealthCheckInput"></a>

```java
public ComputeRegionHealthCheckHttpHealthCheck getHttpHealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a>

---

##### `httpsHealthCheckInput`<sup>Optional</sup> <a name="httpsHealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.httpsHealthCheckInput"></a>

```java
public ComputeRegionHealthCheckHttpsHealthCheck getHttpsHealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.logConfigInput"></a>

```java
public ComputeRegionHealthCheckLogConfig getLogConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sslHealthCheckInput`<sup>Optional</sup> <a name="sslHealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.sslHealthCheckInput"></a>

```java
public ComputeRegionHealthCheckSslHealthCheck getSslHealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a>

---

##### `tcpHealthCheckInput`<sup>Optional</sup> <a name="tcpHealthCheckInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tcpHealthCheckInput"></a>

```java
public ComputeRegionHealthCheckTcpHealthCheck getTcpHealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a>

---

##### `timeoutSecInput`<sup>Optional</sup> <a name="timeoutSecInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutSecInput"></a>

```java
public java.lang.Number getTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a>

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.unhealthyThresholdInput"></a>

```java
public java.lang.Number getUnhealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `checkIntervalSec`<sup>Required</sup> <a name="checkIntervalSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.checkIntervalSec"></a>

```java
public java.lang.Number getCheckIntervalSec();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `timeoutSec`<sup>Required</sup> <a name="timeoutSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.timeoutSec"></a>

```java
public java.lang.Number getTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheck.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionHealthCheckConfig <a name="ComputeRegionHealthCheckConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheckConfig;

ComputeRegionHealthCheckConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .checkIntervalSec(java.lang.Number)
//  .description(java.lang.String)
//  .grpcHealthCheck(ComputeRegionHealthCheckGrpcHealthCheck)
//  .healthyThreshold(java.lang.Number)
//  .http2HealthCheck(ComputeRegionHealthCheckHttp2HealthCheck)
//  .httpHealthCheck(ComputeRegionHealthCheckHttpHealthCheck)
//  .httpsHealthCheck(ComputeRegionHealthCheckHttpsHealthCheck)
//  .id(java.lang.String)
//  .logConfig(ComputeRegionHealthCheckLogConfig)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .sslHealthCheck(ComputeRegionHealthCheckSslHealthCheck)
//  .tcpHealthCheck(ComputeRegionHealthCheckTcpHealthCheck)
//  .timeouts(ComputeRegionHealthCheckTimeouts)
//  .timeoutSec(java.lang.Number)
//  .unhealthyThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.checkIntervalSec">checkIntervalSec</a></code> | <code>java.lang.Number</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.grpcHealthCheck">grpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a></code> | grpc_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.http2HealthCheck">http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a></code> | http2_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.httpHealthCheck">httpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.httpsHealthCheck">httpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a></code> | https_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#id ComputeRegionHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#project ComputeRegionHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created health check should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.sslHealthCheck">sslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a></code> | ssl_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.tcpHealthCheck">tcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a></code> | tcp_health_check block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#name ComputeRegionHealthCheck#name}

---

##### `checkIntervalSec`<sup>Optional</sup> <a name="checkIntervalSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.checkIntervalSec"></a>

```java
public java.lang.Number getCheckIntervalSec();
```

- *Type:* java.lang.Number

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#check_interval_sec ComputeRegionHealthCheck#check_interval_sec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#description ComputeRegionHealthCheck#description}

---

##### `grpcHealthCheck`<sup>Optional</sup> <a name="grpcHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.grpcHealthCheck"></a>

```java
public ComputeRegionHealthCheckGrpcHealthCheck getGrpcHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a>

grpc_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#grpc_health_check ComputeRegionHealthCheck#grpc_health_check}

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#healthy_threshold ComputeRegionHealthCheck#healthy_threshold}

---

##### `http2HealthCheck`<sup>Optional</sup> <a name="http2HealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.http2HealthCheck"></a>

```java
public ComputeRegionHealthCheckHttp2HealthCheck getHttp2HealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a>

http2_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#http2_health_check ComputeRegionHealthCheck#http2_health_check}

---

##### `httpHealthCheck`<sup>Optional</sup> <a name="httpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.httpHealthCheck"></a>

```java
public ComputeRegionHealthCheckHttpHealthCheck getHttpHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#http_health_check ComputeRegionHealthCheck#http_health_check}

---

##### `httpsHealthCheck`<sup>Optional</sup> <a name="httpsHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.httpsHealthCheck"></a>

```java
public ComputeRegionHealthCheckHttpsHealthCheck getHttpsHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a>

https_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#https_health_check ComputeRegionHealthCheck#https_health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#id ComputeRegionHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.logConfig"></a>

```java
public ComputeRegionHealthCheckLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#log_config ComputeRegionHealthCheck#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#project ComputeRegionHealthCheck#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The Region in which the created health check should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#region ComputeRegionHealthCheck#region}

---

##### `sslHealthCheck`<sup>Optional</sup> <a name="sslHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.sslHealthCheck"></a>

```java
public ComputeRegionHealthCheckSslHealthCheck getSslHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a>

ssl_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#ssl_health_check ComputeRegionHealthCheck#ssl_health_check}

---

##### `tcpHealthCheck`<sup>Optional</sup> <a name="tcpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.tcpHealthCheck"></a>

```java
public ComputeRegionHealthCheckTcpHealthCheck getTcpHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a>

tcp_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#tcp_health_check ComputeRegionHealthCheck#tcp_health_check}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.timeouts"></a>

```java
public ComputeRegionHealthCheckTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#timeouts ComputeRegionHealthCheck#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.timeoutSec"></a>

```java
public java.lang.Number getTimeoutSec();
```

- *Type:* java.lang.Number

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#timeout_sec ComputeRegionHealthCheck#timeout_sec}

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckConfig.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#unhealthy_threshold ComputeRegionHealthCheck#unhealthy_threshold}

---

### ComputeRegionHealthCheckGrpcHealthCheck <a name="ComputeRegionHealthCheckGrpcHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheckGrpcHealthCheck;

ComputeRegionHealthCheckGrpcHealthCheck.builder()
//  .grpcServiceName(java.lang.String)
//  .port(java.lang.Number)
//  .portName(java.lang.String)
//  .portSpecification(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.grpcServiceName">grpcServiceName</a></code> | <code>java.lang.String</code> | The gRPC service name for the health check. The value of grpcServiceName has the following meanings by convention:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.port">port</a></code> | <code>java.lang.Number</code> | The port number for the health check request. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.portName">portName</a></code> | <code>java.lang.String</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | Specifies how port is selected for health checking, can be one of the following values:. |

---

##### `grpcServiceName`<sup>Optional</sup> <a name="grpcServiceName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.grpcServiceName"></a>

```java
public java.lang.String getGrpcServiceName();
```

- *Type:* java.lang.String

The gRPC service name for the health check. The value of grpcServiceName has the following meanings by convention:.

* Empty serviceName means the overall status of all services at the backend.
* Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.

The grpcServiceName can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#grpc_service_name ComputeRegionHealthCheck#grpc_service_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number for the health check request.

Must be specified if portName and portSpecification are not set
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, gRPC health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

### ComputeRegionHealthCheckHttp2HealthCheck <a name="ComputeRegionHealthCheckHttp2HealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheckHttp2HealthCheck;

ComputeRegionHealthCheckHttp2HealthCheck.builder()
//  .host(java.lang.String)
//  .port(java.lang.Number)
//  .portName(java.lang.String)
//  .portSpecification(java.lang.String)
//  .proxyHeader(java.lang.String)
//  .requestPath(java.lang.String)
//  .response(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.host">host</a></code> | <code>java.lang.String</code> | The value of the host header in the HTTP2 health check request. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.port">port</a></code> | <code>java.lang.Number</code> | The TCP port number for the HTTP2 health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.portName">portName</a></code> | <code>java.lang.String</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.requestPath">requestPath</a></code> | <code>java.lang.String</code> | The request path of the HTTP2 health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.response">response</a></code> | <code>java.lang.String</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The value of the host header in the HTTP2 health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#host ComputeRegionHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The TCP port number for the HTTP2 health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTP2 health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.requestPath"></a>

```java
public java.lang.String getRequestPath();
```

- *Type:* java.lang.String

The request path of the HTTP2 health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#request_path ComputeRegionHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#response ComputeRegionHealthCheck#response}

---

### ComputeRegionHealthCheckHttpHealthCheck <a name="ComputeRegionHealthCheckHttpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheckHttpHealthCheck;

ComputeRegionHealthCheckHttpHealthCheck.builder()
//  .host(java.lang.String)
//  .port(java.lang.Number)
//  .portName(java.lang.String)
//  .portSpecification(java.lang.String)
//  .proxyHeader(java.lang.String)
//  .requestPath(java.lang.String)
//  .response(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.host">host</a></code> | <code>java.lang.String</code> | The value of the host header in the HTTP health check request. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.port">port</a></code> | <code>java.lang.Number</code> | The TCP port number for the HTTP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.portName">portName</a></code> | <code>java.lang.String</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.requestPath">requestPath</a></code> | <code>java.lang.String</code> | The request path of the HTTP health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.response">response</a></code> | <code>java.lang.String</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The value of the host header in the HTTP health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#host ComputeRegionHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.requestPath"></a>

```java
public java.lang.String getRequestPath();
```

- *Type:* java.lang.String

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#request_path ComputeRegionHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#response ComputeRegionHealthCheck#response}

---

### ComputeRegionHealthCheckHttpsHealthCheck <a name="ComputeRegionHealthCheckHttpsHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheckHttpsHealthCheck;

ComputeRegionHealthCheckHttpsHealthCheck.builder()
//  .host(java.lang.String)
//  .port(java.lang.Number)
//  .portName(java.lang.String)
//  .portSpecification(java.lang.String)
//  .proxyHeader(java.lang.String)
//  .requestPath(java.lang.String)
//  .response(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.host">host</a></code> | <code>java.lang.String</code> | The value of the host header in the HTTPS health check request. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.port">port</a></code> | <code>java.lang.Number</code> | The TCP port number for the HTTPS health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.portName">portName</a></code> | <code>java.lang.String</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.requestPath">requestPath</a></code> | <code>java.lang.String</code> | The request path of the HTTPS health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.response">response</a></code> | <code>java.lang.String</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The value of the host header in the HTTPS health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#host ComputeRegionHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTPS health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.requestPath"></a>

```java
public java.lang.String getRequestPath();
```

- *Type:* java.lang.String

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#request_path ComputeRegionHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#response ComputeRegionHealthCheck#response}

---

### ComputeRegionHealthCheckLogConfig <a name="ComputeRegionHealthCheckLogConfig" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheckLogConfig;

ComputeRegionHealthCheckLogConfig.builder()
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether or not to export logs. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether or not to export logs.

This is false by default,
which means no health check logging will be done.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#enable ComputeRegionHealthCheck#enable}

---

### ComputeRegionHealthCheckSslHealthCheck <a name="ComputeRegionHealthCheckSslHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheckSslHealthCheck;

ComputeRegionHealthCheckSslHealthCheck.builder()
//  .port(java.lang.Number)
//  .portName(java.lang.String)
//  .portSpecification(java.lang.String)
//  .proxyHeader(java.lang.String)
//  .request(java.lang.String)
//  .response(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.port">port</a></code> | <code>java.lang.Number</code> | The TCP port number for the SSL health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.portName">portName</a></code> | <code>java.lang.String</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.request">request</a></code> | <code>java.lang.String</code> | The application data to send once the SSL connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.response">response</a></code> | <code>java.lang.String</code> | The bytes to match against the beginning of the response data. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The TCP port number for the SSL health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, SSL health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.request"></a>

```java
public java.lang.String getRequest();
```

- *Type:* java.lang.String

The application data to send once the SSL connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#request ComputeRegionHealthCheck#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#response ComputeRegionHealthCheck#response}

---

### ComputeRegionHealthCheckTcpHealthCheck <a name="ComputeRegionHealthCheckTcpHealthCheck" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheckTcpHealthCheck;

ComputeRegionHealthCheckTcpHealthCheck.builder()
//  .port(java.lang.Number)
//  .portName(java.lang.String)
//  .portSpecification(java.lang.String)
//  .proxyHeader(java.lang.String)
//  .request(java.lang.String)
//  .response(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.port">port</a></code> | <code>java.lang.Number</code> | The TCP port number for the TCP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.portName">portName</a></code> | <code>java.lang.String</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.request">request</a></code> | <code>java.lang.String</code> | The application data to send once the TCP connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.response">response</a></code> | <code>java.lang.String</code> | The bytes to match against the beginning of the response data. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The TCP port number for the TCP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port ComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port_name ComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, TCP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#port_specification ComputeRegionHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#proxy_header ComputeRegionHealthCheck#proxy_header}

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.request"></a>

```java
public java.lang.String getRequest();
```

- *Type:* java.lang.String

The application data to send once the TCP connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#request ComputeRegionHealthCheck#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#response ComputeRegionHealthCheck#response}

---

### ComputeRegionHealthCheckTimeouts <a name="ComputeRegionHealthCheckTimeouts" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheckTimeouts;

ComputeRegionHealthCheckTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#create ComputeRegionHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#delete ComputeRegionHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#update ComputeRegionHealthCheck#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#create ComputeRegionHealthCheck#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#delete ComputeRegionHealthCheck#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_region_health_check#update ComputeRegionHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionHealthCheckGrpcHealthCheckOutputReference <a name="ComputeRegionHealthCheckGrpcHealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheckGrpcHealthCheckOutputReference;

new ComputeRegionHealthCheckGrpcHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName">resetGrpcServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGrpcServiceName` <a name="resetGrpcServiceName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName"></a>

```java
public void resetGrpcServiceName()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortName"></a>

```java
public void resetPortName()
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification"></a>

```java
public void resetPortSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput">grpcServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName">grpcServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grpcServiceNameInput`<sup>Optional</sup> <a name="grpcServiceNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput"></a>

```java
public java.lang.String getGrpcServiceNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portNameInput"></a>

```java
public java.lang.String getPortNameInput();
```

- *Type:* java.lang.String

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput"></a>

```java
public java.lang.String getPortSpecificationInput();
```

- *Type:* java.lang.String

---

##### `grpcServiceName`<sup>Required</sup> <a name="grpcServiceName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName"></a>

```java
public java.lang.String getGrpcServiceName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.internalValue"></a>

```java
public ComputeRegionHealthCheckGrpcHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckGrpcHealthCheck">ComputeRegionHealthCheckGrpcHealthCheck</a>

---


### ComputeRegionHealthCheckHttp2HealthCheckOutputReference <a name="ComputeRegionHealthCheckHttp2HealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheckHttp2HealthCheckOutputReference;

new ComputeRegionHealthCheckHttp2HealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortName"></a>

```java
public void resetPortName()
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification"></a>

```java
public void resetPortSpecification()
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader"></a>

```java
public void resetProxyHeader()
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetRequestPath"></a>

```java
public void resetRequestPath()
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetResponse"></a>

```java
public void resetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput">requestPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPath">requestPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.response">response</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portNameInput"></a>

```java
public java.lang.String getPortNameInput();
```

- *Type:* java.lang.String

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput"></a>

```java
public java.lang.String getPortSpecificationInput();
```

- *Type:* java.lang.String

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput"></a>

```java
public java.lang.String getProxyHeaderInput();
```

- *Type:* java.lang.String

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput"></a>

```java
public java.lang.String getRequestPathInput();
```

- *Type:* java.lang.String

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.responseInput"></a>

```java
public java.lang.String getResponseInput();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPath"></a>

```java
public java.lang.String getRequestPath();
```

- *Type:* java.lang.String

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.internalValue"></a>

```java
public ComputeRegionHealthCheckHttp2HealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttp2HealthCheck">ComputeRegionHealthCheckHttp2HealthCheck</a>

---


### ComputeRegionHealthCheckHttpHealthCheckOutputReference <a name="ComputeRegionHealthCheckHttpHealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheckHttpHealthCheckOutputReference;

new ComputeRegionHealthCheckHttpHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortName"></a>

```java
public void resetPortName()
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortSpecification"></a>

```java
public void resetPortSpecification()
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetProxyHeader"></a>

```java
public void resetProxyHeader()
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetRequestPath"></a>

```java
public void resetRequestPath()
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.resetResponse"></a>

```java
public void resetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPathInput">requestPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPath">requestPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.response">response</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portNameInput"></a>

```java
public java.lang.String getPortNameInput();
```

- *Type:* java.lang.String

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput"></a>

```java
public java.lang.String getPortSpecificationInput();
```

- *Type:* java.lang.String

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```java
public java.lang.String getProxyHeaderInput();
```

- *Type:* java.lang.String

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPathInput"></a>

```java
public java.lang.String getRequestPathInput();
```

- *Type:* java.lang.String

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.responseInput"></a>

```java
public java.lang.String getResponseInput();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPath"></a>

```java
public java.lang.String getRequestPath();
```

- *Type:* java.lang.String

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheckOutputReference.property.internalValue"></a>

```java
public ComputeRegionHealthCheckHttpHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpHealthCheck">ComputeRegionHealthCheckHttpHealthCheck</a>

---


### ComputeRegionHealthCheckHttpsHealthCheckOutputReference <a name="ComputeRegionHealthCheckHttpsHealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheckHttpsHealthCheckOutputReference;

new ComputeRegionHealthCheckHttpsHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortName"></a>

```java
public void resetPortName()
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification"></a>

```java
public void resetPortSpecification()
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader"></a>

```java
public void resetProxyHeader()
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetRequestPath"></a>

```java
public void resetRequestPath()
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetResponse"></a>

```java
public void resetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput">requestPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPath">requestPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.response">response</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portNameInput"></a>

```java
public java.lang.String getPortNameInput();
```

- *Type:* java.lang.String

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput"></a>

```java
public java.lang.String getPortSpecificationInput();
```

- *Type:* java.lang.String

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput"></a>

```java
public java.lang.String getProxyHeaderInput();
```

- *Type:* java.lang.String

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput"></a>

```java
public java.lang.String getRequestPathInput();
```

- *Type:* java.lang.String

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.responseInput"></a>

```java
public java.lang.String getResponseInput();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPath"></a>

```java
public java.lang.String getRequestPath();
```

- *Type:* java.lang.String

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.internalValue"></a>

```java
public ComputeRegionHealthCheckHttpsHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckHttpsHealthCheck">ComputeRegionHealthCheckHttpsHealthCheck</a>

---


### ComputeRegionHealthCheckLogConfigOutputReference <a name="ComputeRegionHealthCheckLogConfigOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheckLogConfigOutputReference;

new ComputeRegionHealthCheckLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.resetEnable">resetEnable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.resetEnable"></a>

```java
public void resetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfigOutputReference.property.internalValue"></a>

```java
public ComputeRegionHealthCheckLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckLogConfig">ComputeRegionHealthCheckLogConfig</a>

---


### ComputeRegionHealthCheckSslHealthCheckOutputReference <a name="ComputeRegionHealthCheckSslHealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheckSslHealthCheckOutputReference;

new ComputeRegionHealthCheckSslHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetRequest">resetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortName"></a>

```java
public void resetPortName()
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortSpecification"></a>

```java
public void resetPortSpecification()
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetProxyHeader"></a>

```java
public void resetProxyHeader()
```

##### `resetRequest` <a name="resetRequest" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetRequest"></a>

```java
public void resetRequest()
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.resetResponse"></a>

```java
public void resetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.requestInput">requestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.request">request</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.response">response</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portNameInput"></a>

```java
public java.lang.String getPortNameInput();
```

- *Type:* java.lang.String

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput"></a>

```java
public java.lang.String getPortSpecificationInput();
```

- *Type:* java.lang.String

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput"></a>

```java
public java.lang.String getProxyHeaderInput();
```

- *Type:* java.lang.String

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.requestInput"></a>

```java
public java.lang.String getRequestInput();
```

- *Type:* java.lang.String

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.responseInput"></a>

```java
public java.lang.String getResponseInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.request"></a>

```java
public java.lang.String getRequest();
```

- *Type:* java.lang.String

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheckOutputReference.property.internalValue"></a>

```java
public ComputeRegionHealthCheckSslHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckSslHealthCheck">ComputeRegionHealthCheckSslHealthCheck</a>

---


### ComputeRegionHealthCheckTcpHealthCheckOutputReference <a name="ComputeRegionHealthCheckTcpHealthCheckOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheckTcpHealthCheckOutputReference;

new ComputeRegionHealthCheckTcpHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetRequest">resetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortName"></a>

```java
public void resetPortName()
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortSpecification"></a>

```java
public void resetPortSpecification()
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetProxyHeader"></a>

```java
public void resetProxyHeader()
```

##### `resetRequest` <a name="resetRequest" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetRequest"></a>

```java
public void resetRequest()
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.resetResponse"></a>

```java
public void resetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.requestInput">requestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.request">request</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.response">response</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portNameInput"></a>

```java
public java.lang.String getPortNameInput();
```

- *Type:* java.lang.String

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput"></a>

```java
public java.lang.String getPortSpecificationInput();
```

- *Type:* java.lang.String

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```java
public java.lang.String getProxyHeaderInput();
```

- *Type:* java.lang.String

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.requestInput"></a>

```java
public java.lang.String getRequestInput();
```

- *Type:* java.lang.String

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.responseInput"></a>

```java
public java.lang.String getResponseInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.request"></a>

```java
public java.lang.String getRequest();
```

- *Type:* java.lang.String

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheckOutputReference.property.internalValue"></a>

```java
public ComputeRegionHealthCheckTcpHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTcpHealthCheck">ComputeRegionHealthCheckTcpHealthCheck</a>

---


### ComputeRegionHealthCheckTimeoutsOutputReference <a name="ComputeRegionHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_health_check.ComputeRegionHealthCheckTimeoutsOutputReference;

new ComputeRegionHealthCheckTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionHealthCheck.ComputeRegionHealthCheckTimeouts">ComputeRegionHealthCheckTimeouts</a>

---




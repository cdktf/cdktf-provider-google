# `computeHealthCheck` Submodule <a name="`computeHealthCheck` Submodule" id="@cdktf/provider-google.computeHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeHealthCheck <a name="ComputeHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check google_compute_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheck(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  check_interval_sec: typing.Union[int, float] = None,
  description: str = None,
  grpc_health_check: ComputeHealthCheckGrpcHealthCheck = None,
  healthy_threshold: typing.Union[int, float] = None,
  http2_health_check: ComputeHealthCheckHttp2HealthCheck = None,
  http_health_check: ComputeHealthCheckHttpHealthCheck = None,
  https_health_check: ComputeHealthCheckHttpsHealthCheck = None,
  id: str = None,
  log_config: ComputeHealthCheckLogConfig = None,
  project: str = None,
  ssl_health_check: ComputeHealthCheckSslHealthCheck = None,
  tcp_health_check: ComputeHealthCheckTcpHealthCheck = None,
  timeouts: ComputeHealthCheckTimeouts = None,
  timeout_sec: typing.Union[int, float] = None,
  unhealthy_threshold: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.checkIntervalSec">check_interval_sec</a></code> | <code>typing.Union[int, float]</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.grpcHealthCheck">grpc_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a></code> | grpc_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.http2HealthCheck">http2_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a></code> | http2_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.httpHealthCheck">http_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.httpsHealthCheck">https_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a></code> | https_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#id ComputeHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#project ComputeHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.sslHealthCheck">ssl_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a></code> | ssl_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.tcpHealthCheck">tcp_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a></code> | tcp_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.timeoutSec">timeout_sec</a></code> | <code>typing.Union[int, float]</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#name ComputeHealthCheck#name}

---

##### `check_interval_sec`<sup>Optional</sup> <a name="check_interval_sec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.checkIntervalSec"></a>

- *Type:* typing.Union[int, float]

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#check_interval_sec ComputeHealthCheck#check_interval_sec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#description ComputeHealthCheck#description}

---

##### `grpc_health_check`<sup>Optional</sup> <a name="grpc_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.grpcHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a>

grpc_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#grpc_health_check ComputeHealthCheck#grpc_health_check}

---

##### `healthy_threshold`<sup>Optional</sup> <a name="healthy_threshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.healthyThreshold"></a>

- *Type:* typing.Union[int, float]

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#healthy_threshold ComputeHealthCheck#healthy_threshold}

---

##### `http2_health_check`<sup>Optional</sup> <a name="http2_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.http2HealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a>

http2_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#http2_health_check ComputeHealthCheck#http2_health_check}

---

##### `http_health_check`<sup>Optional</sup> <a name="http_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.httpHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#http_health_check ComputeHealthCheck#http_health_check}

---

##### `https_health_check`<sup>Optional</sup> <a name="https_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.httpsHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a>

https_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#https_health_check ComputeHealthCheck#https_health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#id ComputeHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#log_config ComputeHealthCheck#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#project ComputeHealthCheck#project}.

---

##### `ssl_health_check`<sup>Optional</sup> <a name="ssl_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.sslHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a>

ssl_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#ssl_health_check ComputeHealthCheck#ssl_health_check}

---

##### `tcp_health_check`<sup>Optional</sup> <a name="tcp_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.tcpHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a>

tcp_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#tcp_health_check ComputeHealthCheck#tcp_health_check}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#timeouts ComputeHealthCheck#timeouts}

---

##### `timeout_sec`<sup>Optional</sup> <a name="timeout_sec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.timeoutSec"></a>

- *Type:* typing.Union[int, float]

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#timeout_sec ComputeHealthCheck#timeout_sec}

---

##### `unhealthy_threshold`<sup>Optional</sup> <a name="unhealthy_threshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.Initializer.parameter.unhealthyThreshold"></a>

- *Type:* typing.Union[int, float]

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#unhealthy_threshold ComputeHealthCheck#unhealthy_threshold}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putGrpcHealthCheck">put_grpc_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttp2HealthCheck">put_http2_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpHealthCheck">put_http_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpsHealthCheck">put_https_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putLogConfig">put_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putSslHealthCheck">put_ssl_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTcpHealthCheck">put_tcp_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetCheckIntervalSec">reset_check_interval_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetGrpcHealthCheck">reset_grpc_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHealthyThreshold">reset_healthy_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttp2HealthCheck">reset_http2_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttpHealthCheck">reset_http_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttpsHealthCheck">reset_https_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetLogConfig">reset_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetSslHealthCheck">reset_ssl_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTcpHealthCheck">reset_tcp_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTimeoutSec">reset_timeout_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetUnhealthyThreshold">reset_unhealthy_threshold</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_grpc_health_check` <a name="put_grpc_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putGrpcHealthCheck"></a>

```python
def put_grpc_health_check(
  grpc_service_name: str = None,
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None
) -> None
```

###### `grpc_service_name`<sup>Optional</sup> <a name="grpc_service_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putGrpcHealthCheck.parameter.grpcServiceName"></a>

- *Type:* str

The gRPC service name for the health check.

The value of grpcServiceName has the following meanings by convention:

* Empty serviceName means the overall status of all services at the backend.
* Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.
  The grpcServiceName can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#grpc_service_name ComputeHealthCheck#grpc_service_name}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putGrpcHealthCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port number for the health check request.

Must be specified if portName and portSpecification are not set
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

###### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putGrpcHealthCheck.parameter.portName"></a>

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

###### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putGrpcHealthCheck.parameter.portSpecification"></a>

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, gRPC health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

##### `put_http2_health_check` <a name="put_http2_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttp2HealthCheck"></a>

```python
def put_http2_health_check(
  host: str = None,
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request_path: str = None,
  response: str = None
) -> None
```

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttp2HealthCheck.parameter.host"></a>

- *Type:* str

The value of the host header in the HTTP2 health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#host ComputeHealthCheck#host}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttp2HealthCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

The TCP port number for the HTTP2 health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

###### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttp2HealthCheck.parameter.portName"></a>

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

###### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttp2HealthCheck.parameter.portSpecification"></a>

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTP2 health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

###### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttp2HealthCheck.parameter.proxyHeader"></a>

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

###### `request_path`<sup>Optional</sup> <a name="request_path" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttp2HealthCheck.parameter.requestPath"></a>

- *Type:* str

The request path of the HTTP2 health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#request_path ComputeHealthCheck#request_path}

---

###### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttp2HealthCheck.parameter.response"></a>

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

##### `put_http_health_check` <a name="put_http_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpHealthCheck"></a>

```python
def put_http_health_check(
  host: str = None,
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request_path: str = None,
  response: str = None
) -> None
```

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpHealthCheck.parameter.host"></a>

- *Type:* str

The value of the host header in the HTTP health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#host ComputeHealthCheck#host}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpHealthCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

###### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpHealthCheck.parameter.portName"></a>

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

###### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpHealthCheck.parameter.portSpecification"></a>

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

###### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpHealthCheck.parameter.proxyHeader"></a>

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

###### `request_path`<sup>Optional</sup> <a name="request_path" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpHealthCheck.parameter.requestPath"></a>

- *Type:* str

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#request_path ComputeHealthCheck#request_path}

---

###### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpHealthCheck.parameter.response"></a>

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

##### `put_https_health_check` <a name="put_https_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpsHealthCheck"></a>

```python
def put_https_health_check(
  host: str = None,
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request_path: str = None,
  response: str = None
) -> None
```

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpsHealthCheck.parameter.host"></a>

- *Type:* str

The value of the host header in the HTTPS health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#host ComputeHealthCheck#host}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpsHealthCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

###### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpsHealthCheck.parameter.portName"></a>

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

###### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpsHealthCheck.parameter.portSpecification"></a>

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTPS health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

###### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpsHealthCheck.parameter.proxyHeader"></a>

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

###### `request_path`<sup>Optional</sup> <a name="request_path" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpsHealthCheck.parameter.requestPath"></a>

- *Type:* str

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#request_path ComputeHealthCheck#request_path}

---

###### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putHttpsHealthCheck.parameter.response"></a>

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

##### `put_log_config` <a name="put_log_config" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putLogConfig"></a>

```python
def put_log_config(
  enable: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putLogConfig.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to export logs.

This is false by default,
which means no health check logging will be done.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#enable ComputeHealthCheck#enable}

---

##### `put_ssl_health_check` <a name="put_ssl_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putSslHealthCheck"></a>

```python
def put_ssl_health_check(
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request: str = None,
  response: str = None
) -> None
```

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putSslHealthCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

The TCP port number for the SSL health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

###### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putSslHealthCheck.parameter.portName"></a>

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

###### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putSslHealthCheck.parameter.portSpecification"></a>

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, SSL health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

###### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putSslHealthCheck.parameter.proxyHeader"></a>

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

###### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putSslHealthCheck.parameter.request"></a>

- *Type:* str

The application data to send once the SSL connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#request ComputeHealthCheck#request}

---

###### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putSslHealthCheck.parameter.response"></a>

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

##### `put_tcp_health_check` <a name="put_tcp_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTcpHealthCheck"></a>

```python
def put_tcp_health_check(
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request: str = None,
  response: str = None
) -> None
```

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTcpHealthCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

The TCP port number for the TCP health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

###### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTcpHealthCheck.parameter.portName"></a>

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

###### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTcpHealthCheck.parameter.portSpecification"></a>

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, TCP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

###### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTcpHealthCheck.parameter.proxyHeader"></a>

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

###### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTcpHealthCheck.parameter.request"></a>

- *Type:* str

The application data to send once the TCP connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#request ComputeHealthCheck#request}

---

###### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTcpHealthCheck.parameter.response"></a>

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#create ComputeHealthCheck#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#delete ComputeHealthCheck#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#update ComputeHealthCheck#update}.

---

##### `reset_check_interval_sec` <a name="reset_check_interval_sec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetCheckIntervalSec"></a>

```python
def reset_check_interval_sec() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_grpc_health_check` <a name="reset_grpc_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetGrpcHealthCheck"></a>

```python
def reset_grpc_health_check() -> None
```

##### `reset_healthy_threshold` <a name="reset_healthy_threshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHealthyThreshold"></a>

```python
def reset_healthy_threshold() -> None
```

##### `reset_http2_health_check` <a name="reset_http2_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttp2HealthCheck"></a>

```python
def reset_http2_health_check() -> None
```

##### `reset_http_health_check` <a name="reset_http_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttpHealthCheck"></a>

```python
def reset_http_health_check() -> None
```

##### `reset_https_health_check` <a name="reset_https_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetHttpsHealthCheck"></a>

```python
def reset_https_health_check() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_config` <a name="reset_log_config" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetLogConfig"></a>

```python
def reset_log_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_ssl_health_check` <a name="reset_ssl_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetSslHealthCheck"></a>

```python
def reset_ssl_health_check() -> None
```

##### `reset_tcp_health_check` <a name="reset_tcp_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTcpHealthCheck"></a>

```python
def reset_tcp_health_check() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timeout_sec` <a name="reset_timeout_sec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetTimeoutSec"></a>

```python
def reset_timeout_sec() -> None
```

##### `reset_unhealthy_threshold` <a name="reset_unhealthy_threshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.resetUnhealthyThreshold"></a>

```python
def reset_unhealthy_threshold() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeHealthCheck resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheck.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheck.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheck.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheck.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeHealthCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeHealthCheck to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeHealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeHealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.grpcHealthCheck">grpc_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference">ComputeHealthCheckGrpcHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.http2HealthCheck">http2_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference">ComputeHealthCheckHttp2HealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpHealthCheck">http_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference">ComputeHealthCheckHttpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpsHealthCheck">https_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference">ComputeHealthCheckHttpsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference">ComputeHealthCheckLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.sslHealthCheck">ssl_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference">ComputeHealthCheckSslHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tcpHealthCheck">tcp_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference">ComputeHealthCheckTcpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference">ComputeHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.checkIntervalSecInput">check_interval_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.grpcHealthCheckInput">grpc_health_check_input</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.healthyThresholdInput">healthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.http2HealthCheckInput">http2_health_check_input</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpHealthCheckInput">http_health_check_input</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpsHealthCheckInput">https_health_check_input</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.logConfigInput">log_config_input</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.sslHealthCheckInput">ssl_health_check_input</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tcpHealthCheckInput">tcp_health_check_input</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutSecInput">timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.unhealthyThresholdInput">unhealthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.checkIntervalSec">check_interval_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutSec">timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `grpc_health_check`<sup>Required</sup> <a name="grpc_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.grpcHealthCheck"></a>

```python
grpc_health_check: ComputeHealthCheckGrpcHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference">ComputeHealthCheckGrpcHealthCheckOutputReference</a>

---

##### `http2_health_check`<sup>Required</sup> <a name="http2_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.http2HealthCheck"></a>

```python
http2_health_check: ComputeHealthCheckHttp2HealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference">ComputeHealthCheckHttp2HealthCheckOutputReference</a>

---

##### `http_health_check`<sup>Required</sup> <a name="http_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpHealthCheck"></a>

```python
http_health_check: ComputeHealthCheckHttpHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference">ComputeHealthCheckHttpHealthCheckOutputReference</a>

---

##### `https_health_check`<sup>Required</sup> <a name="https_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpsHealthCheck"></a>

```python
https_health_check: ComputeHealthCheckHttpsHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference">ComputeHealthCheckHttpsHealthCheckOutputReference</a>

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.logConfig"></a>

```python
log_config: ComputeHealthCheckLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference">ComputeHealthCheckLogConfigOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `ssl_health_check`<sup>Required</sup> <a name="ssl_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.sslHealthCheck"></a>

```python
ssl_health_check: ComputeHealthCheckSslHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference">ComputeHealthCheckSslHealthCheckOutputReference</a>

---

##### `tcp_health_check`<sup>Required</sup> <a name="tcp_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tcpHealthCheck"></a>

```python
tcp_health_check: ComputeHealthCheckTcpHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference">ComputeHealthCheckTcpHealthCheckOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeouts"></a>

```python
timeouts: ComputeHealthCheckTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference">ComputeHealthCheckTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `check_interval_sec_input`<sup>Optional</sup> <a name="check_interval_sec_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.checkIntervalSecInput"></a>

```python
check_interval_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `grpc_health_check_input`<sup>Optional</sup> <a name="grpc_health_check_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.grpcHealthCheckInput"></a>

```python
grpc_health_check_input: ComputeHealthCheckGrpcHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a>

---

##### `healthy_threshold_input`<sup>Optional</sup> <a name="healthy_threshold_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.healthyThresholdInput"></a>

```python
healthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http2_health_check_input`<sup>Optional</sup> <a name="http2_health_check_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.http2HealthCheckInput"></a>

```python
http2_health_check_input: ComputeHealthCheckHttp2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a>

---

##### `http_health_check_input`<sup>Optional</sup> <a name="http_health_check_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpHealthCheckInput"></a>

```python
http_health_check_input: ComputeHealthCheckHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a>

---

##### `https_health_check_input`<sup>Optional</sup> <a name="https_health_check_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.httpsHealthCheckInput"></a>

```python
https_health_check_input: ComputeHealthCheckHttpsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_config_input`<sup>Optional</sup> <a name="log_config_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.logConfigInput"></a>

```python
log_config_input: ComputeHealthCheckLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `ssl_health_check_input`<sup>Optional</sup> <a name="ssl_health_check_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.sslHealthCheckInput"></a>

```python
ssl_health_check_input: ComputeHealthCheckSslHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a>

---

##### `tcp_health_check_input`<sup>Optional</sup> <a name="tcp_health_check_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tcpHealthCheckInput"></a>

```python
tcp_health_check_input: ComputeHealthCheckTcpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a>

---

##### `timeout_sec_input`<sup>Optional</sup> <a name="timeout_sec_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutSecInput"></a>

```python
timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeHealthCheckTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a>]

---

##### `unhealthy_threshold_input`<sup>Optional</sup> <a name="unhealthy_threshold_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.unhealthyThresholdInput"></a>

```python
unhealthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `check_interval_sec`<sup>Required</sup> <a name="check_interval_sec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.checkIntervalSec"></a>

```python
check_interval_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `healthy_threshold`<sup>Required</sup> <a name="healthy_threshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `timeout_sec`<sup>Required</sup> <a name="timeout_sec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.timeoutSec"></a>

```python
timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold`<sup>Required</sup> <a name="unhealthy_threshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheck.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeHealthCheckConfig <a name="ComputeHealthCheckConfig" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheckConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  check_interval_sec: typing.Union[int, float] = None,
  description: str = None,
  grpc_health_check: ComputeHealthCheckGrpcHealthCheck = None,
  healthy_threshold: typing.Union[int, float] = None,
  http2_health_check: ComputeHealthCheckHttp2HealthCheck = None,
  http_health_check: ComputeHealthCheckHttpHealthCheck = None,
  https_health_check: ComputeHealthCheckHttpsHealthCheck = None,
  id: str = None,
  log_config: ComputeHealthCheckLogConfig = None,
  project: str = None,
  ssl_health_check: ComputeHealthCheckSslHealthCheck = None,
  tcp_health_check: ComputeHealthCheckTcpHealthCheck = None,
  timeouts: ComputeHealthCheckTimeouts = None,
  timeout_sec: typing.Union[int, float] = None,
  unhealthy_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.checkIntervalSec">check_interval_sec</a></code> | <code>typing.Union[int, float]</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.grpcHealthCheck">grpc_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a></code> | grpc_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.http2HealthCheck">http2_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a></code> | http2_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.httpHealthCheck">http_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.httpsHealthCheck">https_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a></code> | https_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#id ComputeHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#project ComputeHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.sslHealthCheck">ssl_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a></code> | ssl_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.tcpHealthCheck">tcp_health_check</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a></code> | tcp_health_check block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.timeoutSec">timeout_sec</a></code> | <code>typing.Union[int, float]</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#name ComputeHealthCheck#name}

---

##### `check_interval_sec`<sup>Optional</sup> <a name="check_interval_sec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.checkIntervalSec"></a>

```python
check_interval_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#check_interval_sec ComputeHealthCheck#check_interval_sec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#description ComputeHealthCheck#description}

---

##### `grpc_health_check`<sup>Optional</sup> <a name="grpc_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.grpcHealthCheck"></a>

```python
grpc_health_check: ComputeHealthCheckGrpcHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a>

grpc_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#grpc_health_check ComputeHealthCheck#grpc_health_check}

---

##### `healthy_threshold`<sup>Optional</sup> <a name="healthy_threshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#healthy_threshold ComputeHealthCheck#healthy_threshold}

---

##### `http2_health_check`<sup>Optional</sup> <a name="http2_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.http2HealthCheck"></a>

```python
http2_health_check: ComputeHealthCheckHttp2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a>

http2_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#http2_health_check ComputeHealthCheck#http2_health_check}

---

##### `http_health_check`<sup>Optional</sup> <a name="http_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.httpHealthCheck"></a>

```python
http_health_check: ComputeHealthCheckHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#http_health_check ComputeHealthCheck#http_health_check}

---

##### `https_health_check`<sup>Optional</sup> <a name="https_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.httpsHealthCheck"></a>

```python
https_health_check: ComputeHealthCheckHttpsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a>

https_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#https_health_check ComputeHealthCheck#https_health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#id ComputeHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.logConfig"></a>

```python
log_config: ComputeHealthCheckLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#log_config ComputeHealthCheck#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#project ComputeHealthCheck#project}.

---

##### `ssl_health_check`<sup>Optional</sup> <a name="ssl_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.sslHealthCheck"></a>

```python
ssl_health_check: ComputeHealthCheckSslHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a>

ssl_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#ssl_health_check ComputeHealthCheck#ssl_health_check}

---

##### `tcp_health_check`<sup>Optional</sup> <a name="tcp_health_check" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.tcpHealthCheck"></a>

```python
tcp_health_check: ComputeHealthCheckTcpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a>

tcp_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#tcp_health_check ComputeHealthCheck#tcp_health_check}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.timeouts"></a>

```python
timeouts: ComputeHealthCheckTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#timeouts ComputeHealthCheck#timeouts}

---

##### `timeout_sec`<sup>Optional</sup> <a name="timeout_sec" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.timeoutSec"></a>

```python
timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#timeout_sec ComputeHealthCheck#timeout_sec}

---

##### `unhealthy_threshold`<sup>Optional</sup> <a name="unhealthy_threshold" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckConfig.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#unhealthy_threshold ComputeHealthCheck#unhealthy_threshold}

---

### ComputeHealthCheckGrpcHealthCheck <a name="ComputeHealthCheckGrpcHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheckGrpcHealthCheck(
  grpc_service_name: str = None,
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.grpcServiceName">grpc_service_name</a></code> | <code>str</code> | The gRPC service name for the health check. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number for the health check request. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.portName">port_name</a></code> | <code>str</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.portSpecification">port_specification</a></code> | <code>str</code> | Specifies how port is selected for health checking, can be one of the following values:. |

---

##### `grpc_service_name`<sup>Optional</sup> <a name="grpc_service_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.grpcServiceName"></a>

```python
grpc_service_name: str
```

- *Type:* str

The gRPC service name for the health check.

The value of grpcServiceName has the following meanings by convention:

* Empty serviceName means the overall status of all services at the backend.
* Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.
  The grpcServiceName can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#grpc_service_name ComputeHealthCheck#grpc_service_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number for the health check request.

Must be specified if portName and portSpecification are not set
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.portName"></a>

```python
port_name: str
```

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, gRPC health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

### ComputeHealthCheckHttp2HealthCheck <a name="ComputeHealthCheckHttp2HealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheckHttp2HealthCheck(
  host: str = None,
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request_path: str = None,
  response: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.host">host</a></code> | <code>str</code> | The value of the host header in the HTTP2 health check request. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The TCP port number for the HTTP2 health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.portName">port_name</a></code> | <code>str</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.portSpecification">port_specification</a></code> | <code>str</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.proxyHeader">proxy_header</a></code> | <code>str</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.requestPath">request_path</a></code> | <code>str</code> | The request path of the HTTP2 health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.response">response</a></code> | <code>str</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.host"></a>

```python
host: str
```

- *Type:* str

The value of the host header in the HTTP2 health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#host ComputeHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TCP port number for the HTTP2 health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.portName"></a>

```python
port_name: str
```

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTP2 health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

##### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

##### `request_path`<sup>Optional</sup> <a name="request_path" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.requestPath"></a>

```python
request_path: str
```

- *Type:* str

The request path of the HTTP2 health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#request_path ComputeHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck.property.response"></a>

```python
response: str
```

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

### ComputeHealthCheckHttpHealthCheck <a name="ComputeHealthCheckHttpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheckHttpHealthCheck(
  host: str = None,
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request_path: str = None,
  response: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.host">host</a></code> | <code>str</code> | The value of the host header in the HTTP health check request. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The TCP port number for the HTTP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.portName">port_name</a></code> | <code>str</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.portSpecification">port_specification</a></code> | <code>str</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.proxyHeader">proxy_header</a></code> | <code>str</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.requestPath">request_path</a></code> | <code>str</code> | The request path of the HTTP health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.response">response</a></code> | <code>str</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.host"></a>

```python
host: str
```

- *Type:* str

The value of the host header in the HTTP health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#host ComputeHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.portName"></a>

```python
port_name: str
```

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

##### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

##### `request_path`<sup>Optional</sup> <a name="request_path" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.requestPath"></a>

```python
request_path: str
```

- *Type:* str

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#request_path ComputeHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck.property.response"></a>

```python
response: str
```

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

### ComputeHealthCheckHttpsHealthCheck <a name="ComputeHealthCheckHttpsHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheckHttpsHealthCheck(
  host: str = None,
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request_path: str = None,
  response: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.host">host</a></code> | <code>str</code> | The value of the host header in the HTTPS health check request. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The TCP port number for the HTTPS health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.portName">port_name</a></code> | <code>str</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.portSpecification">port_specification</a></code> | <code>str</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.proxyHeader">proxy_header</a></code> | <code>str</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.requestPath">request_path</a></code> | <code>str</code> | The request path of the HTTPS health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.response">response</a></code> | <code>str</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.host"></a>

```python
host: str
```

- *Type:* str

The value of the host header in the HTTPS health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#host ComputeHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.portName"></a>

```python
port_name: str
```

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTPS health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

##### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

##### `request_path`<sup>Optional</sup> <a name="request_path" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.requestPath"></a>

```python
request_path: str
```

- *Type:* str

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#request_path ComputeHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck.property.response"></a>

```python
response: str
```

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

### ComputeHealthCheckLogConfig <a name="ComputeHealthCheckLogConfig" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheckLogConfig(
  enable: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether or not to export logs. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to export logs.

This is false by default,
which means no health check logging will be done.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#enable ComputeHealthCheck#enable}

---

### ComputeHealthCheckSslHealthCheck <a name="ComputeHealthCheckSslHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheckSslHealthCheck(
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request: str = None,
  response: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The TCP port number for the SSL health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.portName">port_name</a></code> | <code>str</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.portSpecification">port_specification</a></code> | <code>str</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.proxyHeader">proxy_header</a></code> | <code>str</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.request">request</a></code> | <code>str</code> | The application data to send once the SSL connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.response">response</a></code> | <code>str</code> | The bytes to match against the beginning of the response data. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TCP port number for the SSL health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.portName"></a>

```python
port_name: str
```

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, SSL health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

##### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.request"></a>

```python
request: str
```

- *Type:* str

The application data to send once the SSL connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#request ComputeHealthCheck#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck.property.response"></a>

```python
response: str
```

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

### ComputeHealthCheckTcpHealthCheck <a name="ComputeHealthCheckTcpHealthCheck" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheckTcpHealthCheck(
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request: str = None,
  response: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The TCP port number for the TCP health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.portName">port_name</a></code> | <code>str</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.portSpecification">port_specification</a></code> | <code>str</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.proxyHeader">proxy_header</a></code> | <code>str</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.request">request</a></code> | <code>str</code> | The application data to send once the TCP connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.response">response</a></code> | <code>str</code> | The bytes to match against the beginning of the response data. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TCP port number for the TCP health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port ComputeHealthCheck#port}

---

##### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.portName"></a>

```python
port_name: str
```

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_name ComputeHealthCheck#port_name}

---

##### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, TCP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#port_specification ComputeHealthCheck#port_specification}

---

##### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#proxy_header ComputeHealthCheck#proxy_header}

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.request"></a>

```python
request: str
```

- *Type:* str

The application data to send once the TCP connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#request ComputeHealthCheck#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck.property.response"></a>

```python
response: str
```

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#response ComputeHealthCheck#response}

---

### ComputeHealthCheckTimeouts <a name="ComputeHealthCheckTimeouts" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheckTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#create ComputeHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#delete ComputeHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#update ComputeHealthCheck#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#create ComputeHealthCheck#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#delete ComputeHealthCheck#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/compute_health_check#update ComputeHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeHealthCheckGrpcHealthCheckOutputReference <a name="ComputeHealthCheckGrpcHealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName">reset_grpc_service_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPortName">reset_port_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification">reset_port_specification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_grpc_service_name` <a name="reset_grpc_service_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName"></a>

```python
def reset_grpc_service_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_port_name` <a name="reset_port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPortName"></a>

```python
def reset_port_name() -> None
```

##### `reset_port_specification` <a name="reset_port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification"></a>

```python
def reset_port_specification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput">grpc_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portNameInput">port_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput">port_specification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName">grpc_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecification">port_specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grpc_service_name_input`<sup>Optional</sup> <a name="grpc_service_name_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput"></a>

```python
grpc_service_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name_input`<sup>Optional</sup> <a name="port_name_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portNameInput"></a>

```python
port_name_input: str
```

- *Type:* str

---

##### `port_specification_input`<sup>Optional</sup> <a name="port_specification_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput"></a>

```python
port_specification_input: str
```

- *Type:* str

---

##### `grpc_service_name`<sup>Required</sup> <a name="grpc_service_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName"></a>

```python
grpc_service_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `port_specification`<sup>Required</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: ComputeHealthCheckGrpcHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckGrpcHealthCheck">ComputeHealthCheckGrpcHealthCheck</a>

---


### ComputeHealthCheckHttp2HealthCheckOutputReference <a name="ComputeHealthCheckHttp2HealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPortName">reset_port_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification">reset_port_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader">reset_proxy_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetRequestPath">reset_request_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetResponse">reset_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_port_name` <a name="reset_port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPortName"></a>

```python
def reset_port_name() -> None
```

##### `reset_port_specification` <a name="reset_port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification"></a>

```python
def reset_port_specification() -> None
```

##### `reset_proxy_header` <a name="reset_proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader"></a>

```python
def reset_proxy_header() -> None
```

##### `reset_request_path` <a name="reset_request_path" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetRequestPath"></a>

```python
def reset_request_path() -> None
```

##### `reset_response` <a name="reset_response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.resetResponse"></a>

```python
def reset_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portNameInput">port_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput">port_specification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput">proxy_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput">request_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.responseInput">response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecification">port_specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader">proxy_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPath">request_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.response">response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name_input`<sup>Optional</sup> <a name="port_name_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portNameInput"></a>

```python
port_name_input: str
```

- *Type:* str

---

##### `port_specification_input`<sup>Optional</sup> <a name="port_specification_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput"></a>

```python
port_specification_input: str
```

- *Type:* str

---

##### `proxy_header_input`<sup>Optional</sup> <a name="proxy_header_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput"></a>

```python
proxy_header_input: str
```

- *Type:* str

---

##### `request_path_input`<sup>Optional</sup> <a name="request_path_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput"></a>

```python
request_path_input: str
```

- *Type:* str

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.responseInput"></a>

```python
response_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `port_specification`<sup>Required</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

---

##### `proxy_header`<sup>Required</sup> <a name="proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

---

##### `request_path`<sup>Required</sup> <a name="request_path" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPath"></a>

```python
request_path: str
```

- *Type:* str

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.response"></a>

```python
response: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: ComputeHealthCheckHttp2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttp2HealthCheck">ComputeHealthCheckHttp2HealthCheck</a>

---


### ComputeHealthCheckHttpHealthCheckOutputReference <a name="ComputeHealthCheckHttpHealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPortName">reset_port_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPortSpecification">reset_port_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetProxyHeader">reset_proxy_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetRequestPath">reset_request_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetResponse">reset_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_port_name` <a name="reset_port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPortName"></a>

```python
def reset_port_name() -> None
```

##### `reset_port_specification` <a name="reset_port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetPortSpecification"></a>

```python
def reset_port_specification() -> None
```

##### `reset_proxy_header` <a name="reset_proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetProxyHeader"></a>

```python
def reset_proxy_header() -> None
```

##### `reset_request_path` <a name="reset_request_path" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetRequestPath"></a>

```python
def reset_request_path() -> None
```

##### `reset_response` <a name="reset_response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.resetResponse"></a>

```python
def reset_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portNameInput">port_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput">port_specification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput">proxy_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.requestPathInput">request_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.responseInput">response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecification">port_specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeader">proxy_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.requestPath">request_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.response">response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name_input`<sup>Optional</sup> <a name="port_name_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portNameInput"></a>

```python
port_name_input: str
```

- *Type:* str

---

##### `port_specification_input`<sup>Optional</sup> <a name="port_specification_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput"></a>

```python
port_specification_input: str
```

- *Type:* str

---

##### `proxy_header_input`<sup>Optional</sup> <a name="proxy_header_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```python
proxy_header_input: str
```

- *Type:* str

---

##### `request_path_input`<sup>Optional</sup> <a name="request_path_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.requestPathInput"></a>

```python
request_path_input: str
```

- *Type:* str

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.responseInput"></a>

```python
response_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `port_specification`<sup>Required</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

---

##### `proxy_header`<sup>Required</sup> <a name="proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

---

##### `request_path`<sup>Required</sup> <a name="request_path" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.requestPath"></a>

```python
request_path: str
```

- *Type:* str

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.response"></a>

```python
response: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: ComputeHealthCheckHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpHealthCheck">ComputeHealthCheckHttpHealthCheck</a>

---


### ComputeHealthCheckHttpsHealthCheckOutputReference <a name="ComputeHealthCheckHttpsHealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPortName">reset_port_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification">reset_port_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader">reset_proxy_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetRequestPath">reset_request_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetResponse">reset_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_port_name` <a name="reset_port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPortName"></a>

```python
def reset_port_name() -> None
```

##### `reset_port_specification` <a name="reset_port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification"></a>

```python
def reset_port_specification() -> None
```

##### `reset_proxy_header` <a name="reset_proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader"></a>

```python
def reset_proxy_header() -> None
```

##### `reset_request_path` <a name="reset_request_path" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetRequestPath"></a>

```python
def reset_request_path() -> None
```

##### `reset_response` <a name="reset_response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.resetResponse"></a>

```python
def reset_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portNameInput">port_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput">port_specification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput">proxy_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput">request_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.responseInput">response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecification">port_specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader">proxy_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPath">request_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.response">response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name_input`<sup>Optional</sup> <a name="port_name_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portNameInput"></a>

```python
port_name_input: str
```

- *Type:* str

---

##### `port_specification_input`<sup>Optional</sup> <a name="port_specification_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput"></a>

```python
port_specification_input: str
```

- *Type:* str

---

##### `proxy_header_input`<sup>Optional</sup> <a name="proxy_header_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput"></a>

```python
proxy_header_input: str
```

- *Type:* str

---

##### `request_path_input`<sup>Optional</sup> <a name="request_path_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput"></a>

```python
request_path_input: str
```

- *Type:* str

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.responseInput"></a>

```python
response_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `port_specification`<sup>Required</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

---

##### `proxy_header`<sup>Required</sup> <a name="proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

---

##### `request_path`<sup>Required</sup> <a name="request_path" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPath"></a>

```python
request_path: str
```

- *Type:* str

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.response"></a>

```python
response: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: ComputeHealthCheckHttpsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckHttpsHealthCheck">ComputeHealthCheckHttpsHealthCheck</a>

---


### ComputeHealthCheckLogConfigOutputReference <a name="ComputeHealthCheckLogConfigOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheckLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.resetEnable">reset_enable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable` <a name="reset_enable" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeHealthCheckLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckLogConfig">ComputeHealthCheckLogConfig</a>

---


### ComputeHealthCheckSslHealthCheckOutputReference <a name="ComputeHealthCheckSslHealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPortName">reset_port_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPortSpecification">reset_port_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetProxyHeader">reset_proxy_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetRequest">reset_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetResponse">reset_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_port_name` <a name="reset_port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPortName"></a>

```python
def reset_port_name() -> None
```

##### `reset_port_specification` <a name="reset_port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetPortSpecification"></a>

```python
def reset_port_specification() -> None
```

##### `reset_proxy_header` <a name="reset_proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetProxyHeader"></a>

```python
def reset_proxy_header() -> None
```

##### `reset_request` <a name="reset_request" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetRequest"></a>

```python
def reset_request() -> None
```

##### `reset_response` <a name="reset_response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.resetResponse"></a>

```python
def reset_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portNameInput">port_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput">port_specification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput">proxy_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.requestInput">request_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.responseInput">response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portSpecification">port_specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeader">proxy_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.request">request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.response">response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name_input`<sup>Optional</sup> <a name="port_name_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portNameInput"></a>

```python
port_name_input: str
```

- *Type:* str

---

##### `port_specification_input`<sup>Optional</sup> <a name="port_specification_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput"></a>

```python
port_specification_input: str
```

- *Type:* str

---

##### `proxy_header_input`<sup>Optional</sup> <a name="proxy_header_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput"></a>

```python
proxy_header_input: str
```

- *Type:* str

---

##### `request_input`<sup>Optional</sup> <a name="request_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.requestInput"></a>

```python
request_input: str
```

- *Type:* str

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.responseInput"></a>

```python
response_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `port_specification`<sup>Required</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

---

##### `proxy_header`<sup>Required</sup> <a name="proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.request"></a>

```python
request: str
```

- *Type:* str

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.response"></a>

```python
response: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: ComputeHealthCheckSslHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckSslHealthCheck">ComputeHealthCheckSslHealthCheck</a>

---


### ComputeHealthCheckTcpHealthCheckOutputReference <a name="ComputeHealthCheckTcpHealthCheckOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPortName">reset_port_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPortSpecification">reset_port_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetProxyHeader">reset_proxy_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetRequest">reset_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetResponse">reset_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_port_name` <a name="reset_port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPortName"></a>

```python
def reset_port_name() -> None
```

##### `reset_port_specification` <a name="reset_port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetPortSpecification"></a>

```python
def reset_port_specification() -> None
```

##### `reset_proxy_header` <a name="reset_proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetProxyHeader"></a>

```python
def reset_proxy_header() -> None
```

##### `reset_request` <a name="reset_request" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetRequest"></a>

```python
def reset_request() -> None
```

##### `reset_response` <a name="reset_response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.resetResponse"></a>

```python
def reset_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portNameInput">port_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput">port_specification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput">proxy_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.requestInput">request_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.responseInput">response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecification">port_specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeader">proxy_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.request">request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.response">response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name_input`<sup>Optional</sup> <a name="port_name_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portNameInput"></a>

```python
port_name_input: str
```

- *Type:* str

---

##### `port_specification_input`<sup>Optional</sup> <a name="port_specification_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput"></a>

```python
port_specification_input: str
```

- *Type:* str

---

##### `proxy_header_input`<sup>Optional</sup> <a name="proxy_header_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```python
proxy_header_input: str
```

- *Type:* str

---

##### `request_input`<sup>Optional</sup> <a name="request_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.requestInput"></a>

```python
request_input: str
```

- *Type:* str

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.responseInput"></a>

```python
response_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `port_specification`<sup>Required</sup> <a name="port_specification" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

---

##### `proxy_header`<sup>Required</sup> <a name="proxy_header" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.request"></a>

```python
request: str
```

- *Type:* str

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.response"></a>

```python
response: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: ComputeHealthCheckTcpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTcpHealthCheck">ComputeHealthCheckTcpHealthCheck</a>

---


### ComputeHealthCheckTimeoutsOutputReference <a name="ComputeHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_health_check

computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeHealthCheckTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeHealthCheck.ComputeHealthCheckTimeouts">ComputeHealthCheckTimeouts</a>]

---




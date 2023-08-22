# `google_cloud_tasks_queue`

Refer to the Terraform Registory for docs: [`google_cloud_tasks_queue`](https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue).

# `cloudTasksQueue` Submodule <a name="`cloudTasksQueue` Submodule" id="@cdktf/provider-google.cloudTasksQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudTasksQueue <a name="CloudTasksQueue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue google_cloud_tasks_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueue(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  app_engine_routing_override: CloudTasksQueueAppEngineRoutingOverride = None,
  id: str = None,
  name: str = None,
  project: str = None,
  rate_limits: CloudTasksQueueRateLimits = None,
  retry_config: CloudTasksQueueRetryConfig = None,
  stackdriver_logging_config: CloudTasksQueueStackdriverLoggingConfig = None,
  timeouts: CloudTasksQueueTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the queue. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.appEngineRoutingOverride">app_engine_routing_override</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a></code> | app_engine_routing_override block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#id CloudTasksQueue#id}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.name">name</a></code> | <code>str</code> | The queue name. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#project CloudTasksQueue#project}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.rateLimits">rate_limits</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a></code> | rate_limits block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.retryConfig">retry_config</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.stackdriverLoggingConfig">stackdriver_logging_config</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a></code> | stackdriver_logging_config block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.location"></a>

- *Type:* str

The location of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#location CloudTasksQueue#location}

---

##### `app_engine_routing_override`<sup>Optional</sup> <a name="app_engine_routing_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.appEngineRoutingOverride"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

app_engine_routing_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#app_engine_routing_override CloudTasksQueue#app_engine_routing_override}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#id CloudTasksQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.name"></a>

- *Type:* str

The queue name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#name CloudTasksQueue#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#project CloudTasksQueue#project}.

---

##### `rate_limits`<sup>Optional</sup> <a name="rate_limits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.rateLimits"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#rate_limits CloudTasksQueue#rate_limits}

---

##### `retry_config`<sup>Optional</sup> <a name="retry_config" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.retryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#retry_config CloudTasksQueue#retry_config}

---

##### `stackdriver_logging_config`<sup>Optional</sup> <a name="stackdriver_logging_config" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.stackdriverLoggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

stackdriver_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#stackdriver_logging_config CloudTasksQueue#stackdriver_logging_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#timeouts CloudTasksQueue#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putAppEngineRoutingOverride">put_app_engine_routing_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRateLimits">put_rate_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig">put_retry_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putStackdriverLoggingConfig">put_stackdriver_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetAppEngineRoutingOverride">reset_app_engine_routing_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetRateLimits">reset_rate_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetRetryConfig">reset_retry_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetStackdriverLoggingConfig">reset_stackdriver_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_app_engine_routing_override` <a name="put_app_engine_routing_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putAppEngineRoutingOverride"></a>

```python
def put_app_engine_routing_override(
  instance: str = None,
  service: str = None,
  version: str = None
) -> None
```

###### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putAppEngineRoutingOverride.parameter.instance"></a>

- *Type:* str

App instance.

By default, the task is sent to an instance which is available when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#instance CloudTasksQueue#instance}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putAppEngineRoutingOverride.parameter.service"></a>

- *Type:* str

App service.

By default, the task is sent to the service which is the default service when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#service CloudTasksQueue#service}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putAppEngineRoutingOverride.parameter.version"></a>

- *Type:* str

App version.

By default, the task is sent to the version which is the default version when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#version CloudTasksQueue#version}

---

##### `put_rate_limits` <a name="put_rate_limits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRateLimits"></a>

```python
def put_rate_limits(
  max_concurrent_dispatches: typing.Union[int, float] = None,
  max_dispatches_per_second: typing.Union[int, float] = None
) -> None
```

###### `max_concurrent_dispatches`<sup>Optional</sup> <a name="max_concurrent_dispatches" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRateLimits.parameter.maxConcurrentDispatches"></a>

- *Type:* typing.Union[int, float]

The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue.

After this threshold has been
reached, Cloud Tasks stops dispatching tasks until the number of
concurrent requests decreases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#max_concurrent_dispatches CloudTasksQueue#max_concurrent_dispatches}

---

###### `max_dispatches_per_second`<sup>Optional</sup> <a name="max_dispatches_per_second" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRateLimits.parameter.maxDispatchesPerSecond"></a>

- *Type:* typing.Union[int, float]

The maximum rate at which tasks are dispatched from this queue.

If unspecified when the queue is created, Cloud Tasks will pick the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#max_dispatches_per_second CloudTasksQueue#max_dispatches_per_second}

---

##### `put_retry_config` <a name="put_retry_config" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig"></a>

```python
def put_retry_config(
  max_attempts: typing.Union[int, float] = None,
  max_backoff: str = None,
  max_doublings: typing.Union[int, float] = None,
  max_retry_duration: str = None,
  min_backoff: str = None
) -> None
```

###### `max_attempts`<sup>Optional</sup> <a name="max_attempts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig.parameter.maxAttempts"></a>

- *Type:* typing.Union[int, float]

Number of attempts per task.

Cloud Tasks will attempt the task maxAttempts times (that is, if
the first attempt fails, then there will be maxAttempts - 1
retries). Must be >= -1.

If unspecified when the queue is created, Cloud Tasks will pick
the default.

-1 indicates unlimited attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#max_attempts CloudTasksQueue#max_attempts}

---

###### `max_backoff`<sup>Optional</sup> <a name="max_backoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig.parameter.maxBackoff"></a>

- *Type:* str

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#max_backoff CloudTasksQueue#max_backoff}

---

###### `max_doublings`<sup>Optional</sup> <a name="max_doublings" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig.parameter.maxDoublings"></a>

- *Type:* typing.Union[int, float]

The time between retries will double maxDoublings times.

A task's retry interval starts at minBackoff, then doubles maxDoublings times,
then increases linearly, and finally retries retries at intervals of maxBackoff
up to maxAttempts times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#max_doublings CloudTasksQueue#max_doublings}

---

###### `max_retry_duration`<sup>Optional</sup> <a name="max_retry_duration" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig.parameter.maxRetryDuration"></a>

- *Type:* str

If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted.

Once maxRetryDuration time has passed and the task has
been attempted maxAttempts times, no further attempts will be
made and the task will be deleted.

If zero, then the task age is unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#max_retry_duration CloudTasksQueue#max_retry_duration}

---

###### `min_backoff`<sup>Optional</sup> <a name="min_backoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig.parameter.minBackoff"></a>

- *Type:* str

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#min_backoff CloudTasksQueue#min_backoff}

---

##### `put_stackdriver_logging_config` <a name="put_stackdriver_logging_config" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putStackdriverLoggingConfig"></a>

```python
def put_stackdriver_logging_config(
  sampling_ratio: typing.Union[int, float]
) -> None
```

###### `sampling_ratio`<sup>Required</sup> <a name="sampling_ratio" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putStackdriverLoggingConfig.parameter.samplingRatio"></a>

- *Type:* typing.Union[int, float]

Specifies the fraction of operations to write to Stackdriver Logging.

This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the
default and means that no operations are logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#sampling_ratio CloudTasksQueue#sampling_ratio}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#create CloudTasksQueue#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#delete CloudTasksQueue#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#update CloudTasksQueue#update}.

---

##### `reset_app_engine_routing_override` <a name="reset_app_engine_routing_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetAppEngineRoutingOverride"></a>

```python
def reset_app_engine_routing_override() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_rate_limits` <a name="reset_rate_limits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetRateLimits"></a>

```python
def reset_rate_limits() -> None
```

##### `reset_retry_config` <a name="reset_retry_config" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetRetryConfig"></a>

```python
def reset_retry_config() -> None
```

##### `reset_stackdriver_logging_config` <a name="reset_stackdriver_logging_config" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetStackdriverLoggingConfig"></a>

```python
def reset_stackdriver_logging_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.appEngineRoutingOverride">app_engine_routing_override</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference">CloudTasksQueueAppEngineRoutingOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.rateLimits">rate_limits</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference">CloudTasksQueueRateLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.retryConfig">retry_config</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference">CloudTasksQueueRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.stackdriverLoggingConfig">stackdriver_logging_config</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference">CloudTasksQueueStackdriverLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference">CloudTasksQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.appEngineRoutingOverrideInput">app_engine_routing_override_input</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.rateLimitsInput">rate_limits_input</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.retryConfigInput">retry_config_input</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.stackdriverLoggingConfigInput">stackdriver_logging_config_input</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_engine_routing_override`<sup>Required</sup> <a name="app_engine_routing_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.appEngineRoutingOverride"></a>

```python
app_engine_routing_override: CloudTasksQueueAppEngineRoutingOverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference">CloudTasksQueueAppEngineRoutingOverrideOutputReference</a>

---

##### `rate_limits`<sup>Required</sup> <a name="rate_limits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.rateLimits"></a>

```python
rate_limits: CloudTasksQueueRateLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference">CloudTasksQueueRateLimitsOutputReference</a>

---

##### `retry_config`<sup>Required</sup> <a name="retry_config" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.retryConfig"></a>

```python
retry_config: CloudTasksQueueRetryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference">CloudTasksQueueRetryConfigOutputReference</a>

---

##### `stackdriver_logging_config`<sup>Required</sup> <a name="stackdriver_logging_config" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.stackdriverLoggingConfig"></a>

```python
stackdriver_logging_config: CloudTasksQueueStackdriverLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference">CloudTasksQueueStackdriverLoggingConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.timeouts"></a>

```python
timeouts: CloudTasksQueueTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference">CloudTasksQueueTimeoutsOutputReference</a>

---

##### `app_engine_routing_override_input`<sup>Optional</sup> <a name="app_engine_routing_override_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.appEngineRoutingOverrideInput"></a>

```python
app_engine_routing_override_input: CloudTasksQueueAppEngineRoutingOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rate_limits_input`<sup>Optional</sup> <a name="rate_limits_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.rateLimitsInput"></a>

```python
rate_limits_input: CloudTasksQueueRateLimits
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

---

##### `retry_config_input`<sup>Optional</sup> <a name="retry_config_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.retryConfigInput"></a>

```python
retry_config_input: CloudTasksQueueRetryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

---

##### `stackdriver_logging_config_input`<sup>Optional</sup> <a name="stackdriver_logging_config_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.stackdriverLoggingConfigInput"></a>

```python
stackdriver_logging_config_input: CloudTasksQueueStackdriverLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CloudTasksQueueTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudTasksQueueAppEngineRoutingOverride <a name="CloudTasksQueueAppEngineRoutingOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride(
  instance: str = None,
  service: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.instance">instance</a></code> | <code>str</code> | App instance. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.service">service</a></code> | <code>str</code> | App service. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.version">version</a></code> | <code>str</code> | App version. |

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.instance"></a>

```python
instance: str
```

- *Type:* str

App instance.

By default, the task is sent to an instance which is available when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#instance CloudTasksQueue#instance}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.service"></a>

```python
service: str
```

- *Type:* str

App service.

By default, the task is sent to the service which is the default service when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#service CloudTasksQueue#service}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.version"></a>

```python
version: str
```

- *Type:* str

App version.

By default, the task is sent to the version which is the default version when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#version CloudTasksQueue#version}

---

### CloudTasksQueueConfig <a name="CloudTasksQueueConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  app_engine_routing_override: CloudTasksQueueAppEngineRoutingOverride = None,
  id: str = None,
  name: str = None,
  project: str = None,
  rate_limits: CloudTasksQueueRateLimits = None,
  retry_config: CloudTasksQueueRetryConfig = None,
  stackdriver_logging_config: CloudTasksQueueStackdriverLoggingConfig = None,
  timeouts: CloudTasksQueueTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.location">location</a></code> | <code>str</code> | The location of the queue. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.appEngineRoutingOverride">app_engine_routing_override</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a></code> | app_engine_routing_override block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#id CloudTasksQueue#id}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.name">name</a></code> | <code>str</code> | The queue name. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#project CloudTasksQueue#project}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.rateLimits">rate_limits</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a></code> | rate_limits block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.retryConfig">retry_config</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.stackdriverLoggingConfig">stackdriver_logging_config</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a></code> | stackdriver_logging_config block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#location CloudTasksQueue#location}

---

##### `app_engine_routing_override`<sup>Optional</sup> <a name="app_engine_routing_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.appEngineRoutingOverride"></a>

```python
app_engine_routing_override: CloudTasksQueueAppEngineRoutingOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

app_engine_routing_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#app_engine_routing_override CloudTasksQueue#app_engine_routing_override}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#id CloudTasksQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The queue name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#name CloudTasksQueue#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#project CloudTasksQueue#project}.

---

##### `rate_limits`<sup>Optional</sup> <a name="rate_limits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.rateLimits"></a>

```python
rate_limits: CloudTasksQueueRateLimits
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#rate_limits CloudTasksQueue#rate_limits}

---

##### `retry_config`<sup>Optional</sup> <a name="retry_config" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.retryConfig"></a>

```python
retry_config: CloudTasksQueueRetryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#retry_config CloudTasksQueue#retry_config}

---

##### `stackdriver_logging_config`<sup>Optional</sup> <a name="stackdriver_logging_config" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.stackdriverLoggingConfig"></a>

```python
stackdriver_logging_config: CloudTasksQueueStackdriverLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

stackdriver_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#stackdriver_logging_config CloudTasksQueue#stackdriver_logging_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.timeouts"></a>

```python
timeouts: CloudTasksQueueTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#timeouts CloudTasksQueue#timeouts}

---

### CloudTasksQueueRateLimits <a name="CloudTasksQueueRateLimits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueRateLimits(
  max_concurrent_dispatches: typing.Union[int, float] = None,
  max_dispatches_per_second: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.property.maxConcurrentDispatches">max_concurrent_dispatches</a></code> | <code>typing.Union[int, float]</code> | The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.property.maxDispatchesPerSecond">max_dispatches_per_second</a></code> | <code>typing.Union[int, float]</code> | The maximum rate at which tasks are dispatched from this queue. |

---

##### `max_concurrent_dispatches`<sup>Optional</sup> <a name="max_concurrent_dispatches" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.property.maxConcurrentDispatches"></a>

```python
max_concurrent_dispatches: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue.

After this threshold has been
reached, Cloud Tasks stops dispatching tasks until the number of
concurrent requests decreases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#max_concurrent_dispatches CloudTasksQueue#max_concurrent_dispatches}

---

##### `max_dispatches_per_second`<sup>Optional</sup> <a name="max_dispatches_per_second" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.property.maxDispatchesPerSecond"></a>

```python
max_dispatches_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum rate at which tasks are dispatched from this queue.

If unspecified when the queue is created, Cloud Tasks will pick the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#max_dispatches_per_second CloudTasksQueue#max_dispatches_per_second}

---

### CloudTasksQueueRetryConfig <a name="CloudTasksQueueRetryConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueRetryConfig(
  max_attempts: typing.Union[int, float] = None,
  max_backoff: str = None,
  max_doublings: typing.Union[int, float] = None,
  max_retry_duration: str = None,
  min_backoff: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | Number of attempts per task. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxBackoff">max_backoff</a></code> | <code>str</code> | A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxDoublings">max_doublings</a></code> | <code>typing.Union[int, float]</code> | The time between retries will double maxDoublings times. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxRetryDuration">max_retry_duration</a></code> | <code>str</code> | If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.minBackoff">min_backoff</a></code> | <code>str</code> | A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. |

---

##### `max_attempts`<sup>Optional</sup> <a name="max_attempts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of attempts per task.

Cloud Tasks will attempt the task maxAttempts times (that is, if
the first attempt fails, then there will be maxAttempts - 1
retries). Must be >= -1.

If unspecified when the queue is created, Cloud Tasks will pick
the default.

-1 indicates unlimited attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#max_attempts CloudTasksQueue#max_attempts}

---

##### `max_backoff`<sup>Optional</sup> <a name="max_backoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxBackoff"></a>

```python
max_backoff: str
```

- *Type:* str

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#max_backoff CloudTasksQueue#max_backoff}

---

##### `max_doublings`<sup>Optional</sup> <a name="max_doublings" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxDoublings"></a>

```python
max_doublings: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time between retries will double maxDoublings times.

A task's retry interval starts at minBackoff, then doubles maxDoublings times,
then increases linearly, and finally retries retries at intervals of maxBackoff
up to maxAttempts times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#max_doublings CloudTasksQueue#max_doublings}

---

##### `max_retry_duration`<sup>Optional</sup> <a name="max_retry_duration" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxRetryDuration"></a>

```python
max_retry_duration: str
```

- *Type:* str

If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted.

Once maxRetryDuration time has passed and the task has
been attempted maxAttempts times, no further attempts will be
made and the task will be deleted.

If zero, then the task age is unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#max_retry_duration CloudTasksQueue#max_retry_duration}

---

##### `min_backoff`<sup>Optional</sup> <a name="min_backoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.minBackoff"></a>

```python
min_backoff: str
```

- *Type:* str

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#min_backoff CloudTasksQueue#min_backoff}

---

### CloudTasksQueueStackdriverLoggingConfig <a name="CloudTasksQueueStackdriverLoggingConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig(
  sampling_ratio: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig.property.samplingRatio">sampling_ratio</a></code> | <code>typing.Union[int, float]</code> | Specifies the fraction of operations to write to Stackdriver Logging. |

---

##### `sampling_ratio`<sup>Required</sup> <a name="sampling_ratio" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig.property.samplingRatio"></a>

```python
sampling_ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the fraction of operations to write to Stackdriver Logging.

This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the
default and means that no operations are logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#sampling_ratio CloudTasksQueue#sampling_ratio}

---

### CloudTasksQueueTimeouts <a name="CloudTasksQueueTimeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#create CloudTasksQueue#create}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#delete CloudTasksQueue#delete}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#update CloudTasksQueue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#create CloudTasksQueue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#delete CloudTasksQueue#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/cloud_tasks_queue#update CloudTasksQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudTasksQueueAppEngineRoutingOverrideOutputReference <a name="CloudTasksQueueAppEngineRoutingOverrideOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetInstance">reset_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance` <a name="reset_instance" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetInstance"></a>

```python
def reset_instance() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.internalValue"></a>

```python
internal_value: CloudTasksQueueAppEngineRoutingOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

---


### CloudTasksQueueRateLimitsOutputReference <a name="CloudTasksQueueRateLimitsOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resetMaxConcurrentDispatches">reset_max_concurrent_dispatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resetMaxDispatchesPerSecond">reset_max_dispatches_per_second</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_concurrent_dispatches` <a name="reset_max_concurrent_dispatches" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resetMaxConcurrentDispatches"></a>

```python
def reset_max_concurrent_dispatches() -> None
```

##### `reset_max_dispatches_per_second` <a name="reset_max_dispatches_per_second" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resetMaxDispatchesPerSecond"></a>

```python
def reset_max_dispatches_per_second() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxBurstSize">max_burst_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatchesInput">max_concurrent_dispatches_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecondInput">max_dispatches_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatches">max_concurrent_dispatches</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecond">max_dispatches_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_burst_size`<sup>Required</sup> <a name="max_burst_size" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxBurstSize"></a>

```python
max_burst_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_dispatches_input`<sup>Optional</sup> <a name="max_concurrent_dispatches_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatchesInput"></a>

```python
max_concurrent_dispatches_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_dispatches_per_second_input`<sup>Optional</sup> <a name="max_dispatches_per_second_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecondInput"></a>

```python
max_dispatches_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_dispatches`<sup>Required</sup> <a name="max_concurrent_dispatches" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatches"></a>

```python
max_concurrent_dispatches: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_dispatches_per_second`<sup>Required</sup> <a name="max_dispatches_per_second" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecond"></a>

```python
max_dispatches_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.internalValue"></a>

```python
internal_value: CloudTasksQueueRateLimits
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

---


### CloudTasksQueueRetryConfigOutputReference <a name="CloudTasksQueueRetryConfigOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxAttempts">reset_max_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxBackoff">reset_max_backoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxDoublings">reset_max_doublings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxRetryDuration">reset_max_retry_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMinBackoff">reset_min_backoff</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_attempts` <a name="reset_max_attempts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxAttempts"></a>

```python
def reset_max_attempts() -> None
```

##### `reset_max_backoff` <a name="reset_max_backoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxBackoff"></a>

```python
def reset_max_backoff() -> None
```

##### `reset_max_doublings` <a name="reset_max_doublings" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxDoublings"></a>

```python
def reset_max_doublings() -> None
```

##### `reset_max_retry_duration` <a name="reset_max_retry_duration" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxRetryDuration"></a>

```python
def reset_max_retry_duration() -> None
```

##### `reset_min_backoff` <a name="reset_min_backoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMinBackoff"></a>

```python
def reset_min_backoff() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxAttemptsInput">max_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxBackoffInput">max_backoff_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxDoublingsInput">max_doublings_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxRetryDurationInput">max_retry_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.minBackoffInput">min_backoff_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxBackoff">max_backoff</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxDoublings">max_doublings</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxRetryDuration">max_retry_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.minBackoff">min_backoff</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_attempts_input`<sup>Optional</sup> <a name="max_attempts_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxAttemptsInput"></a>

```python
max_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_backoff_input`<sup>Optional</sup> <a name="max_backoff_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxBackoffInput"></a>

```python
max_backoff_input: str
```

- *Type:* str

---

##### `max_doublings_input`<sup>Optional</sup> <a name="max_doublings_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxDoublingsInput"></a>

```python
max_doublings_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retry_duration_input`<sup>Optional</sup> <a name="max_retry_duration_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxRetryDurationInput"></a>

```python
max_retry_duration_input: str
```

- *Type:* str

---

##### `min_backoff_input`<sup>Optional</sup> <a name="min_backoff_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.minBackoffInput"></a>

```python
min_backoff_input: str
```

- *Type:* str

---

##### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_backoff`<sup>Required</sup> <a name="max_backoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxBackoff"></a>

```python
max_backoff: str
```

- *Type:* str

---

##### `max_doublings`<sup>Required</sup> <a name="max_doublings" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxDoublings"></a>

```python
max_doublings: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retry_duration`<sup>Required</sup> <a name="max_retry_duration" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxRetryDuration"></a>

```python
max_retry_duration: str
```

- *Type:* str

---

##### `min_backoff`<sup>Required</sup> <a name="min_backoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.minBackoff"></a>

```python
min_backoff: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudTasksQueueRetryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

---


### CloudTasksQueueStackdriverLoggingConfigOutputReference <a name="CloudTasksQueueStackdriverLoggingConfigOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatioInput">sampling_ratio_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatio">sampling_ratio</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sampling_ratio_input`<sup>Optional</sup> <a name="sampling_ratio_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatioInput"></a>

```python
sampling_ratio_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sampling_ratio`<sup>Required</sup> <a name="sampling_ratio" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatio"></a>

```python
sampling_ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudTasksQueueStackdriverLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

---


### CloudTasksQueueTimeoutsOutputReference <a name="CloudTasksQueueTimeoutsOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudTasksQueueTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a>]

---




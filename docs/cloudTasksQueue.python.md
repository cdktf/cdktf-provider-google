# `cloudTasksQueue` Submodule <a name="`cloudTasksQueue` Submodule" id="@cdktf/provider-google.cloudTasksQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudTasksQueue <a name="CloudTasksQueue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue google_cloud_tasks_queue}.

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
  http_target: CloudTasksQueueHttpTarget = None,
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
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.httpTarget">http_target</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#id CloudTasksQueue#id}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.name">name</a></code> | <code>str</code> | The queue name. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#project CloudTasksQueue#project}. |
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#location CloudTasksQueue#location}

---

##### `app_engine_routing_override`<sup>Optional</sup> <a name="app_engine_routing_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.appEngineRoutingOverride"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

app_engine_routing_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#app_engine_routing_override CloudTasksQueue#app_engine_routing_override}

---

##### `http_target`<sup>Optional</sup> <a name="http_target" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.httpTarget"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#http_target CloudTasksQueue#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#id CloudTasksQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.name"></a>

- *Type:* str

The queue name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#name CloudTasksQueue#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#project CloudTasksQueue#project}.

---

##### `rate_limits`<sup>Optional</sup> <a name="rate_limits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.rateLimits"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#rate_limits CloudTasksQueue#rate_limits}

---

##### `retry_config`<sup>Optional</sup> <a name="retry_config" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.retryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#retry_config CloudTasksQueue#retry_config}

---

##### `stackdriver_logging_config`<sup>Optional</sup> <a name="stackdriver_logging_config" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.stackdriverLoggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

stackdriver_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#stackdriver_logging_config CloudTasksQueue#stackdriver_logging_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#timeouts CloudTasksQueue#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putAppEngineRoutingOverride">put_app_engine_routing_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putHttpTarget">put_http_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRateLimits">put_rate_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig">put_retry_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putStackdriverLoggingConfig">put_stackdriver_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetAppEngineRoutingOverride">reset_app_engine_routing_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetHttpTarget">reset_http_target</a></code> | *No description.* |
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

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

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

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

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

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#instance CloudTasksQueue#instance}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putAppEngineRoutingOverride.parameter.service"></a>

- *Type:* str

App service.

By default, the task is sent to the service which is the default service when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#service CloudTasksQueue#service}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putAppEngineRoutingOverride.parameter.version"></a>

- *Type:* str

App version.

By default, the task is sent to the version which is the default version when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#version CloudTasksQueue#version}

---

##### `put_http_target` <a name="put_http_target" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putHttpTarget"></a>

```python
def put_http_target(
  header_overrides: typing.Union[IResolvable, typing.List[CloudTasksQueueHttpTargetHeaderOverrides]] = None,
  http_method: str = None,
  oauth_token: CloudTasksQueueHttpTargetOauthToken = None,
  oidc_token: CloudTasksQueueHttpTargetOidcToken = None,
  uri_override: CloudTasksQueueHttpTargetUriOverride = None
) -> None
```

###### `header_overrides`<sup>Optional</sup> <a name="header_overrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putHttpTarget.parameter.headerOverrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>]]

header_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#header_overrides CloudTasksQueue#header_overrides}

---

###### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putHttpTarget.parameter.httpMethod"></a>

- *Type:* str

The HTTP method to use for the request.

When specified, it overrides HttpRequest for the task.
Note that if the value is set to GET the body of the task will be ignored at execution time. Possible values: ["HTTP_METHOD_UNSPECIFIED", "POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#http_method CloudTasksQueue#http_method}

---

###### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putHttpTarget.parameter.oauthToken"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#oauth_token CloudTasksQueue#oauth_token}

---

###### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putHttpTarget.parameter.oidcToken"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#oidc_token CloudTasksQueue#oidc_token}

---

###### `uri_override`<sup>Optional</sup> <a name="uri_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putHttpTarget.parameter.uriOverride"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a>

uri_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#uri_override CloudTasksQueue#uri_override}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#max_concurrent_dispatches CloudTasksQueue#max_concurrent_dispatches}

---

###### `max_dispatches_per_second`<sup>Optional</sup> <a name="max_dispatches_per_second" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRateLimits.parameter.maxDispatchesPerSecond"></a>

- *Type:* typing.Union[int, float]

The maximum rate at which tasks are dispatched from this queue.

If unspecified when the queue is created, Cloud Tasks will pick the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#max_dispatches_per_second CloudTasksQueue#max_dispatches_per_second}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#max_attempts CloudTasksQueue#max_attempts}

---

###### `max_backoff`<sup>Optional</sup> <a name="max_backoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig.parameter.maxBackoff"></a>

- *Type:* str

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#max_backoff CloudTasksQueue#max_backoff}

---

###### `max_doublings`<sup>Optional</sup> <a name="max_doublings" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig.parameter.maxDoublings"></a>

- *Type:* typing.Union[int, float]

The time between retries will double maxDoublings times.

A task's retry interval starts at minBackoff, then doubles maxDoublings times,
then increases linearly, and finally retries retries at intervals of maxBackoff
up to maxAttempts times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#max_doublings CloudTasksQueue#max_doublings}

---

###### `max_retry_duration`<sup>Optional</sup> <a name="max_retry_duration" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig.parameter.maxRetryDuration"></a>

- *Type:* str

If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted.

Once maxRetryDuration time has passed and the task has
been attempted maxAttempts times, no further attempts will be
made and the task will be deleted.

If zero, then the task age is unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#max_retry_duration CloudTasksQueue#max_retry_duration}

---

###### `min_backoff`<sup>Optional</sup> <a name="min_backoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig.parameter.minBackoff"></a>

- *Type:* str

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#min_backoff CloudTasksQueue#min_backoff}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#sampling_ratio CloudTasksQueue#sampling_ratio}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#create CloudTasksQueue#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#delete CloudTasksQueue#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#update CloudTasksQueue#update}.

---

##### `reset_app_engine_routing_override` <a name="reset_app_engine_routing_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetAppEngineRoutingOverride"></a>

```python
def reset_app_engine_routing_override() -> None
```

##### `reset_http_target` <a name="reset_http_target" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetHttpTarget"></a>

```python
def reset_http_target() -> None
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
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudTasksQueue resource upon running "cdktf plan <stack-name>". |

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

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudTasksQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudTasksQueue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudTasksQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudTasksQueue to import is found.

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
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.httpTarget">http_target</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference">CloudTasksQueueHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.rateLimits">rate_limits</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference">CloudTasksQueueRateLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.retryConfig">retry_config</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference">CloudTasksQueueRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.stackdriverLoggingConfig">stackdriver_logging_config</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference">CloudTasksQueueStackdriverLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference">CloudTasksQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.appEngineRoutingOverrideInput">app_engine_routing_override_input</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.httpTargetInput">http_target_input</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a></code> | *No description.* |
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

##### `http_target`<sup>Required</sup> <a name="http_target" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.httpTarget"></a>

```python
http_target: CloudTasksQueueHttpTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference">CloudTasksQueueHttpTargetOutputReference</a>

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

##### `http_target_input`<sup>Optional</sup> <a name="http_target_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.httpTargetInput"></a>

```python
http_target_input: CloudTasksQueueHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#instance CloudTasksQueue#instance}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.service"></a>

```python
service: str
```

- *Type:* str

App service.

By default, the task is sent to the service which is the default service when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#service CloudTasksQueue#service}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.version"></a>

```python
version: str
```

- *Type:* str

App version.

By default, the task is sent to the version which is the default version when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#version CloudTasksQueue#version}

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
  http_target: CloudTasksQueueHttpTarget = None,
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
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.httpTarget">http_target</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#id CloudTasksQueue#id}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.name">name</a></code> | <code>str</code> | The queue name. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#project CloudTasksQueue#project}. |
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#location CloudTasksQueue#location}

---

##### `app_engine_routing_override`<sup>Optional</sup> <a name="app_engine_routing_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.appEngineRoutingOverride"></a>

```python
app_engine_routing_override: CloudTasksQueueAppEngineRoutingOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

app_engine_routing_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#app_engine_routing_override CloudTasksQueue#app_engine_routing_override}

---

##### `http_target`<sup>Optional</sup> <a name="http_target" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.httpTarget"></a>

```python
http_target: CloudTasksQueueHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#http_target CloudTasksQueue#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#id CloudTasksQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The queue name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#name CloudTasksQueue#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#project CloudTasksQueue#project}.

---

##### `rate_limits`<sup>Optional</sup> <a name="rate_limits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.rateLimits"></a>

```python
rate_limits: CloudTasksQueueRateLimits
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#rate_limits CloudTasksQueue#rate_limits}

---

##### `retry_config`<sup>Optional</sup> <a name="retry_config" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.retryConfig"></a>

```python
retry_config: CloudTasksQueueRetryConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#retry_config CloudTasksQueue#retry_config}

---

##### `stackdriver_logging_config`<sup>Optional</sup> <a name="stackdriver_logging_config" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.stackdriverLoggingConfig"></a>

```python
stackdriver_logging_config: CloudTasksQueueStackdriverLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

stackdriver_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#stackdriver_logging_config CloudTasksQueue#stackdriver_logging_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.timeouts"></a>

```python
timeouts: CloudTasksQueueTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#timeouts CloudTasksQueue#timeouts}

---

### CloudTasksQueueHttpTarget <a name="CloudTasksQueueHttpTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueHttpTarget(
  header_overrides: typing.Union[IResolvable, typing.List[CloudTasksQueueHttpTargetHeaderOverrides]] = None,
  http_method: str = None,
  oauth_token: CloudTasksQueueHttpTargetOauthToken = None,
  oidc_token: CloudTasksQueueHttpTargetOidcToken = None,
  uri_override: CloudTasksQueueHttpTargetUriOverride = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.headerOverrides">header_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>]]</code> | header_overrides block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.httpMethod">http_method</a></code> | <code>str</code> | The HTTP method to use for the request. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.oauthToken">oauth_token</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a></code> | oauth_token block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.oidcToken">oidc_token</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a></code> | oidc_token block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.uriOverride">uri_override</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a></code> | uri_override block. |

---

##### `header_overrides`<sup>Optional</sup> <a name="header_overrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.headerOverrides"></a>

```python
header_overrides: typing.Union[IResolvable, typing.List[CloudTasksQueueHttpTargetHeaderOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>]]

header_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#header_overrides CloudTasksQueue#header_overrides}

---

##### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

The HTTP method to use for the request.

When specified, it overrides HttpRequest for the task.
Note that if the value is set to GET the body of the task will be ignored at execution time. Possible values: ["HTTP_METHOD_UNSPECIFIED", "POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#http_method CloudTasksQueue#http_method}

---

##### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.oauthToken"></a>

```python
oauth_token: CloudTasksQueueHttpTargetOauthToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#oauth_token CloudTasksQueue#oauth_token}

---

##### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.oidcToken"></a>

```python
oidc_token: CloudTasksQueueHttpTargetOidcToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#oidc_token CloudTasksQueue#oidc_token}

---

##### `uri_override`<sup>Optional</sup> <a name="uri_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.uriOverride"></a>

```python
uri_override: CloudTasksQueueHttpTargetUriOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a>

uri_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#uri_override CloudTasksQueue#uri_override}

---

### CloudTasksQueueHttpTargetHeaderOverrides <a name="CloudTasksQueueHttpTargetHeaderOverrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides(
  header: CloudTasksQueueHttpTargetHeaderOverridesHeader
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides.property.header">header</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | header block. |

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides.property.header"></a>

```python
header: CloudTasksQueueHttpTargetHeaderOverridesHeader
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#header CloudTasksQueue#header}

---

### CloudTasksQueueHttpTargetHeaderOverridesHeader <a name="CloudTasksQueueHttpTargetHeaderOverridesHeader" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.property.key">key</a></code> | <code>str</code> | The Key of the header. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.property.value">value</a></code> | <code>str</code> | The Value of the header. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.property.key"></a>

```python
key: str
```

- *Type:* str

The Key of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#key CloudTasksQueue#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.property.value"></a>

```python
value: str
```

- *Type:* str

The Value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#value CloudTasksQueue#value}

---

### CloudTasksQueueHttpTargetOauthToken <a name="CloudTasksQueueHttpTargetOauthToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken(
  service_account_email: str,
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.property.scope">scope</a></code> | <code>str</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

Service account email to be used for generating OAuth token.

The service account must be within the same project as the queue.
The caller must have iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#service_account_email CloudTasksQueue#service_account_email}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.property.scope"></a>

```python
scope: str
```

- *Type:* str

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#scope CloudTasksQueue#scope}

---

### CloudTasksQueueHttpTargetOidcToken <a name="CloudTasksQueueHttpTargetOidcToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken(
  service_account_email: str,
  audience: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | Service account email to be used for generating OIDC token. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.property.audience">audience</a></code> | <code>str</code> | Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used. |

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

Service account email to be used for generating OIDC token.

The service account must be within the same project as the queue.
The caller must have iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#service_account_email CloudTasksQueue#service_account_email}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.property.audience"></a>

```python
audience: str
```

- *Type:* str

Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#audience CloudTasksQueue#audience}

---

### CloudTasksQueueHttpTargetUriOverride <a name="CloudTasksQueueHttpTargetUriOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride(
  host: str = None,
  path_override: CloudTasksQueueHttpTargetUriOverridePathOverride = None,
  port: str = None,
  query_override: CloudTasksQueueHttpTargetUriOverrideQueryOverride = None,
  scheme: str = None,
  uri_override_enforce_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.host">host</a></code> | <code>str</code> | Host override. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.pathOverride">path_override</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | path_override block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.port">port</a></code> | <code>str</code> | Port override. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.queryOverride">query_override</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | query_override block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.scheme">scheme</a></code> | <code>str</code> | Scheme override. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.uriOverrideEnforceMode">uri_override_enforce_mode</a></code> | <code>str</code> | URI Override Enforce Mode. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.host"></a>

```python
host: str
```

- *Type:* str

Host override.

When specified, replaces the host part of the task URL.
For example, if the task URL is "https://www.google.com", and host value
is set to "example.net", the overridden URI will be changed to "https://example.net".
Host value cannot be an empty string (INVALID_ARGUMENT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#host CloudTasksQueue#host}

---

##### `path_override`<sup>Optional</sup> <a name="path_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.pathOverride"></a>

```python
path_override: CloudTasksQueueHttpTargetUriOverridePathOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a>

path_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#path_override CloudTasksQueue#path_override}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.port"></a>

```python
port: str
```

- *Type:* str

Port override.

When specified, replaces the port part of the task URI.
For instance, for a URI http://www.google.com/foo and port=123, the overridden URI becomes http://www.google.com:123/foo.
Note that the port value must be a positive integer.
Setting the port to 0 (Zero) clears the URI port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#port CloudTasksQueue#port}

---

##### `query_override`<sup>Optional</sup> <a name="query_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.queryOverride"></a>

```python
query_override: CloudTasksQueueHttpTargetUriOverrideQueryOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

query_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#query_override CloudTasksQueue#query_override}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

Scheme override.

When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS). Possible values: ["HTTP", "HTTPS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#scheme CloudTasksQueue#scheme}

---

##### `uri_override_enforce_mode`<sup>Optional</sup> <a name="uri_override_enforce_mode" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.uriOverrideEnforceMode"></a>

```python
uri_override_enforce_mode: str
```

- *Type:* str

URI Override Enforce Mode.

When specified, determines the Target UriOverride mode. If not specified, it defaults to ALWAYS. Possible values: ["ALWAYS", "IF_NOT_EXISTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#uri_override_enforce_mode CloudTasksQueue#uri_override_enforce_mode}

---

### CloudTasksQueueHttpTargetUriOverridePathOverride <a name="CloudTasksQueueHttpTargetUriOverridePathOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride(
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride.property.path">path</a></code> | <code>str</code> | The URI path (e.g., /users/1234). Default is an empty string. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride.property.path"></a>

```python
path: str
```

- *Type:* str

The URI path (e.g., /users/1234). Default is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#path CloudTasksQueue#path}

---

### CloudTasksQueueHttpTargetUriOverrideQueryOverride <a name="CloudTasksQueueHttpTargetUriOverrideQueryOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride(
  query_params: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride.property.queryParams">query_params</a></code> | <code>str</code> | The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string. |

---

##### `query_params`<sup>Optional</sup> <a name="query_params" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride.property.queryParams"></a>

```python
query_params: str
```

- *Type:* str

The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#query_params CloudTasksQueue#query_params}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#max_concurrent_dispatches CloudTasksQueue#max_concurrent_dispatches}

---

##### `max_dispatches_per_second`<sup>Optional</sup> <a name="max_dispatches_per_second" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.property.maxDispatchesPerSecond"></a>

```python
max_dispatches_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum rate at which tasks are dispatched from this queue.

If unspecified when the queue is created, Cloud Tasks will pick the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#max_dispatches_per_second CloudTasksQueue#max_dispatches_per_second}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#max_attempts CloudTasksQueue#max_attempts}

---

##### `max_backoff`<sup>Optional</sup> <a name="max_backoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxBackoff"></a>

```python
max_backoff: str
```

- *Type:* str

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#max_backoff CloudTasksQueue#max_backoff}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#max_doublings CloudTasksQueue#max_doublings}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#max_retry_duration CloudTasksQueue#max_retry_duration}

---

##### `min_backoff`<sup>Optional</sup> <a name="min_backoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.minBackoff"></a>

```python
min_backoff: str
```

- *Type:* str

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#min_backoff CloudTasksQueue#min_backoff}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#sampling_ratio CloudTasksQueue#sampling_ratio}

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
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#create CloudTasksQueue#create}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#delete CloudTasksQueue#delete}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#update CloudTasksQueue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#create CloudTasksQueue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#delete CloudTasksQueue#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#update CloudTasksQueue#update}.

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


### CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference <a name="CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.internalValue"></a>

```python
internal_value: CloudTasksQueueHttpTargetHeaderOverridesHeader
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a>

---


### CloudTasksQueueHttpTargetHeaderOverridesList <a name="CloudTasksQueueHttpTargetHeaderOverridesList" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudTasksQueueHttpTargetHeaderOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudTasksQueueHttpTargetHeaderOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>]]

---


### CloudTasksQueueHttpTargetHeaderOverridesOutputReference <a name="CloudTasksQueueHttpTargetHeaderOverridesOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader">put_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header` <a name="put_header" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader"></a>

```python
def put_header(
  key: str,
  value: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader.parameter.key"></a>

- *Type:* str

The Key of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#key CloudTasksQueue#key}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader.parameter.value"></a>

- *Type:* str

The Value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#value CloudTasksQueue#value}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference">CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.headerInput">header_input</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.header"></a>

```python
header: CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference">CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference</a>

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.headerInput"></a>

```python
header_input: CloudTasksQueueHttpTargetHeaderOverridesHeader
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudTasksQueueHttpTargetHeaderOverrides]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>]

---


### CloudTasksQueueHttpTargetOauthTokenOutputReference <a name="CloudTasksQueueHttpTargetOauthTokenOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.internalValue"></a>

```python
internal_value: CloudTasksQueueHttpTargetOauthToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a>

---


### CloudTasksQueueHttpTargetOidcTokenOutputReference <a name="CloudTasksQueueHttpTargetOidcTokenOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resetAudience">reset_audience</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audience` <a name="reset_audience" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resetAudience"></a>

```python
def reset_audience() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.internalValue"></a>

```python
internal_value: CloudTasksQueueHttpTargetOidcToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a>

---


### CloudTasksQueueHttpTargetOutputReference <a name="CloudTasksQueueHttpTargetOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putHeaderOverrides">put_header_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOauthToken">put_oauth_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOidcToken">put_oidc_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putUriOverride">put_uri_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetHeaderOverrides">reset_header_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetHttpMethod">reset_http_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetOauthToken">reset_oauth_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetOidcToken">reset_oidc_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetUriOverride">reset_uri_override</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header_overrides` <a name="put_header_overrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putHeaderOverrides"></a>

```python
def put_header_overrides(
  value: typing.Union[IResolvable, typing.List[CloudTasksQueueHttpTargetHeaderOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putHeaderOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>]]

---

##### `put_oauth_token` <a name="put_oauth_token" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOauthToken"></a>

```python
def put_oauth_token(
  service_account_email: str,
  scope: str = None
) -> None
```

###### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOauthToken.parameter.serviceAccountEmail"></a>

- *Type:* str

Service account email to be used for generating OAuth token.

The service account must be within the same project as the queue.
The caller must have iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#service_account_email CloudTasksQueue#service_account_email}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOauthToken.parameter.scope"></a>

- *Type:* str

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#scope CloudTasksQueue#scope}

---

##### `put_oidc_token` <a name="put_oidc_token" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOidcToken"></a>

```python
def put_oidc_token(
  service_account_email: str,
  audience: str = None
) -> None
```

###### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOidcToken.parameter.serviceAccountEmail"></a>

- *Type:* str

Service account email to be used for generating OIDC token.

The service account must be within the same project as the queue.
The caller must have iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#service_account_email CloudTasksQueue#service_account_email}

---

###### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOidcToken.parameter.audience"></a>

- *Type:* str

Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#audience CloudTasksQueue#audience}

---

##### `put_uri_override` <a name="put_uri_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putUriOverride"></a>

```python
def put_uri_override(
  host: str = None,
  path_override: CloudTasksQueueHttpTargetUriOverridePathOverride = None,
  port: str = None,
  query_override: CloudTasksQueueHttpTargetUriOverrideQueryOverride = None,
  scheme: str = None,
  uri_override_enforce_mode: str = None
) -> None
```

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putUriOverride.parameter.host"></a>

- *Type:* str

Host override.

When specified, replaces the host part of the task URL.
For example, if the task URL is "https://www.google.com", and host value
is set to "example.net", the overridden URI will be changed to "https://example.net".
Host value cannot be an empty string (INVALID_ARGUMENT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#host CloudTasksQueue#host}

---

###### `path_override`<sup>Optional</sup> <a name="path_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putUriOverride.parameter.pathOverride"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a>

path_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#path_override CloudTasksQueue#path_override}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putUriOverride.parameter.port"></a>

- *Type:* str

Port override.

When specified, replaces the port part of the task URI.
For instance, for a URI http://www.google.com/foo and port=123, the overridden URI becomes http://www.google.com:123/foo.
Note that the port value must be a positive integer.
Setting the port to 0 (Zero) clears the URI port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#port CloudTasksQueue#port}

---

###### `query_override`<sup>Optional</sup> <a name="query_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putUriOverride.parameter.queryOverride"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

query_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#query_override CloudTasksQueue#query_override}

---

###### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putUriOverride.parameter.scheme"></a>

- *Type:* str

Scheme override.

When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS). Possible values: ["HTTP", "HTTPS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#scheme CloudTasksQueue#scheme}

---

###### `uri_override_enforce_mode`<sup>Optional</sup> <a name="uri_override_enforce_mode" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putUriOverride.parameter.uriOverrideEnforceMode"></a>

- *Type:* str

URI Override Enforce Mode.

When specified, determines the Target UriOverride mode. If not specified, it defaults to ALWAYS. Possible values: ["ALWAYS", "IF_NOT_EXISTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#uri_override_enforce_mode CloudTasksQueue#uri_override_enforce_mode}

---

##### `reset_header_overrides` <a name="reset_header_overrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetHeaderOverrides"></a>

```python
def reset_header_overrides() -> None
```

##### `reset_http_method` <a name="reset_http_method" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetHttpMethod"></a>

```python
def reset_http_method() -> None
```

##### `reset_oauth_token` <a name="reset_oauth_token" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetOauthToken"></a>

```python
def reset_oauth_token() -> None
```

##### `reset_oidc_token` <a name="reset_oidc_token" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetOidcToken"></a>

```python
def reset_oidc_token() -> None
```

##### `reset_uri_override` <a name="reset_uri_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetUriOverride"></a>

```python
def reset_uri_override() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.headerOverrides">header_overrides</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList">CloudTasksQueueHttpTargetHeaderOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oauthToken">oauth_token</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference">CloudTasksQueueHttpTargetOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oidcToken">oidc_token</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference">CloudTasksQueueHttpTargetOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.uriOverride">uri_override</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference">CloudTasksQueueHttpTargetUriOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.headerOverridesInput">header_overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oauthTokenInput">oauth_token_input</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oidcTokenInput">oidc_token_input</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.uriOverrideInput">uri_override_input</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_overrides`<sup>Required</sup> <a name="header_overrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.headerOverrides"></a>

```python
header_overrides: CloudTasksQueueHttpTargetHeaderOverridesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList">CloudTasksQueueHttpTargetHeaderOverridesList</a>

---

##### `oauth_token`<sup>Required</sup> <a name="oauth_token" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oauthToken"></a>

```python
oauth_token: CloudTasksQueueHttpTargetOauthTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference">CloudTasksQueueHttpTargetOauthTokenOutputReference</a>

---

##### `oidc_token`<sup>Required</sup> <a name="oidc_token" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oidcToken"></a>

```python
oidc_token: CloudTasksQueueHttpTargetOidcTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference">CloudTasksQueueHttpTargetOidcTokenOutputReference</a>

---

##### `uri_override`<sup>Required</sup> <a name="uri_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.uriOverride"></a>

```python
uri_override: CloudTasksQueueHttpTargetUriOverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference">CloudTasksQueueHttpTargetUriOverrideOutputReference</a>

---

##### `header_overrides_input`<sup>Optional</sup> <a name="header_overrides_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.headerOverridesInput"></a>

```python
header_overrides_input: typing.Union[IResolvable, typing.List[CloudTasksQueueHttpTargetHeaderOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>]]

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `oauth_token_input`<sup>Optional</sup> <a name="oauth_token_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oauthTokenInput"></a>

```python
oauth_token_input: CloudTasksQueueHttpTargetOauthToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a>

---

##### `oidc_token_input`<sup>Optional</sup> <a name="oidc_token_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oidcTokenInput"></a>

```python
oidc_token_input: CloudTasksQueueHttpTargetOidcToken
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a>

---

##### `uri_override_input`<sup>Optional</sup> <a name="uri_override_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.uriOverrideInput"></a>

```python
uri_override_input: CloudTasksQueueHttpTargetUriOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a>

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.internalValue"></a>

```python
internal_value: CloudTasksQueueHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a>

---


### CloudTasksQueueHttpTargetUriOverrideOutputReference <a name="CloudTasksQueueHttpTargetUriOverrideOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride">put_path_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride">put_query_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetPathOverride">reset_path_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetQueryOverride">reset_query_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetScheme">reset_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetUriOverrideEnforceMode">reset_uri_override_enforce_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_path_override` <a name="put_path_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride"></a>

```python
def put_path_override(
  path: str = None
) -> None
```

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride.parameter.path"></a>

- *Type:* str

The URI path (e.g., /users/1234). Default is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#path CloudTasksQueue#path}

---

##### `put_query_override` <a name="put_query_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride"></a>

```python
def put_query_override(
  query_params: str = None
) -> None
```

###### `query_params`<sup>Optional</sup> <a name="query_params" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride.parameter.queryParams"></a>

- *Type:* str

The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_tasks_queue#query_params CloudTasksQueue#query_params}

---

##### `reset_host` <a name="reset_host" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_path_override` <a name="reset_path_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetPathOverride"></a>

```python
def reset_path_override() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_query_override` <a name="reset_query_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetQueryOverride"></a>

```python
def reset_query_override() -> None
```

##### `reset_scheme` <a name="reset_scheme" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetScheme"></a>

```python
def reset_scheme() -> None
```

##### `reset_uri_override_enforce_mode` <a name="reset_uri_override_enforce_mode" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetUriOverrideEnforceMode"></a>

```python
def reset_uri_override_enforce_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverride">path_override</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference">CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverride">query_override</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference">CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverrideInput">path_override_input</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverrideInput">query_override_input</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceModeInput">uri_override_enforce_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceMode">uri_override_enforce_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_override`<sup>Required</sup> <a name="path_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverride"></a>

```python
path_override: CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference">CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference</a>

---

##### `query_override`<sup>Required</sup> <a name="query_override" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverride"></a>

```python
query_override: CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference">CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference</a>

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `path_override_input`<sup>Optional</sup> <a name="path_override_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverrideInput"></a>

```python
path_override_input: CloudTasksQueueHttpTargetUriOverridePathOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a>

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `query_override_input`<sup>Optional</sup> <a name="query_override_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverrideInput"></a>

```python
query_override_input: CloudTasksQueueHttpTargetUriOverrideQueryOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `uri_override_enforce_mode_input`<sup>Optional</sup> <a name="uri_override_enforce_mode_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceModeInput"></a>

```python
uri_override_enforce_mode_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `uri_override_enforce_mode`<sup>Required</sup> <a name="uri_override_enforce_mode" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceMode"></a>

```python
uri_override_enforce_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.internalValue"></a>

```python
internal_value: CloudTasksQueueHttpTargetUriOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a>

---


### CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference <a name="CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.internalValue"></a>

```python
internal_value: CloudTasksQueueHttpTargetUriOverridePathOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a>

---


### CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference <a name="CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloud_tasks_queue

cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resetQueryParams">reset_query_params</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query_params` <a name="reset_query_params" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resetQueryParams"></a>

```python
def reset_query_params() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParamsInput">query_params_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParams">query_params</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_params_input`<sup>Optional</sup> <a name="query_params_input" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParamsInput"></a>

```python
query_params_input: str
```

- *Type:* str

---

##### `query_params`<sup>Required</sup> <a name="query_params" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParams"></a>

```python
query_params: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.internalValue"></a>

```python
internal_value: CloudTasksQueueHttpTargetUriOverrideQueryOverride
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

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




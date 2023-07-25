# `google_cloudiot_registry`

Refer to the Terraform Registory for docs: [`google_cloudiot_registry`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry).

# `cloudiotRegistry` Submodule <a name="`cloudiotRegistry` Submodule" id="@cdktf/provider-google.cloudiotRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudiotRegistry <a name="CloudiotRegistry" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry google_cloudiot_registry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudiot_registry

cloudiotRegistry.CloudiotRegistry(
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
  credentials: typing.Union[IResolvable, typing.List[CloudiotRegistryCredentials]] = None,
  event_notification_configs: typing.Union[IResolvable, typing.List[CloudiotRegistryEventNotificationConfigs]] = None,
  http_config: typing.Mapping[str] = None,
  id: str = None,
  log_level: str = None,
  mqtt_config: typing.Mapping[str] = None,
  project: str = None,
  region: str = None,
  state_notification_config: typing.Mapping[str] = None,
  timeouts: CloudiotRegistryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.name">name</a></code> | <code>str</code> | A unique name for the resource, required by device registry. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.credentials">credentials</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>]]</code> | credentials block. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.eventNotificationConfigs">event_notification_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>]]</code> | event_notification_configs block. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.httpConfig">http_config</a></code> | <code>typing.Mapping[str]</code> | Activate or deactivate HTTP. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#id CloudiotRegistry#id}. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.logLevel">log_level</a></code> | <code>str</code> | The default logging verbosity for activity from devices in this registry. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.mqttConfig">mqtt_config</a></code> | <code>typing.Mapping[str]</code> | Activate or deactivate MQTT. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#project CloudiotRegistry#project}. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.region">region</a></code> | <code>str</code> | The region in which the created registry should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.stateNotificationConfig">state_notification_config</a></code> | <code>typing.Mapping[str]</code> | A PubSub topic to publish device state updates. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts">CloudiotRegistryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.name"></a>

- *Type:* str

A unique name for the resource, required by device registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#name CloudiotRegistry#name}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.credentials"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>]]

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#credentials CloudiotRegistry#credentials}

---

##### `event_notification_configs`<sup>Optional</sup> <a name="event_notification_configs" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.eventNotificationConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>]]

event_notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#event_notification_configs CloudiotRegistry#event_notification_configs}

---

##### `http_config`<sup>Optional</sup> <a name="http_config" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.httpConfig"></a>

- *Type:* typing.Mapping[str]

Activate or deactivate HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#http_config CloudiotRegistry#http_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#id CloudiotRegistry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.logLevel"></a>

- *Type:* str

The default logging verbosity for activity from devices in this registry.

Specifies which events should be written to logs. For
example, if the LogLevel is ERROR, only events that terminate in
errors will be logged. LogLevel is inclusive; enabling INFO logging
will also enable ERROR logging. Default value: "NONE" Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#log_level CloudiotRegistry#log_level}

---

##### `mqtt_config`<sup>Optional</sup> <a name="mqtt_config" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.mqttConfig"></a>

- *Type:* typing.Mapping[str]

Activate or deactivate MQTT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#mqtt_config CloudiotRegistry#mqtt_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#project CloudiotRegistry#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.region"></a>

- *Type:* str

The region in which the created registry should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#region CloudiotRegistry#region}

---

##### `state_notification_config`<sup>Optional</sup> <a name="state_notification_config" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.stateNotificationConfig"></a>

- *Type:* typing.Mapping[str]

A PubSub topic to publish device state updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#state_notification_config CloudiotRegistry#state_notification_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts">CloudiotRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#timeouts CloudiotRegistry#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putEventNotificationConfigs">put_event_notification_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetEventNotificationConfigs">reset_event_notification_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetHttpConfig">reset_http_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetMqttConfig">reset_mqtt_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetStateNotificationConfig">reset_state_notification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_credentials` <a name="put_credentials" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putCredentials"></a>

```python
def put_credentials(
  value: typing.Union[IResolvable, typing.List[CloudiotRegistryCredentials]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putCredentials.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>]]

---

##### `put_event_notification_configs` <a name="put_event_notification_configs" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putEventNotificationConfigs"></a>

```python
def put_event_notification_configs(
  value: typing.Union[IResolvable, typing.List[CloudiotRegistryEventNotificationConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putEventNotificationConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#create CloudiotRegistry#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#delete CloudiotRegistry#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#update CloudiotRegistry#update}.

---

##### `reset_credentials` <a name="reset_credentials" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_event_notification_configs` <a name="reset_event_notification_configs" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetEventNotificationConfigs"></a>

```python
def reset_event_notification_configs() -> None
```

##### `reset_http_config` <a name="reset_http_config" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetHttpConfig"></a>

```python
def reset_http_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_mqtt_config` <a name="reset_mqtt_config" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetMqttConfig"></a>

```python
def reset_mqtt_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_state_notification_config` <a name="reset_state_notification_config" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetStateNotificationConfig"></a>

```python
def reset_state_notification_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import cloudiot_registry

cloudiotRegistry.CloudiotRegistry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import cloudiot_registry

cloudiotRegistry.CloudiotRegistry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import cloudiot_registry

cloudiotRegistry.CloudiotRegistry.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList">CloudiotRegistryCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.eventNotificationConfigs">event_notification_configs</a></code> | <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList">CloudiotRegistryEventNotificationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference">CloudiotRegistryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.credentialsInput">credentials_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.eventNotificationConfigsInput">event_notification_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.httpConfigInput">http_config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.mqttConfigInput">mqtt_config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.stateNotificationConfigInput">state_notification_config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts">CloudiotRegistryTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.httpConfig">http_config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.mqttConfig">mqtt_config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.stateNotificationConfig">state_notification_config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.credentials"></a>

```python
credentials: CloudiotRegistryCredentialsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList">CloudiotRegistryCredentialsList</a>

---

##### `event_notification_configs`<sup>Required</sup> <a name="event_notification_configs" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.eventNotificationConfigs"></a>

```python
event_notification_configs: CloudiotRegistryEventNotificationConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList">CloudiotRegistryEventNotificationConfigsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.timeouts"></a>

```python
timeouts: CloudiotRegistryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference">CloudiotRegistryTimeoutsOutputReference</a>

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.credentialsInput"></a>

```python
credentials_input: typing.Union[IResolvable, typing.List[CloudiotRegistryCredentials]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>]]

---

##### `event_notification_configs_input`<sup>Optional</sup> <a name="event_notification_configs_input" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.eventNotificationConfigsInput"></a>

```python
event_notification_configs_input: typing.Union[IResolvable, typing.List[CloudiotRegistryEventNotificationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>]]

---

##### `http_config_input`<sup>Optional</sup> <a name="http_config_input" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.httpConfigInput"></a>

```python
http_config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `mqtt_config_input`<sup>Optional</sup> <a name="mqtt_config_input" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.mqttConfigInput"></a>

```python
mqtt_config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `state_notification_config_input`<sup>Optional</sup> <a name="state_notification_config_input" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.stateNotificationConfigInput"></a>

```python
state_notification_config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CloudiotRegistryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts">CloudiotRegistryTimeouts</a>]

---

##### `http_config`<sup>Required</sup> <a name="http_config" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.httpConfig"></a>

```python
http_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `mqtt_config`<sup>Required</sup> <a name="mqtt_config" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.mqttConfig"></a>

```python
mqtt_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `state_notification_config`<sup>Required</sup> <a name="state_notification_config" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.stateNotificationConfig"></a>

```python
state_notification_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudiotRegistryConfig <a name="CloudiotRegistryConfig" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudiot_registry

cloudiotRegistry.CloudiotRegistryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  credentials: typing.Union[IResolvable, typing.List[CloudiotRegistryCredentials]] = None,
  event_notification_configs: typing.Union[IResolvable, typing.List[CloudiotRegistryEventNotificationConfigs]] = None,
  http_config: typing.Mapping[str] = None,
  id: str = None,
  log_level: str = None,
  mqtt_config: typing.Mapping[str] = None,
  project: str = None,
  region: str = None,
  state_notification_config: typing.Mapping[str] = None,
  timeouts: CloudiotRegistryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.name">name</a></code> | <code>str</code> | A unique name for the resource, required by device registry. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.credentials">credentials</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>]]</code> | credentials block. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.eventNotificationConfigs">event_notification_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>]]</code> | event_notification_configs block. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.httpConfig">http_config</a></code> | <code>typing.Mapping[str]</code> | Activate or deactivate HTTP. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#id CloudiotRegistry#id}. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.logLevel">log_level</a></code> | <code>str</code> | The default logging verbosity for activity from devices in this registry. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.mqttConfig">mqtt_config</a></code> | <code>typing.Mapping[str]</code> | Activate or deactivate MQTT. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#project CloudiotRegistry#project}. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.region">region</a></code> | <code>str</code> | The region in which the created registry should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.stateNotificationConfig">state_notification_config</a></code> | <code>typing.Mapping[str]</code> | A PubSub topic to publish device state updates. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts">CloudiotRegistryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique name for the resource, required by device registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#name CloudiotRegistry#name}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.credentials"></a>

```python
credentials: typing.Union[IResolvable, typing.List[CloudiotRegistryCredentials]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>]]

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#credentials CloudiotRegistry#credentials}

---

##### `event_notification_configs`<sup>Optional</sup> <a name="event_notification_configs" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.eventNotificationConfigs"></a>

```python
event_notification_configs: typing.Union[IResolvable, typing.List[CloudiotRegistryEventNotificationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>]]

event_notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#event_notification_configs CloudiotRegistry#event_notification_configs}

---

##### `http_config`<sup>Optional</sup> <a name="http_config" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.httpConfig"></a>

```python
http_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Activate or deactivate HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#http_config CloudiotRegistry#http_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#id CloudiotRegistry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

The default logging verbosity for activity from devices in this registry.

Specifies which events should be written to logs. For
example, if the LogLevel is ERROR, only events that terminate in
errors will be logged. LogLevel is inclusive; enabling INFO logging
will also enable ERROR logging. Default value: "NONE" Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#log_level CloudiotRegistry#log_level}

---

##### `mqtt_config`<sup>Optional</sup> <a name="mqtt_config" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.mqttConfig"></a>

```python
mqtt_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Activate or deactivate MQTT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#mqtt_config CloudiotRegistry#mqtt_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#project CloudiotRegistry#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region in which the created registry should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#region CloudiotRegistry#region}

---

##### `state_notification_config`<sup>Optional</sup> <a name="state_notification_config" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.stateNotificationConfig"></a>

```python
state_notification_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A PubSub topic to publish device state updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#state_notification_config CloudiotRegistry#state_notification_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.timeouts"></a>

```python
timeouts: CloudiotRegistryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts">CloudiotRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#timeouts CloudiotRegistry#timeouts}

---

### CloudiotRegistryCredentials <a name="CloudiotRegistryCredentials" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudiot_registry

cloudiotRegistry.CloudiotRegistryCredentials(
  public_key_certificate: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials.property.publicKeyCertificate">public_key_certificate</a></code> | <code>typing.Mapping[str]</code> | A public key certificate format and data. |

---

##### `public_key_certificate`<sup>Required</sup> <a name="public_key_certificate" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials.property.publicKeyCertificate"></a>

```python
public_key_certificate: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A public key certificate format and data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#public_key_certificate CloudiotRegistry#public_key_certificate}

---

### CloudiotRegistryEventNotificationConfigs <a name="CloudiotRegistryEventNotificationConfigs" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudiot_registry

cloudiotRegistry.CloudiotRegistryEventNotificationConfigs(
  pubsub_topic_name: str,
  subfolder_matches: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs.property.pubsubTopicName">pubsub_topic_name</a></code> | <code>str</code> | PubSub topic name to publish device events. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs.property.subfolderMatches">subfolder_matches</a></code> | <code>str</code> | If the subfolder name matches this string exactly, this configuration will be used. |

---

##### `pubsub_topic_name`<sup>Required</sup> <a name="pubsub_topic_name" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs.property.pubsubTopicName"></a>

```python
pubsub_topic_name: str
```

- *Type:* str

PubSub topic name to publish device events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#pubsub_topic_name CloudiotRegistry#pubsub_topic_name}

---

##### `subfolder_matches`<sup>Optional</sup> <a name="subfolder_matches" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs.property.subfolderMatches"></a>

```python
subfolder_matches: str
```

- *Type:* str

If the subfolder name matches this string exactly, this configuration will be used.

The string must not include the
leading '/' character. If empty, all strings are matched. Empty
value can only be used for the last 'event_notification_configs'
item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#subfolder_matches CloudiotRegistry#subfolder_matches}

---

### CloudiotRegistryTimeouts <a name="CloudiotRegistryTimeouts" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudiot_registry

cloudiotRegistry.CloudiotRegistryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#create CloudiotRegistry#create}. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#delete CloudiotRegistry#delete}. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#update CloudiotRegistry#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#create CloudiotRegistry#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#delete CloudiotRegistry#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/cloudiot_registry#update CloudiotRegistry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudiotRegistryCredentialsList <a name="CloudiotRegistryCredentialsList" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudiot_registry

cloudiotRegistry.CloudiotRegistryCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudiotRegistryCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudiotRegistryCredentials]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>]]

---


### CloudiotRegistryCredentialsOutputReference <a name="CloudiotRegistryCredentialsOutputReference" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudiot_registry

cloudiotRegistry.CloudiotRegistryCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.publicKeyCertificateInput">public_key_certificate_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.publicKeyCertificate">public_key_certificate</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_key_certificate_input`<sup>Optional</sup> <a name="public_key_certificate_input" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.publicKeyCertificateInput"></a>

```python
public_key_certificate_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `public_key_certificate`<sup>Required</sup> <a name="public_key_certificate" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.publicKeyCertificate"></a>

```python
public_key_certificate: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudiotRegistryCredentials]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>]

---


### CloudiotRegistryEventNotificationConfigsList <a name="CloudiotRegistryEventNotificationConfigsList" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudiot_registry

cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudiotRegistryEventNotificationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudiotRegistryEventNotificationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>]]

---


### CloudiotRegistryEventNotificationConfigsOutputReference <a name="CloudiotRegistryEventNotificationConfigsOutputReference" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudiot_registry

cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.resetSubfolderMatches">reset_subfolder_matches</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subfolder_matches` <a name="reset_subfolder_matches" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.resetSubfolderMatches"></a>

```python
def reset_subfolder_matches() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.pubsubTopicNameInput">pubsub_topic_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.subfolderMatchesInput">subfolder_matches_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.pubsubTopicName">pubsub_topic_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.subfolderMatches">subfolder_matches</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pubsub_topic_name_input`<sup>Optional</sup> <a name="pubsub_topic_name_input" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.pubsubTopicNameInput"></a>

```python
pubsub_topic_name_input: str
```

- *Type:* str

---

##### `subfolder_matches_input`<sup>Optional</sup> <a name="subfolder_matches_input" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.subfolderMatchesInput"></a>

```python
subfolder_matches_input: str
```

- *Type:* str

---

##### `pubsub_topic_name`<sup>Required</sup> <a name="pubsub_topic_name" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.pubsubTopicName"></a>

```python
pubsub_topic_name: str
```

- *Type:* str

---

##### `subfolder_matches`<sup>Required</sup> <a name="subfolder_matches" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.subfolderMatches"></a>

```python
subfolder_matches: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudiotRegistryEventNotificationConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>]

---


### CloudiotRegistryTimeoutsOutputReference <a name="CloudiotRegistryTimeoutsOutputReference" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudiot_registry

cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts">CloudiotRegistryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudiotRegistryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts">CloudiotRegistryTimeouts</a>]

---




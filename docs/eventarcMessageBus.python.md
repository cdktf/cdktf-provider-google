# `eventarcMessageBus` Submodule <a name="`eventarcMessageBus` Submodule" id="@cdktf/provider-google.eventarcMessageBus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventarcMessageBus <a name="EventarcMessageBus" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus google_eventarc_message_bus}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_message_bus

eventarcMessageBus.EventarcMessageBus(
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
  message_bus_id: str,
  annotations: typing.Mapping[str] = None,
  crypto_key_name: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  logging_config: EventarcMessageBusLoggingConfig = None,
  project: str = None,
  timeouts: EventarcMessageBusTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.messageBusId">message_bus_id</a></code> | <code>str</code> | Required. The user-provided ID to be assigned to the MessageBus. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. Resource annotations. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. Resource display name. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#id EventarcMessageBus#id}. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Resource labels. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig">EventarcMessageBusLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#project EventarcMessageBus#project}. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts">EventarcMessageBusTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#location EventarcMessageBus#location}

---

##### `message_bus_id`<sup>Required</sup> <a name="message_bus_id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.messageBusId"></a>

- *Type:* str

Required. The user-provided ID to be assigned to the MessageBus. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#message_bus_id EventarcMessageBus#message_bus_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional. Resource annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#annotations EventarcMessageBus#annotations}

---

##### `crypto_key_name`<sup>Optional</sup> <a name="crypto_key_name" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.cryptoKeyName"></a>

- *Type:* str

Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data.

It must match the pattern
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#crypto_key_name EventarcMessageBus#crypto_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. Resource display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#display_name EventarcMessageBus#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#id EventarcMessageBus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#labels EventarcMessageBus#labels}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig">EventarcMessageBusLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#logging_config EventarcMessageBus#logging_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#project EventarcMessageBus#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts">EventarcMessageBusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#timeouts EventarcMessageBus#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetCryptoKeyName">reset_crypto_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.putLoggingConfig"></a>

```python
def put_logging_config(
  log_severity: str = None
) -> None
```

###### `log_severity`<sup>Optional</sup> <a name="log_severity" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.putLoggingConfig.parameter.logSeverity"></a>

- *Type:* str

Optional.

The minimum severity of logs that will be sent to Stackdriver/Platform
Telemetry. Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#log_severity EventarcMessageBus#log_severity}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#create EventarcMessageBus#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#delete EventarcMessageBus#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#update EventarcMessageBus#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_crypto_key_name` <a name="reset_crypto_key_name" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetCryptoKeyName"></a>

```python
def reset_crypto_key_name() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EventarcMessageBus resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import eventarc_message_bus

eventarcMessageBus.EventarcMessageBus.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import eventarc_message_bus

eventarcMessageBus.EventarcMessageBus.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import eventarc_message_bus

eventarcMessageBus.EventarcMessageBus.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import eventarc_message_bus

eventarcMessageBus.EventarcMessageBus.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EventarcMessageBus resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EventarcMessageBus to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EventarcMessageBus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventarcMessageBus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference">EventarcMessageBusLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference">EventarcMessageBusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.cryptoKeyNameInput">crypto_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig">EventarcMessageBusLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.messageBusIdInput">message_bus_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts">EventarcMessageBusTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.messageBusId">message_bus_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.loggingConfig"></a>

```python
logging_config: EventarcMessageBusLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference">EventarcMessageBusLoggingConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.timeouts"></a>

```python
timeouts: EventarcMessageBusTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference">EventarcMessageBusTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `crypto_key_name_input`<sup>Optional</sup> <a name="crypto_key_name_input" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.cryptoKeyNameInput"></a>

```python
crypto_key_name_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.loggingConfigInput"></a>

```python
logging_config_input: EventarcMessageBusLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig">EventarcMessageBusLoggingConfig</a>

---

##### `message_bus_id_input`<sup>Optional</sup> <a name="message_bus_id_input" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.messageBusIdInput"></a>

```python
message_bus_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, EventarcMessageBusTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts">EventarcMessageBusTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `crypto_key_name`<sup>Required</sup> <a name="crypto_key_name" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.cryptoKeyName"></a>

```python
crypto_key_name: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `message_bus_id`<sup>Required</sup> <a name="message_bus_id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.messageBusId"></a>

```python
message_bus_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventarcMessageBusConfig <a name="EventarcMessageBusConfig" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_message_bus

eventarcMessageBus.EventarcMessageBusConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  message_bus_id: str,
  annotations: typing.Mapping[str] = None,
  crypto_key_name: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  logging_config: EventarcMessageBusLoggingConfig = None,
  project: str = None,
  timeouts: EventarcMessageBusTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.messageBusId">message_bus_id</a></code> | <code>str</code> | Required. The user-provided ID to be assigned to the MessageBus. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. Resource annotations. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. Resource display name. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#id EventarcMessageBus#id}. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Resource labels. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig">EventarcMessageBusLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#project EventarcMessageBus#project}. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts">EventarcMessageBusTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#location EventarcMessageBus#location}

---

##### `message_bus_id`<sup>Required</sup> <a name="message_bus_id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.messageBusId"></a>

```python
message_bus_id: str
```

- *Type:* str

Required. The user-provided ID to be assigned to the MessageBus. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#message_bus_id EventarcMessageBus#message_bus_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Resource annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#annotations EventarcMessageBus#annotations}

---

##### `crypto_key_name`<sup>Optional</sup> <a name="crypto_key_name" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.cryptoKeyName"></a>

```python
crypto_key_name: str
```

- *Type:* str

Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data.

It must match the pattern
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#crypto_key_name EventarcMessageBus#crypto_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. Resource display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#display_name EventarcMessageBus#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#id EventarcMessageBus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#labels EventarcMessageBus#labels}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.loggingConfig"></a>

```python
logging_config: EventarcMessageBusLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig">EventarcMessageBusLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#logging_config EventarcMessageBus#logging_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#project EventarcMessageBus#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.timeouts"></a>

```python
timeouts: EventarcMessageBusTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts">EventarcMessageBusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#timeouts EventarcMessageBus#timeouts}

---

### EventarcMessageBusLoggingConfig <a name="EventarcMessageBusLoggingConfig" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_message_bus

eventarcMessageBus.EventarcMessageBusLoggingConfig(
  log_severity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig.property.logSeverity">log_severity</a></code> | <code>str</code> | Optional. |

---

##### `log_severity`<sup>Optional</sup> <a name="log_severity" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig.property.logSeverity"></a>

```python
log_severity: str
```

- *Type:* str

Optional.

The minimum severity of logs that will be sent to Stackdriver/Platform
Telemetry. Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#log_severity EventarcMessageBus#log_severity}

---

### EventarcMessageBusTimeouts <a name="EventarcMessageBusTimeouts" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_message_bus

eventarcMessageBus.EventarcMessageBusTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#create EventarcMessageBus#create}. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#delete EventarcMessageBus#delete}. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#update EventarcMessageBus#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#create EventarcMessageBus#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#delete EventarcMessageBus#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_message_bus#update EventarcMessageBus#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventarcMessageBusLoggingConfigOutputReference <a name="EventarcMessageBusLoggingConfigOutputReference" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_message_bus

eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.resetLogSeverity">reset_log_severity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_severity` <a name="reset_log_severity" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.resetLogSeverity"></a>

```python
def reset_log_severity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.logSeverityInput">log_severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.logSeverity">log_severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig">EventarcMessageBusLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_severity_input`<sup>Optional</sup> <a name="log_severity_input" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.logSeverityInput"></a>

```python
log_severity_input: str
```

- *Type:* str

---

##### `log_severity`<sup>Required</sup> <a name="log_severity" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.logSeverity"></a>

```python
log_severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: EventarcMessageBusLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig">EventarcMessageBusLoggingConfig</a>

---


### EventarcMessageBusTimeoutsOutputReference <a name="EventarcMessageBusTimeoutsOutputReference" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_message_bus

eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts">EventarcMessageBusTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EventarcMessageBusTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts">EventarcMessageBusTimeouts</a>]

---




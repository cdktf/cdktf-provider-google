# `eventarcGoogleApiSource` Submodule <a name="`eventarcGoogleApiSource` Submodule" id="@cdktf/provider-google.eventarcGoogleApiSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventarcGoogleApiSource <a name="EventarcGoogleApiSource" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source google_eventarc_google_api_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_google_api_source

eventarcGoogleApiSource.EventarcGoogleApiSource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: str,
  google_api_source_id: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  crypto_key_name: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  logging_config: EventarcGoogleApiSourceLoggingConfig = None,
  project: str = None,
  timeouts: EventarcGoogleApiSourceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.destination">destination</a></code> | <code>str</code> | Destination is the message bus that the GoogleApiSource is delivering to. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.googleApiSourceId">google_api_source_id</a></code> | <code>str</code> | The user-provided ID to be assigned to the GoogleApiSource. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Resource annotations. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Resource display name. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#id EventarcGoogleApiSource#id}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#project EventarcGoogleApiSource#project}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.destination"></a>

- *Type:* str

Destination is the message bus that the GoogleApiSource is delivering to.

It must be point to the full resource name of a MessageBus. Format:
"projects/{PROJECT_ID}/locations/{region}/messagesBuses/{MESSAGE_BUS_ID)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#destination EventarcGoogleApiSource#destination}

---

##### `google_api_source_id`<sup>Required</sup> <a name="google_api_source_id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.googleApiSourceId"></a>

- *Type:* str

The user-provided ID to be assigned to the GoogleApiSource. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#google_api_source_id EventarcGoogleApiSource#google_api_source_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#location EventarcGoogleApiSource#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Resource annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#annotations EventarcGoogleApiSource#annotations}

---

##### `crypto_key_name`<sup>Optional</sup> <a name="crypto_key_name" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.cryptoKeyName"></a>

- *Type:* str

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data.

It must match the pattern
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#crypto_key_name EventarcGoogleApiSource#crypto_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.displayName"></a>

- *Type:* str

Resource display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#display_name EventarcGoogleApiSource#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#id EventarcGoogleApiSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#labels EventarcGoogleApiSource#labels}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#logging_config EventarcGoogleApiSource#logging_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#project EventarcGoogleApiSource#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#timeouts EventarcGoogleApiSource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetCryptoKeyName">reset_crypto_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putLoggingConfig"></a>

```python
def put_logging_config(
  log_severity: str = None
) -> None
```

###### `log_severity`<sup>Optional</sup> <a name="log_severity" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putLoggingConfig.parameter.logSeverity"></a>

- *Type:* str

The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry.

Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#log_severity EventarcGoogleApiSource#log_severity}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#create EventarcGoogleApiSource#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#delete EventarcGoogleApiSource#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#update EventarcGoogleApiSource#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_crypto_key_name` <a name="reset_crypto_key_name" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetCryptoKeyName"></a>

```python
def reset_crypto_key_name() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EventarcGoogleApiSource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import eventarc_google_api_source

eventarcGoogleApiSource.EventarcGoogleApiSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import eventarc_google_api_source

eventarcGoogleApiSource.EventarcGoogleApiSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import eventarc_google_api_source

eventarcGoogleApiSource.EventarcGoogleApiSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import eventarc_google_api_source

eventarcGoogleApiSource.EventarcGoogleApiSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EventarcGoogleApiSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EventarcGoogleApiSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EventarcGoogleApiSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventarcGoogleApiSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference">EventarcGoogleApiSourceLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference">EventarcGoogleApiSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cryptoKeyNameInput">crypto_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.googleApiSourceIdInput">google_api_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.googleApiSourceId">google_api_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.loggingConfig"></a>

```python
logging_config: EventarcGoogleApiSourceLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference">EventarcGoogleApiSourceLoggingConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.timeouts"></a>

```python
timeouts: EventarcGoogleApiSourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference">EventarcGoogleApiSourceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `crypto_key_name_input`<sup>Optional</sup> <a name="crypto_key_name_input" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cryptoKeyNameInput"></a>

```python
crypto_key_name_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `google_api_source_id_input`<sup>Optional</sup> <a name="google_api_source_id_input" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.googleApiSourceIdInput"></a>

```python
google_api_source_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.loggingConfigInput"></a>

```python
logging_config_input: EventarcGoogleApiSourceLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, EventarcGoogleApiSourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `crypto_key_name`<sup>Required</sup> <a name="crypto_key_name" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cryptoKeyName"></a>

```python
crypto_key_name: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `google_api_source_id`<sup>Required</sup> <a name="google_api_source_id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.googleApiSourceId"></a>

```python
google_api_source_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventarcGoogleApiSourceConfig <a name="EventarcGoogleApiSourceConfig" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_google_api_source

eventarcGoogleApiSource.EventarcGoogleApiSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: str,
  google_api_source_id: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  crypto_key_name: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  logging_config: EventarcGoogleApiSourceLoggingConfig = None,
  project: str = None,
  timeouts: EventarcGoogleApiSourceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.destination">destination</a></code> | <code>str</code> | Destination is the message bus that the GoogleApiSource is delivering to. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.googleApiSourceId">google_api_source_id</a></code> | <code>str</code> | The user-provided ID to be assigned to the GoogleApiSource. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Resource annotations. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.displayName">display_name</a></code> | <code>str</code> | Resource display name. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#id EventarcGoogleApiSource#id}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#project EventarcGoogleApiSource#project}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

Destination is the message bus that the GoogleApiSource is delivering to.

It must be point to the full resource name of a MessageBus. Format:
"projects/{PROJECT_ID}/locations/{region}/messagesBuses/{MESSAGE_BUS_ID)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#destination EventarcGoogleApiSource#destination}

---

##### `google_api_source_id`<sup>Required</sup> <a name="google_api_source_id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.googleApiSourceId"></a>

```python
google_api_source_id: str
```

- *Type:* str

The user-provided ID to be assigned to the GoogleApiSource. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#google_api_source_id EventarcGoogleApiSource#google_api_source_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#location EventarcGoogleApiSource#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#annotations EventarcGoogleApiSource#annotations}

---

##### `crypto_key_name`<sup>Optional</sup> <a name="crypto_key_name" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.cryptoKeyName"></a>

```python
crypto_key_name: str
```

- *Type:* str

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data.

It must match the pattern
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#crypto_key_name EventarcGoogleApiSource#crypto_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Resource display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#display_name EventarcGoogleApiSource#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#id EventarcGoogleApiSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#labels EventarcGoogleApiSource#labels}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.loggingConfig"></a>

```python
logging_config: EventarcGoogleApiSourceLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#logging_config EventarcGoogleApiSource#logging_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#project EventarcGoogleApiSource#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.timeouts"></a>

```python
timeouts: EventarcGoogleApiSourceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#timeouts EventarcGoogleApiSource#timeouts}

---

### EventarcGoogleApiSourceLoggingConfig <a name="EventarcGoogleApiSourceLoggingConfig" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_google_api_source

eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig(
  log_severity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig.property.logSeverity">log_severity</a></code> | <code>str</code> | The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. |

---

##### `log_severity`<sup>Optional</sup> <a name="log_severity" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig.property.logSeverity"></a>

```python
log_severity: str
```

- *Type:* str

The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry.

Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#log_severity EventarcGoogleApiSource#log_severity}

---

### EventarcGoogleApiSourceTimeouts <a name="EventarcGoogleApiSourceTimeouts" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_google_api_source

eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#create EventarcGoogleApiSource#create}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#delete EventarcGoogleApiSource#delete}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#update EventarcGoogleApiSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#create EventarcGoogleApiSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#delete EventarcGoogleApiSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/eventarc_google_api_source#update EventarcGoogleApiSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventarcGoogleApiSourceLoggingConfigOutputReference <a name="EventarcGoogleApiSourceLoggingConfigOutputReference" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_google_api_source

eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.resetLogSeverity">reset_log_severity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_severity` <a name="reset_log_severity" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.resetLogSeverity"></a>

```python
def reset_log_severity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverityInput">log_severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverity">log_severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_severity_input`<sup>Optional</sup> <a name="log_severity_input" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverityInput"></a>

```python
log_severity_input: str
```

- *Type:* str

---

##### `log_severity`<sup>Required</sup> <a name="log_severity" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverity"></a>

```python
log_severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: EventarcGoogleApiSourceLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a>

---


### EventarcGoogleApiSourceTimeoutsOutputReference <a name="EventarcGoogleApiSourceTimeoutsOutputReference" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_google_api_source

eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EventarcGoogleApiSourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a>]

---




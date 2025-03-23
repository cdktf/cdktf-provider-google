# `eventarcPipeline` Submodule <a name="`eventarcPipeline` Submodule" id="@cdktf/provider-google.eventarcPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventarcPipeline <a name="EventarcPipeline" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline google_eventarc_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipeline(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destinations: typing.Union[IResolvable, typing.List[EventarcPipelineDestinations]],
  location: str,
  pipeline_id: str,
  annotations: typing.Mapping[str] = None,
  crypto_key_name: str = None,
  display_name: str = None,
  id: str = None,
  input_payload_format: EventarcPipelineInputPayloadFormat = None,
  labels: typing.Mapping[str] = None,
  logging_config: EventarcPipelineLoggingConfig = None,
  mediations: typing.Union[IResolvable, typing.List[EventarcPipelineMediations]] = None,
  project: str = None,
  retry_policy: EventarcPipelineRetryPolicy = None,
  timeouts: EventarcPipelineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.destinations">destinations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>]]</code> | destinations block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.pipelineId">pipeline_id</a></code> | <code>str</code> | The user-provided ID to be assigned to the Pipeline. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User-defined annotations. See https://google.aip.dev/128#annotations. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt the event data. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#id EventarcPipeline#id}. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.inputPayloadFormat">input_payload_format</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a></code> | input_payload_format block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User labels attached to the Pipeline that can be used to group resources. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.mediations">mediations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>]]</code> | mediations block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#project EventarcPipeline#project}. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.destinations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#destinations EventarcPipeline#destinations}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#location EventarcPipeline#location}

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.pipelineId"></a>

- *Type:* str

The user-provided ID to be assigned to the Pipeline. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#pipeline_id EventarcPipeline#pipeline_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

User-defined annotations. See https://google.aip.dev/128#annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#annotations EventarcPipeline#annotations}

---

##### `crypto_key_name`<sup>Optional</sup> <a name="crypto_key_name" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.cryptoKeyName"></a>

- *Type:* str

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt the event data.

If not set, an internal Google-owned key
will be used to encrypt messages. It must match the pattern
"projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#crypto_key_name EventarcPipeline#crypto_key_name}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#display_name EventarcPipeline#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#id EventarcPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_payload_format`<sup>Optional</sup> <a name="input_payload_format" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.inputPayloadFormat"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a>

input_payload_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#input_payload_format EventarcPipeline#input_payload_format}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User labels attached to the Pipeline that can be used to group resources.

An object containing a list of "key": value pairs. Example: {
"name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#labels EventarcPipeline#labels}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#logging_config EventarcPipeline#logging_config}

---

##### `mediations`<sup>Optional</sup> <a name="mediations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.mediations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>]]

mediations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#mediations EventarcPipeline#mediations}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#project EventarcPipeline#project}.

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#retry_policy EventarcPipeline#retry_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#timeouts EventarcPipeline#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putInputPayloadFormat">put_input_payload_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putMediations">put_mediations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putRetryPolicy">put_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetCryptoKeyName">reset_crypto_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetInputPayloadFormat">reset_input_payload_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetMediations">reset_mediations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetRetryPolicy">reset_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destinations` <a name="put_destinations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putDestinations"></a>

```python
def put_destinations(
  value: typing.Union[IResolvable, typing.List[EventarcPipelineDestinations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putDestinations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>]]

---

##### `put_input_payload_format` <a name="put_input_payload_format" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putInputPayloadFormat"></a>

```python
def put_input_payload_format(
  avro: EventarcPipelineInputPayloadFormatAvro = None,
  json: EventarcPipelineInputPayloadFormatJson = None,
  protobuf: EventarcPipelineInputPayloadFormatProtobuf = None
) -> None
```

###### `avro`<sup>Optional</sup> <a name="avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putInputPayloadFormat.parameter.avro"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#avro EventarcPipeline#avro}

---

###### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putInputPayloadFormat.parameter.json"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#json EventarcPipeline#json}

---

###### `protobuf`<sup>Optional</sup> <a name="protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putInputPayloadFormat.parameter.protobuf"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a>

protobuf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#protobuf EventarcPipeline#protobuf}

---

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putLoggingConfig"></a>

```python
def put_logging_config(
  log_severity: str = None
) -> None
```

###### `log_severity`<sup>Optional</sup> <a name="log_severity" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putLoggingConfig.parameter.logSeverity"></a>

- *Type:* str

The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry.

Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#log_severity EventarcPipeline#log_severity}

---

##### `put_mediations` <a name="put_mediations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putMediations"></a>

```python
def put_mediations(
  value: typing.Union[IResolvable, typing.List[EventarcPipelineMediations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putMediations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>]]

---

##### `put_retry_policy` <a name="put_retry_policy" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putRetryPolicy"></a>

```python
def put_retry_policy(
  max_attempts: typing.Union[int, float] = None,
  max_retry_delay: str = None,
  min_retry_delay: str = None
) -> None
```

###### `max_attempts`<sup>Optional</sup> <a name="max_attempts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putRetryPolicy.parameter.maxAttempts"></a>

- *Type:* typing.Union[int, float]

The maximum number of delivery attempts for any message.

The value must
be between 1 and 100.
The default value for this field is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#max_attempts EventarcPipeline#max_attempts}

---

###### `max_retry_delay`<sup>Optional</sup> <a name="max_retry_delay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putRetryPolicy.parameter.maxRetryDelay"></a>

- *Type:* str

The maximum amount of seconds to wait between retry attempts.

The value
must be between 1 and 600.
The default value for this field is 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#max_retry_delay EventarcPipeline#max_retry_delay}

---

###### `min_retry_delay`<sup>Optional</sup> <a name="min_retry_delay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putRetryPolicy.parameter.minRetryDelay"></a>

- *Type:* str

The minimum amount of seconds to wait between retry attempts.

The value
must be between 1 and 600.
The default value for this field is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#min_retry_delay EventarcPipeline#min_retry_delay}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#create EventarcPipeline#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#delete EventarcPipeline#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#update EventarcPipeline#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_crypto_key_name` <a name="reset_crypto_key_name" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetCryptoKeyName"></a>

```python
def reset_crypto_key_name() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input_payload_format` <a name="reset_input_payload_format" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetInputPayloadFormat"></a>

```python
def reset_input_payload_format() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_mediations` <a name="reset_mediations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetMediations"></a>

```python
def reset_mediations() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_retry_policy` <a name="reset_retry_policy" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetRetryPolicy"></a>

```python
def reset_retry_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EventarcPipeline resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipeline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipeline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipeline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EventarcPipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EventarcPipeline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EventarcPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventarcPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList">EventarcPipelineDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.inputPayloadFormat">input_payload_format</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference">EventarcPipelineInputPayloadFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference">EventarcPipelineLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.mediations">mediations</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList">EventarcPipelineMediationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference">EventarcPipelineRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference">EventarcPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cryptoKeyNameInput">crypto_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.destinationsInput">destinations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.inputPayloadFormatInput">input_payload_format_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.mediationsInput">mediations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.pipelineIdInput">pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.retryPolicyInput">retry_policy_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.destinations"></a>

```python
destinations: EventarcPipelineDestinationsList
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList">EventarcPipelineDestinationsList</a>

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `input_payload_format`<sup>Required</sup> <a name="input_payload_format" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.inputPayloadFormat"></a>

```python
input_payload_format: EventarcPipelineInputPayloadFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference">EventarcPipelineInputPayloadFormatOutputReference</a>

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.loggingConfig"></a>

```python
logging_config: EventarcPipelineLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference">EventarcPipelineLoggingConfigOutputReference</a>

---

##### `mediations`<sup>Required</sup> <a name="mediations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.mediations"></a>

```python
mediations: EventarcPipelineMediationsList
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList">EventarcPipelineMediationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.retryPolicy"></a>

```python
retry_policy: EventarcPipelineRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference">EventarcPipelineRetryPolicyOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.timeouts"></a>

```python
timeouts: EventarcPipelineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference">EventarcPipelineTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `crypto_key_name_input`<sup>Optional</sup> <a name="crypto_key_name_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cryptoKeyNameInput"></a>

```python
crypto_key_name_input: str
```

- *Type:* str

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.destinationsInput"></a>

```python
destinations_input: typing.Union[IResolvable, typing.List[EventarcPipelineDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>]]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_payload_format_input`<sup>Optional</sup> <a name="input_payload_format_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.inputPayloadFormatInput"></a>

```python
input_payload_format_input: EventarcPipelineInputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.loggingConfigInput"></a>

```python
logging_config_input: EventarcPipelineLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a>

---

##### `mediations_input`<sup>Optional</sup> <a name="mediations_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.mediationsInput"></a>

```python
mediations_input: typing.Union[IResolvable, typing.List[EventarcPipelineMediations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>]]

---

##### `pipeline_id_input`<sup>Optional</sup> <a name="pipeline_id_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.pipelineIdInput"></a>

```python
pipeline_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `retry_policy_input`<sup>Optional</sup> <a name="retry_policy_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.retryPolicyInput"></a>

```python
retry_policy_input: EventarcPipelineRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, EventarcPipelineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `crypto_key_name`<sup>Required</sup> <a name="crypto_key_name" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cryptoKeyName"></a>

```python
crypto_key_name: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventarcPipelineConfig <a name="EventarcPipelineConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destinations: typing.Union[IResolvable, typing.List[EventarcPipelineDestinations]],
  location: str,
  pipeline_id: str,
  annotations: typing.Mapping[str] = None,
  crypto_key_name: str = None,
  display_name: str = None,
  id: str = None,
  input_payload_format: EventarcPipelineInputPayloadFormat = None,
  labels: typing.Mapping[str] = None,
  logging_config: EventarcPipelineLoggingConfig = None,
  mediations: typing.Union[IResolvable, typing.List[EventarcPipelineMediations]] = None,
  project: str = None,
  retry_policy: EventarcPipelineRetryPolicy = None,
  timeouts: EventarcPipelineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.destinations">destinations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>]]</code> | destinations block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.pipelineId">pipeline_id</a></code> | <code>str</code> | The user-provided ID to be assigned to the Pipeline. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User-defined annotations. See https://google.aip.dev/128#annotations. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt the event data. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#id EventarcPipeline#id}. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.inputPayloadFormat">input_payload_format</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a></code> | input_payload_format block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User labels attached to the Pipeline that can be used to group resources. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.mediations">mediations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>]]</code> | mediations block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#project EventarcPipeline#project}. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.destinations"></a>

```python
destinations: typing.Union[IResolvable, typing.List[EventarcPipelineDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#destinations EventarcPipeline#destinations}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#location EventarcPipeline#location}

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

The user-provided ID to be assigned to the Pipeline. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#pipeline_id EventarcPipeline#pipeline_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined annotations. See https://google.aip.dev/128#annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#annotations EventarcPipeline#annotations}

---

##### `crypto_key_name`<sup>Optional</sup> <a name="crypto_key_name" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.cryptoKeyName"></a>

```python
crypto_key_name: str
```

- *Type:* str

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt the event data.

If not set, an internal Google-owned key
will be used to encrypt messages. It must match the pattern
"projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#crypto_key_name EventarcPipeline#crypto_key_name}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#display_name EventarcPipeline#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#id EventarcPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_payload_format`<sup>Optional</sup> <a name="input_payload_format" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.inputPayloadFormat"></a>

```python
input_payload_format: EventarcPipelineInputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a>

input_payload_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#input_payload_format EventarcPipeline#input_payload_format}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User labels attached to the Pipeline that can be used to group resources.

An object containing a list of "key": value pairs. Example: {
"name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#labels EventarcPipeline#labels}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.loggingConfig"></a>

```python
logging_config: EventarcPipelineLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#logging_config EventarcPipeline#logging_config}

---

##### `mediations`<sup>Optional</sup> <a name="mediations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.mediations"></a>

```python
mediations: typing.Union[IResolvable, typing.List[EventarcPipelineMediations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>]]

mediations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#mediations EventarcPipeline#mediations}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#project EventarcPipeline#project}.

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.retryPolicy"></a>

```python
retry_policy: EventarcPipelineRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#retry_policy EventarcPipeline#retry_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.timeouts"></a>

```python
timeouts: EventarcPipelineTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#timeouts EventarcPipeline#timeouts}

---

### EventarcPipelineDestinations <a name="EventarcPipelineDestinations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinations(
  authentication_config: EventarcPipelineDestinationsAuthenticationConfig = None,
  http_endpoint: EventarcPipelineDestinationsHttpEndpoint = None,
  message_bus: str = None,
  network_config: EventarcPipelineDestinationsNetworkConfig = None,
  output_payload_format: EventarcPipelineDestinationsOutputPayloadFormat = None,
  topic: str = None,
  workflow: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.authenticationConfig">authentication_config</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a></code> | authentication_config block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.httpEndpoint">http_endpoint</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a></code> | http_endpoint block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.messageBus">message_bus</a></code> | <code>str</code> | The resource name of the Message Bus to which events should be published. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.outputPayloadFormat">output_payload_format</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a></code> | output_payload_format block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.topic">topic</a></code> | <code>str</code> | The resource name of the Pub/Sub topic to which events should be published. Format: 'projects/{project}/locations/{location}/topics/{topic}'. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.workflow">workflow</a></code> | <code>str</code> | The resource name of the Workflow whose Executions are triggered by the events. |

---

##### `authentication_config`<sup>Optional</sup> <a name="authentication_config" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.authenticationConfig"></a>

```python
authentication_config: EventarcPipelineDestinationsAuthenticationConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a>

authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#authentication_config EventarcPipeline#authentication_config}

---

##### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.httpEndpoint"></a>

```python
http_endpoint: EventarcPipelineDestinationsHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a>

http_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#http_endpoint EventarcPipeline#http_endpoint}

---

##### `message_bus`<sup>Optional</sup> <a name="message_bus" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.messageBus"></a>

```python
message_bus: str
```

- *Type:* str

The resource name of the Message Bus to which events should be published.

The Message Bus resource should exist in the same project as
the Pipeline. Format:
'projects/{project}/locations/{location}/messageBuses/{message_bus}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#message_bus EventarcPipeline#message_bus}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.networkConfig"></a>

```python
network_config: EventarcPipelineDestinationsNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#network_config EventarcPipeline#network_config}

---

##### `output_payload_format`<sup>Optional</sup> <a name="output_payload_format" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.outputPayloadFormat"></a>

```python
output_payload_format: EventarcPipelineDestinationsOutputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a>

output_payload_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#output_payload_format EventarcPipeline#output_payload_format}

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.topic"></a>

```python
topic: str
```

- *Type:* str

The resource name of the Pub/Sub topic to which events should be published. Format: 'projects/{project}/locations/{location}/topics/{topic}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#topic EventarcPipeline#topic}

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.workflow"></a>

```python
workflow: str
```

- *Type:* str

The resource name of the Workflow whose Executions are triggered by the events.

The Workflow resource should be deployed in the same
project as the Pipeline. Format:
'projects/{project}/locations/{location}/workflows/{workflow}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#workflow EventarcPipeline#workflow}

---

### EventarcPipelineDestinationsAuthenticationConfig <a name="EventarcPipelineDestinationsAuthenticationConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig(
  google_oidc: EventarcPipelineDestinationsAuthenticationConfigGoogleOidc = None,
  oauth_token: EventarcPipelineDestinationsAuthenticationConfigOauthToken = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig.property.googleOidc">google_oidc</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a></code> | google_oidc block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig.property.oauthToken">oauth_token</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a></code> | oauth_token block. |

---

##### `google_oidc`<sup>Optional</sup> <a name="google_oidc" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig.property.googleOidc"></a>

```python
google_oidc: EventarcPipelineDestinationsAuthenticationConfigGoogleOidc
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

google_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#google_oidc EventarcPipeline#google_oidc}

---

##### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig.property.oauthToken"></a>

```python
oauth_token: EventarcPipelineDestinationsAuthenticationConfigOauthToken
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#oauth_token EventarcPipeline#oauth_token}

---

### EventarcPipelineDestinationsAuthenticationConfigGoogleOidc <a name="EventarcPipelineDestinationsAuthenticationConfigGoogleOidc" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc(
  service_account: str,
  audience: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.serviceAccount">service_account</a></code> | <code>str</code> | Service account email used to generate the OIDC Token. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.audience">audience</a></code> | <code>str</code> | Audience to be used to generate the OIDC Token. |

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Service account email used to generate the OIDC Token.

The principal who calls this API must have
iam.serviceAccounts.actAs permission in the service account. See
https://cloud.google.com/iam/docs/understanding-service-accounts
for more information. Eventarc service agents must have
roles/roles/iam.serviceAccountTokenCreator role to allow the
Pipeline to create OpenID tokens for authenticated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#service_account EventarcPipeline#service_account}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.audience"></a>

```python
audience: str
```

- *Type:* str

Audience to be used to generate the OIDC Token.

The audience claim
identifies the recipient that the JWT is intended for. If
unspecified, the destination URI will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#audience EventarcPipeline#audience}

---

### EventarcPipelineDestinationsAuthenticationConfigOauthToken <a name="EventarcPipelineDestinationsAuthenticationConfigOauthToken" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken(
  service_account: str,
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken.property.serviceAccount">service_account</a></code> | <code>str</code> | Service account email used to generate the [OAuth token](https://developers.google.com/identity/protocols/OAuth2). The principal who calls this API must have iam.serviceAccounts.actAs permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc service agents must have roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline to create OAuth2 tokens for authenticated requests. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken.property.scope">scope</a></code> | <code>str</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Service account email used to generate the [OAuth token](https://developers.google.com/identity/protocols/OAuth2). The principal who calls this API must have iam.serviceAccounts.actAs permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc service agents must have roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline to create OAuth2 tokens for authenticated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#service_account EventarcPipeline#service_account}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken.property.scope"></a>

```python
scope: str
```

- *Type:* str

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#scope EventarcPipeline#scope}

---

### EventarcPipelineDestinationsHttpEndpoint <a name="EventarcPipelineDestinationsHttpEndpoint" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint(
  uri: str,
  message_binding_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint.property.uri">uri</a></code> | <code>str</code> | The URI of the HTTP enpdoint. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint.property.messageBindingTemplate">message_binding_template</a></code> | <code>str</code> | The CEL expression used to modify how the destination-bound HTTP request is constructed. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint.property.uri"></a>

```python
uri: str
```

- *Type:* str

The URI of the HTTP enpdoint.

The value must be a RFC2396 URI string.
Examples: 'https://svc.us-central1.p.local:8080/route'.
Only the HTTPS protocol is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#uri EventarcPipeline#uri}

---

##### `message_binding_template`<sup>Optional</sup> <a name="message_binding_template" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint.property.messageBindingTemplate"></a>

```python
message_binding_template: str
```

- *Type:* str

The CEL expression used to modify how the destination-bound HTTP request is constructed.

If a binding expression is not specified here, the message
is treated as a CloudEvent and is mapped to the HTTP request according
to the CloudEvent HTTP Protocol Binding Binary Content Mode
(https://github.com/cloudevents/spec/blob/main/cloudevents/bindings/http-protocol-binding.md#31-binary-content-mode).
In this representation, all fields except the 'data' and
'datacontenttype' field on the message are mapped to HTTP request
headers with a prefix of 'ce-'.

To construct the HTTP request payload and the value of the content-type
HTTP header, the payload format is defined as follows:

1) Use the output_payload_format_type on the Pipeline.Destination if it
   is set, else:
2) Use the input_payload_format_type on the Pipeline if it is set,
   else:
3) Treat the payload as opaque binary data.

The 'data' field of the message is converted to the payload format or
left as-is for case 3) and then attached as the payload of the HTTP
request. The 'content-type' header on the HTTP request is set to the
payload format type or left empty for case 3). However, if a mediation
has updated the 'datacontenttype' field on the message so that it is
not the same as the payload format type but it is still a prefix of the
payload format type, then the 'content-type' header on the HTTP request
is set to this 'datacontenttype' value. For example, if the
'datacontenttype' is "application/json" and the payload format type is
"application/json; charset=utf-8", then the 'content-type' header on
the HTTP request is set to "application/json; charset=utf-8".

If a non-empty binding expression is specified then this expression is
used to modify the default CloudEvent HTTP Protocol Binding Binary
Content representation.
The result of the CEL expression must be a map of key/value pairs
which is used as follows:

* If a map named 'headers' exists on the result of the expression,
  then its key/value pairs are directly mapped to the HTTP request
  headers. The headers values are constructed from the corresponding
  value type's canonical representation. If the 'headers' field doesn't
  exist then the resulting HTTP request will be the headers of the
  CloudEvent HTTP Binding Binary Content Mode representation of the final
  message. Note: If the specified binding expression, has updated the
  'datacontenttype' field on the message so that it is not the same as
  the payload format type but it is still a prefix of the payload format
  type, then the 'content-type' header in the 'headers' map is set to
  this 'datacontenttype' value.
* If a field named 'body' exists on the result of the expression then
  its value is directly mapped to the body of the request. If the value
  of the 'body' field is of type bytes or string then it is used for
  the HTTP request body as-is, with no conversion. If the body field is
  of any other type then it is converted to a JSON string. If the body
  field does not exist then the resulting payload of the HTTP request
  will be data value of the CloudEvent HTTP Binding Binary Content Mode
  representation of the final message as described earlier.
* Any other fields in the resulting expression will be ignored.

The CEL expression may access the incoming CloudEvent message in its
definition, as follows:

* The 'data' field of the incoming CloudEvent message can be accessed
  using the 'message.data' value. Subfields of 'message.data' may also be
  accessed if an input_payload_format has been specified on the Pipeline.
* Each attribute of the incoming CloudEvent message can be accessed
  using the 'message.' value, where  is replaced with the
  name of the attribute.
* Existing headers can be accessed in the CEL expression using the
  'headers' variable. The 'headers' variable defines a map of key/value
  pairs corresponding to the HTTP headers of the CloudEvent HTTP Binding
  Binary Content Mode representation of the final message as described
  earlier. For example, the following CEL expression can be used to
  construct an HTTP request by adding an additional header to the HTTP
  headers of the CloudEvent HTTP Binding Binary Content Mode
  representation of the final message and by overwriting the body of the
  request:

```
{
"headers": headers.merge({"new-header-key": "new-header-value"}),
"body": "new-body"
}
```

* The default binding for the message payload can be accessed using the
  'body' variable. It conatins a string representation of the message
  payload in the format specified by the 'output_payload_format' field.
  If the 'input_payload_format' field is not set, the 'body'
  variable contains the same message payload bytes that were published.

Additionally, the following CEL extension functions are provided for
use in this CEL expression:

* toBase64Url:
  map.toBase64Url() -> string
* Converts a CelValue to a base64url encoded string
* toJsonString: map.toJsonString() -> string
* Converts a CelValue to a JSON string
* merge:
  map1.merge(map2) -> map3
* Merges the passed CEL map with the existing CEL map the
  function is applied to.
* If the same key exists in both maps, if the key's value is type
  map both maps are merged else the value from the passed map is
  used.
* denormalize:
  map.denormalize() -> map
* Denormalizes a CEL map such that every value of type map or key
  in the map is expanded to return a single level map.
* The resulting keys are "." separated indices of the map keys.
* For example:
  {
  "a": 1,
  "b": {
  "c": 2,
  "d": 3
  }
  "e": [4, 5]
  }
  .denormalize()
  -> {
  "a": 1,
  "b.c": 2,
  "b.d": 3,
  "e.0": 4,
  "e.1": 5
  }
* setField:
  map.setField(key, value) -> message
* Sets the field of the message with the given key to the
  given value.
* If the field is not present it will be added.
* If the field is present it will be overwritten.
* The key can be a dot separated path to set a field in a nested
  message.
* Key must be of type string.
* Value may be any valid type.
* removeFields:
  map.removeFields([key1, key2, ...]) -> message
* Removes the fields of the map with the given keys.
* The keys can be a dot separated path to remove a field in a
  nested message.
* If a key is not found it will be ignored.
* Keys must be of type string.
* toMap:
  [map1, map2, ...].toMap() -> map
* Converts a CEL list of CEL maps to a single CEL map
* toCloudEventJsonWithPayloadFormat:
  message.toCloudEventJsonWithPayloadFormat() -> map
* Converts a message to the corresponding structure of JSON
  format for CloudEvents.
* It converts 'data' to destination payload format
  specified in 'output_payload_format'. If 'output_payload_format' is
  not set, the data will remain unchanged.
* It also sets the corresponding datacontenttype of
  the CloudEvent, as indicated by
  'output_payload_format'. If no
  'output_payload_format' is set it will use the value of the
  "datacontenttype" attribute on the CloudEvent if present, else
  remove "datacontenttype" attribute.
* This function expects that the content of the message will
  adhere to the standard CloudEvent format. If it doesn't then this
  function will fail.
* The result is a CEL map that corresponds to the JSON
  representation of the CloudEvent. To convert that data to a JSON
  string it can be chained with the toJsonString function.

The Pipeline expects that the message it receives adheres to the
standard CloudEvent format. If it doesn't then the outgoing message
request may fail with a persistent error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#message_binding_template EventarcPipeline#message_binding_template}

---

### EventarcPipelineDestinationsNetworkConfig <a name="EventarcPipelineDestinationsNetworkConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsNetworkConfig(
  network_attachment: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig.property.networkAttachment">network_attachment</a></code> | <code>str</code> | Name of the NetworkAttachment that allows access to the consumer VPC. Format: 'projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}'. |

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

Name of the NetworkAttachment that allows access to the consumer VPC. Format: 'projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#network_attachment EventarcPipeline#network_attachment}

---

### EventarcPipelineDestinationsOutputPayloadFormat <a name="EventarcPipelineDestinationsOutputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat(
  avro: EventarcPipelineDestinationsOutputPayloadFormatAvro = None,
  json: EventarcPipelineDestinationsOutputPayloadFormatJson = None,
  protobuf: EventarcPipelineDestinationsOutputPayloadFormatProtobuf = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.avro">avro</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.json">json</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a></code> | json block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.protobuf">protobuf</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a></code> | protobuf block. |

---

##### `avro`<sup>Optional</sup> <a name="avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.avro"></a>

```python
avro: EventarcPipelineDestinationsOutputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#avro EventarcPipeline#avro}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.json"></a>

```python
json: EventarcPipelineDestinationsOutputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#json EventarcPipeline#json}

---

##### `protobuf`<sup>Optional</sup> <a name="protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.protobuf"></a>

```python
protobuf: EventarcPipelineDestinationsOutputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

protobuf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#protobuf EventarcPipeline#protobuf}

---

### EventarcPipelineDestinationsOutputPayloadFormatAvro <a name="EventarcPipelineDestinationsOutputPayloadFormatAvro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro(
  schema_definition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro.property.schemaDefinition">schema_definition</a></code> | <code>str</code> | The entire schema definition is stored in this field. |

---

##### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro.property.schemaDefinition"></a>

```python
schema_definition: str
```

- *Type:* str

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}

---

### EventarcPipelineDestinationsOutputPayloadFormatJson <a name="EventarcPipelineDestinationsOutputPayloadFormatJson" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson()
```


### EventarcPipelineDestinationsOutputPayloadFormatProtobuf <a name="EventarcPipelineDestinationsOutputPayloadFormatProtobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf(
  schema_definition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf.property.schemaDefinition">schema_definition</a></code> | <code>str</code> | The entire schema definition is stored in this field. |

---

##### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf.property.schemaDefinition"></a>

```python
schema_definition: str
```

- *Type:* str

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}

---

### EventarcPipelineInputPayloadFormat <a name="EventarcPipelineInputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineInputPayloadFormat(
  avro: EventarcPipelineInputPayloadFormatAvro = None,
  json: EventarcPipelineInputPayloadFormatJson = None,
  protobuf: EventarcPipelineInputPayloadFormatProtobuf = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.avro">avro</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.json">json</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a></code> | json block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.protobuf">protobuf</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a></code> | protobuf block. |

---

##### `avro`<sup>Optional</sup> <a name="avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.avro"></a>

```python
avro: EventarcPipelineInputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#avro EventarcPipeline#avro}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.json"></a>

```python
json: EventarcPipelineInputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#json EventarcPipeline#json}

---

##### `protobuf`<sup>Optional</sup> <a name="protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.protobuf"></a>

```python
protobuf: EventarcPipelineInputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a>

protobuf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#protobuf EventarcPipeline#protobuf}

---

### EventarcPipelineInputPayloadFormatAvro <a name="EventarcPipelineInputPayloadFormatAvro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineInputPayloadFormatAvro(
  schema_definition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro.property.schemaDefinition">schema_definition</a></code> | <code>str</code> | The entire schema definition is stored in this field. |

---

##### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro.property.schemaDefinition"></a>

```python
schema_definition: str
```

- *Type:* str

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}

---

### EventarcPipelineInputPayloadFormatJson <a name="EventarcPipelineInputPayloadFormatJson" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineInputPayloadFormatJson()
```


### EventarcPipelineInputPayloadFormatProtobuf <a name="EventarcPipelineInputPayloadFormatProtobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf(
  schema_definition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf.property.schemaDefinition">schema_definition</a></code> | <code>str</code> | The entire schema definition is stored in this field. |

---

##### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf.property.schemaDefinition"></a>

```python
schema_definition: str
```

- *Type:* str

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}

---

### EventarcPipelineLoggingConfig <a name="EventarcPipelineLoggingConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineLoggingConfig(
  log_severity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig.property.logSeverity">log_severity</a></code> | <code>str</code> | The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. |

---

##### `log_severity`<sup>Optional</sup> <a name="log_severity" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig.property.logSeverity"></a>

```python
log_severity: str
```

- *Type:* str

The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry.

Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#log_severity EventarcPipeline#log_severity}

---

### EventarcPipelineMediations <a name="EventarcPipelineMediations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineMediations(
  transformation: EventarcPipelineMediationsTransformation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations.property.transformation">transformation</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a></code> | transformation block. |

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations.property.transformation"></a>

```python
transformation: EventarcPipelineMediationsTransformation
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a>

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#transformation EventarcPipeline#transformation}

---

### EventarcPipelineMediationsTransformation <a name="EventarcPipelineMediationsTransformation" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineMediationsTransformation(
  transformation_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation.property.transformationTemplate">transformation_template</a></code> | <code>str</code> | The CEL expression template to apply to transform messages. |

---

##### `transformation_template`<sup>Optional</sup> <a name="transformation_template" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation.property.transformationTemplate"></a>

```python
transformation_template: str
```

- *Type:* str

The CEL expression template to apply to transform messages.

The following CEL extension functions are provided for
use in this CEL expression:

* merge:
  map1.merge(map2) -> map3
* Merges the passed CEL map with the existing CEL map the
  function is applied to.
* If the same key exists in both maps, if the key's value is type
  map both maps are merged else the value from the passed map is
  used.
* denormalize:
  map.denormalize() -> map
* Denormalizes a CEL map such that every value of type map or key
  in the map is expanded to return a single level map.
* The resulting keys are "." separated indices of the map keys.
* For example:
  {
  "a": 1,
  "b": {
  "c": 2,
  "d": 3
  }
  "e": [4, 5]
  }
  .denormalize()
  -> {
  "a": 1,
  "b.c": 2,
  "b.d": 3,
  "e.0": 4,
  "e.1": 5
  }
* setField:
  map.setField(key, value) -> message
* Sets the field of the message with the given key to the
  given value.
* If the field is not present it will be added.
* If the field is present it will be overwritten.
* The key can be a dot separated path to set a field in a nested
  message.
* Key must be of type string.
* Value may be any valid type.
* removeFields:
  map.removeFields([key1, key2, ...]) -> message
* Removes the fields of the map with the given keys.
* The keys can be a dot separated path to remove a field in a
  nested message.
* If a key is not found it will be ignored.
* Keys must be of type string.
* toMap:
  [map1, map2, ...].toMap() -> map
* Converts a CEL list of CEL maps to a single CEL map
* toDestinationPayloadFormat():
  message.data.toDestinationPayloadFormat() -> string or bytes
* Converts the message data to the destination payload format
  specified in Pipeline.Destination.output_payload_format
* This function is meant to be applied to the message.data field.
* If the destination payload format is not set, the function will
  return the message data unchanged.
* toCloudEventJsonWithPayloadFormat:
  message.toCloudEventJsonWithPayloadFormat() -> map
* Converts a message to the corresponding structure of JSON
  format for CloudEvents
* This function applies toDestinationPayloadFormat() to the
  message data. It also sets the corresponding datacontenttype of
  the CloudEvent, as indicated by
  Pipeline.Destination.output_payload_format. If no
  output_payload_format is set it will use the existing
  datacontenttype on the CloudEvent if present, else leave
  datacontenttype absent.
* This function expects that the content of the message will
  adhere to the standard CloudEvent format. If it doesn't then this
  function will fail.
* The result is a CEL map that corresponds to the JSON
  representation of the CloudEvent. To convert that data to a JSON
  string it can be chained with the toJsonString function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#transformation_template EventarcPipeline#transformation_template}

---

### EventarcPipelineRetryPolicy <a name="EventarcPipelineRetryPolicy" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineRetryPolicy(
  max_attempts: typing.Union[int, float] = None,
  max_retry_delay: str = None,
  min_retry_delay: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | The maximum number of delivery attempts for any message. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.maxRetryDelay">max_retry_delay</a></code> | <code>str</code> | The maximum amount of seconds to wait between retry attempts. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.minRetryDelay">min_retry_delay</a></code> | <code>str</code> | The minimum amount of seconds to wait between retry attempts. |

---

##### `max_attempts`<sup>Optional</sup> <a name="max_attempts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of delivery attempts for any message.

The value must
be between 1 and 100.
The default value for this field is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#max_attempts EventarcPipeline#max_attempts}

---

##### `max_retry_delay`<sup>Optional</sup> <a name="max_retry_delay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.maxRetryDelay"></a>

```python
max_retry_delay: str
```

- *Type:* str

The maximum amount of seconds to wait between retry attempts.

The value
must be between 1 and 600.
The default value for this field is 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#max_retry_delay EventarcPipeline#max_retry_delay}

---

##### `min_retry_delay`<sup>Optional</sup> <a name="min_retry_delay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.minRetryDelay"></a>

```python
min_retry_delay: str
```

- *Type:* str

The minimum amount of seconds to wait between retry attempts.

The value
must be between 1 and 600.
The default value for this field is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#min_retry_delay EventarcPipeline#min_retry_delay}

---

### EventarcPipelineTimeouts <a name="EventarcPipelineTimeouts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#create EventarcPipeline#create}. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#delete EventarcPipeline#delete}. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#update EventarcPipeline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#create EventarcPipeline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#delete EventarcPipeline#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#update EventarcPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference <a name="EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resetAudience">reset_audience</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audience` <a name="reset_audience" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resetAudience"></a>

```python
def reset_audience() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.internalValue"></a>

```python
internal_value: EventarcPipelineDestinationsAuthenticationConfigGoogleOidc
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

---


### EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference <a name="EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.internalValue"></a>

```python
internal_value: EventarcPipelineDestinationsAuthenticationConfigOauthToken
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

---


### EventarcPipelineDestinationsAuthenticationConfigOutputReference <a name="EventarcPipelineDestinationsAuthenticationConfigOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putGoogleOidc">put_google_oidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putOauthToken">put_oauth_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resetGoogleOidc">reset_google_oidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resetOauthToken">reset_oauth_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_google_oidc` <a name="put_google_oidc" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putGoogleOidc"></a>

```python
def put_google_oidc(
  service_account: str,
  audience: str = None
) -> None
```

###### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putGoogleOidc.parameter.serviceAccount"></a>

- *Type:* str

Service account email used to generate the OIDC Token.

The principal who calls this API must have
iam.serviceAccounts.actAs permission in the service account. See
https://cloud.google.com/iam/docs/understanding-service-accounts
for more information. Eventarc service agents must have
roles/roles/iam.serviceAccountTokenCreator role to allow the
Pipeline to create OpenID tokens for authenticated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#service_account EventarcPipeline#service_account}

---

###### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putGoogleOidc.parameter.audience"></a>

- *Type:* str

Audience to be used to generate the OIDC Token.

The audience claim
identifies the recipient that the JWT is intended for. If
unspecified, the destination URI will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#audience EventarcPipeline#audience}

---

##### `put_oauth_token` <a name="put_oauth_token" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putOauthToken"></a>

```python
def put_oauth_token(
  service_account: str,
  scope: str = None
) -> None
```

###### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putOauthToken.parameter.serviceAccount"></a>

- *Type:* str

Service account email used to generate the [OAuth token](https://developers.google.com/identity/protocols/OAuth2). The principal who calls this API must have iam.serviceAccounts.actAs permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc service agents must have roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline to create OAuth2 tokens for authenticated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#service_account EventarcPipeline#service_account}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putOauthToken.parameter.scope"></a>

- *Type:* str

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#scope EventarcPipeline#scope}

---

##### `reset_google_oidc` <a name="reset_google_oidc" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resetGoogleOidc"></a>

```python
def reset_google_oidc() -> None
```

##### `reset_oauth_token` <a name="reset_oauth_token" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resetOauthToken"></a>

```python
def reset_oauth_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidc">google_oidc</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference">EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthToken">oauth_token</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference">EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidcInput">google_oidc_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthTokenInput">oauth_token_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `google_oidc`<sup>Required</sup> <a name="google_oidc" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidc"></a>

```python
google_oidc: EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference">EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference</a>

---

##### `oauth_token`<sup>Required</sup> <a name="oauth_token" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthToken"></a>

```python
oauth_token: EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference">EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference</a>

---

##### `google_oidc_input`<sup>Optional</sup> <a name="google_oidc_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidcInput"></a>

```python
google_oidc_input: EventarcPipelineDestinationsAuthenticationConfigGoogleOidc
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

---

##### `oauth_token_input`<sup>Optional</sup> <a name="oauth_token_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthTokenInput"></a>

```python
oauth_token_input: EventarcPipelineDestinationsAuthenticationConfigOauthToken
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.internalValue"></a>

```python
internal_value: EventarcPipelineDestinationsAuthenticationConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a>

---


### EventarcPipelineDestinationsHttpEndpointOutputReference <a name="EventarcPipelineDestinationsHttpEndpointOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.resetMessageBindingTemplate">reset_message_binding_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message_binding_template` <a name="reset_message_binding_template" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.resetMessageBindingTemplate"></a>

```python
def reset_message_binding_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplateInput">message_binding_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplate">message_binding_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_binding_template_input`<sup>Optional</sup> <a name="message_binding_template_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplateInput"></a>

```python
message_binding_template_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `message_binding_template`<sup>Required</sup> <a name="message_binding_template" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplate"></a>

```python
message_binding_template: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.internalValue"></a>

```python
internal_value: EventarcPipelineDestinationsHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a>

---


### EventarcPipelineDestinationsList <a name="EventarcPipelineDestinationsList" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventarcPipelineDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EventarcPipelineDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>]]

---


### EventarcPipelineDestinationsNetworkConfigOutputReference <a name="EventarcPipelineDestinationsNetworkConfigOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachmentInput">network_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_attachment_input`<sup>Optional</sup> <a name="network_attachment_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```python
network_attachment_input: str
```

- *Type:* str

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: EventarcPipelineDestinationsNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a>

---


### EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference <a name="EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resetSchemaDefinition">reset_schema_definition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schema_definition` <a name="reset_schema_definition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resetSchemaDefinition"></a>

```python
def reset_schema_definition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinitionInput">schema_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinition">schema_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_definition_input`<sup>Optional</sup> <a name="schema_definition_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinitionInput"></a>

```python
schema_definition_input: str
```

- *Type:* str

---

##### `schema_definition`<sup>Required</sup> <a name="schema_definition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinition"></a>

```python
schema_definition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.internalValue"></a>

```python
internal_value: EventarcPipelineDestinationsOutputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a>

---


### EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference <a name="EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.internalValue"></a>

```python
internal_value: EventarcPipelineDestinationsOutputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a>

---


### EventarcPipelineDestinationsOutputPayloadFormatOutputReference <a name="EventarcPipelineDestinationsOutputPayloadFormatOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putAvro">put_avro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putJson">put_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putProtobuf">put_protobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetAvro">reset_avro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetJson">reset_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetProtobuf">reset_protobuf</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_avro` <a name="put_avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putAvro"></a>

```python
def put_avro(
  schema_definition: str = None
) -> None
```

###### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putAvro.parameter.schemaDefinition"></a>

- *Type:* str

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}

---

##### `put_json` <a name="put_json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putJson"></a>

```python
def put_json() -> None
```

##### `put_protobuf` <a name="put_protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putProtobuf"></a>

```python
def put_protobuf(
  schema_definition: str = None
) -> None
```

###### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putProtobuf.parameter.schemaDefinition"></a>

- *Type:* str

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}

---

##### `reset_avro` <a name="reset_avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetAvro"></a>

```python
def reset_avro() -> None
```

##### `reset_json` <a name="reset_json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetJson"></a>

```python
def reset_json() -> None
```

##### `reset_protobuf` <a name="reset_protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetProtobuf"></a>

```python
def reset_protobuf() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avro">avro</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference">EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference">EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobuf">protobuf</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference">EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avroInput">avro_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.jsonInput">json_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobufInput">protobuf_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avro`<sup>Required</sup> <a name="avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avro"></a>

```python
avro: EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference">EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.json"></a>

```python
json: EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference">EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference</a>

---

##### `protobuf`<sup>Required</sup> <a name="protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobuf"></a>

```python
protobuf: EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference">EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference</a>

---

##### `avro_input`<sup>Optional</sup> <a name="avro_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avroInput"></a>

```python
avro_input: EventarcPipelineDestinationsOutputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a>

---

##### `json_input`<sup>Optional</sup> <a name="json_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.jsonInput"></a>

```python
json_input: EventarcPipelineDestinationsOutputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a>

---

##### `protobuf_input`<sup>Optional</sup> <a name="protobuf_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobufInput"></a>

```python
protobuf_input: EventarcPipelineDestinationsOutputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.internalValue"></a>

```python
internal_value: EventarcPipelineDestinationsOutputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a>

---


### EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference <a name="EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resetSchemaDefinition">reset_schema_definition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schema_definition` <a name="reset_schema_definition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resetSchemaDefinition"></a>

```python
def reset_schema_definition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput">schema_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinition">schema_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_definition_input`<sup>Optional</sup> <a name="schema_definition_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput"></a>

```python
schema_definition_input: str
```

- *Type:* str

---

##### `schema_definition`<sup>Required</sup> <a name="schema_definition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinition"></a>

```python
schema_definition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.internalValue"></a>

```python
internal_value: EventarcPipelineDestinationsOutputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

---


### EventarcPipelineDestinationsOutputReference <a name="EventarcPipelineDestinationsOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putAuthenticationConfig">put_authentication_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putHttpEndpoint">put_http_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putOutputPayloadFormat">put_output_payload_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetAuthenticationConfig">reset_authentication_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetHttpEndpoint">reset_http_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetMessageBus">reset_message_bus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetNetworkConfig">reset_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetOutputPayloadFormat">reset_output_payload_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetTopic">reset_topic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetWorkflow">reset_workflow</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication_config` <a name="put_authentication_config" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putAuthenticationConfig"></a>

```python
def put_authentication_config(
  google_oidc: EventarcPipelineDestinationsAuthenticationConfigGoogleOidc = None,
  oauth_token: EventarcPipelineDestinationsAuthenticationConfigOauthToken = None
) -> None
```

###### `google_oidc`<sup>Optional</sup> <a name="google_oidc" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putAuthenticationConfig.parameter.googleOidc"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

google_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#google_oidc EventarcPipeline#google_oidc}

---

###### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putAuthenticationConfig.parameter.oauthToken"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#oauth_token EventarcPipeline#oauth_token}

---

##### `put_http_endpoint` <a name="put_http_endpoint" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putHttpEndpoint"></a>

```python
def put_http_endpoint(
  uri: str,
  message_binding_template: str = None
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putHttpEndpoint.parameter.uri"></a>

- *Type:* str

The URI of the HTTP enpdoint.

The value must be a RFC2396 URI string.
Examples: 'https://svc.us-central1.p.local:8080/route'.
Only the HTTPS protocol is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#uri EventarcPipeline#uri}

---

###### `message_binding_template`<sup>Optional</sup> <a name="message_binding_template" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putHttpEndpoint.parameter.messageBindingTemplate"></a>

- *Type:* str

The CEL expression used to modify how the destination-bound HTTP request is constructed.

If a binding expression is not specified here, the message
is treated as a CloudEvent and is mapped to the HTTP request according
to the CloudEvent HTTP Protocol Binding Binary Content Mode
(https://github.com/cloudevents/spec/blob/main/cloudevents/bindings/http-protocol-binding.md#31-binary-content-mode).
In this representation, all fields except the 'data' and
'datacontenttype' field on the message are mapped to HTTP request
headers with a prefix of 'ce-'.

To construct the HTTP request payload and the value of the content-type
HTTP header, the payload format is defined as follows:

1) Use the output_payload_format_type on the Pipeline.Destination if it
   is set, else:
2) Use the input_payload_format_type on the Pipeline if it is set,
   else:
3) Treat the payload as opaque binary data.

The 'data' field of the message is converted to the payload format or
left as-is for case 3) and then attached as the payload of the HTTP
request. The 'content-type' header on the HTTP request is set to the
payload format type or left empty for case 3). However, if a mediation
has updated the 'datacontenttype' field on the message so that it is
not the same as the payload format type but it is still a prefix of the
payload format type, then the 'content-type' header on the HTTP request
is set to this 'datacontenttype' value. For example, if the
'datacontenttype' is "application/json" and the payload format type is
"application/json; charset=utf-8", then the 'content-type' header on
the HTTP request is set to "application/json; charset=utf-8".

If a non-empty binding expression is specified then this expression is
used to modify the default CloudEvent HTTP Protocol Binding Binary
Content representation.
The result of the CEL expression must be a map of key/value pairs
which is used as follows:

* If a map named 'headers' exists on the result of the expression,
  then its key/value pairs are directly mapped to the HTTP request
  headers. The headers values are constructed from the corresponding
  value type's canonical representation. If the 'headers' field doesn't
  exist then the resulting HTTP request will be the headers of the
  CloudEvent HTTP Binding Binary Content Mode representation of the final
  message. Note: If the specified binding expression, has updated the
  'datacontenttype' field on the message so that it is not the same as
  the payload format type but it is still a prefix of the payload format
  type, then the 'content-type' header in the 'headers' map is set to
  this 'datacontenttype' value.
* If a field named 'body' exists on the result of the expression then
  its value is directly mapped to the body of the request. If the value
  of the 'body' field is of type bytes or string then it is used for
  the HTTP request body as-is, with no conversion. If the body field is
  of any other type then it is converted to a JSON string. If the body
  field does not exist then the resulting payload of the HTTP request
  will be data value of the CloudEvent HTTP Binding Binary Content Mode
  representation of the final message as described earlier.
* Any other fields in the resulting expression will be ignored.

The CEL expression may access the incoming CloudEvent message in its
definition, as follows:

* The 'data' field of the incoming CloudEvent message can be accessed
  using the 'message.data' value. Subfields of 'message.data' may also be
  accessed if an input_payload_format has been specified on the Pipeline.
* Each attribute of the incoming CloudEvent message can be accessed
  using the 'message.' value, where  is replaced with the
  name of the attribute.
* Existing headers can be accessed in the CEL expression using the
  'headers' variable. The 'headers' variable defines a map of key/value
  pairs corresponding to the HTTP headers of the CloudEvent HTTP Binding
  Binary Content Mode representation of the final message as described
  earlier. For example, the following CEL expression can be used to
  construct an HTTP request by adding an additional header to the HTTP
  headers of the CloudEvent HTTP Binding Binary Content Mode
  representation of the final message and by overwriting the body of the
  request:

```
{
"headers": headers.merge({"new-header-key": "new-header-value"}),
"body": "new-body"
}
```

* The default binding for the message payload can be accessed using the
  'body' variable. It conatins a string representation of the message
  payload in the format specified by the 'output_payload_format' field.
  If the 'input_payload_format' field is not set, the 'body'
  variable contains the same message payload bytes that were published.

Additionally, the following CEL extension functions are provided for
use in this CEL expression:

* toBase64Url:
  map.toBase64Url() -> string
* Converts a CelValue to a base64url encoded string
* toJsonString: map.toJsonString() -> string
* Converts a CelValue to a JSON string
* merge:
  map1.merge(map2) -> map3
* Merges the passed CEL map with the existing CEL map the
  function is applied to.
* If the same key exists in both maps, if the key's value is type
  map both maps are merged else the value from the passed map is
  used.
* denormalize:
  map.denormalize() -> map
* Denormalizes a CEL map such that every value of type map or key
  in the map is expanded to return a single level map.
* The resulting keys are "." separated indices of the map keys.
* For example:
  {
  "a": 1,
  "b": {
  "c": 2,
  "d": 3
  }
  "e": [4, 5]
  }
  .denormalize()
  -> {
  "a": 1,
  "b.c": 2,
  "b.d": 3,
  "e.0": 4,
  "e.1": 5
  }
* setField:
  map.setField(key, value) -> message
* Sets the field of the message with the given key to the
  given value.
* If the field is not present it will be added.
* If the field is present it will be overwritten.
* The key can be a dot separated path to set a field in a nested
  message.
* Key must be of type string.
* Value may be any valid type.
* removeFields:
  map.removeFields([key1, key2, ...]) -> message
* Removes the fields of the map with the given keys.
* The keys can be a dot separated path to remove a field in a
  nested message.
* If a key is not found it will be ignored.
* Keys must be of type string.
* toMap:
  [map1, map2, ...].toMap() -> map
* Converts a CEL list of CEL maps to a single CEL map
* toCloudEventJsonWithPayloadFormat:
  message.toCloudEventJsonWithPayloadFormat() -> map
* Converts a message to the corresponding structure of JSON
  format for CloudEvents.
* It converts 'data' to destination payload format
  specified in 'output_payload_format'. If 'output_payload_format' is
  not set, the data will remain unchanged.
* It also sets the corresponding datacontenttype of
  the CloudEvent, as indicated by
  'output_payload_format'. If no
  'output_payload_format' is set it will use the value of the
  "datacontenttype" attribute on the CloudEvent if present, else
  remove "datacontenttype" attribute.
* This function expects that the content of the message will
  adhere to the standard CloudEvent format. If it doesn't then this
  function will fail.
* The result is a CEL map that corresponds to the JSON
  representation of the CloudEvent. To convert that data to a JSON
  string it can be chained with the toJsonString function.

The Pipeline expects that the message it receives adheres to the
standard CloudEvent format. If it doesn't then the outgoing message
request may fail with a persistent error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#message_binding_template EventarcPipeline#message_binding_template}

---

##### `put_network_config` <a name="put_network_config" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putNetworkConfig"></a>

```python
def put_network_config(
  network_attachment: str
) -> None
```

###### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putNetworkConfig.parameter.networkAttachment"></a>

- *Type:* str

Name of the NetworkAttachment that allows access to the consumer VPC. Format: 'projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#network_attachment EventarcPipeline#network_attachment}

---

##### `put_output_payload_format` <a name="put_output_payload_format" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putOutputPayloadFormat"></a>

```python
def put_output_payload_format(
  avro: EventarcPipelineDestinationsOutputPayloadFormatAvro = None,
  json: EventarcPipelineDestinationsOutputPayloadFormatJson = None,
  protobuf: EventarcPipelineDestinationsOutputPayloadFormatProtobuf = None
) -> None
```

###### `avro`<sup>Optional</sup> <a name="avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putOutputPayloadFormat.parameter.avro"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#avro EventarcPipeline#avro}

---

###### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putOutputPayloadFormat.parameter.json"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#json EventarcPipeline#json}

---

###### `protobuf`<sup>Optional</sup> <a name="protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putOutputPayloadFormat.parameter.protobuf"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

protobuf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#protobuf EventarcPipeline#protobuf}

---

##### `reset_authentication_config` <a name="reset_authentication_config" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetAuthenticationConfig"></a>

```python
def reset_authentication_config() -> None
```

##### `reset_http_endpoint` <a name="reset_http_endpoint" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetHttpEndpoint"></a>

```python
def reset_http_endpoint() -> None
```

##### `reset_message_bus` <a name="reset_message_bus" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetMessageBus"></a>

```python
def reset_message_bus() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```

##### `reset_output_payload_format` <a name="reset_output_payload_format" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetOutputPayloadFormat"></a>

```python
def reset_output_payload_format() -> None
```

##### `reset_topic` <a name="reset_topic" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetTopic"></a>

```python
def reset_topic() -> None
```

##### `reset_workflow` <a name="reset_workflow" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetWorkflow"></a>

```python
def reset_workflow() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.authenticationConfig">authentication_config</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference">EventarcPipelineDestinationsAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.httpEndpoint">http_endpoint</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference">EventarcPipelineDestinationsHttpEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference">EventarcPipelineDestinationsNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.outputPayloadFormat">output_payload_format</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference">EventarcPipelineDestinationsOutputPayloadFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.authenticationConfigInput">authentication_config_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.httpEndpointInput">http_endpoint_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.messageBusInput">message_bus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.networkConfigInput">network_config_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.outputPayloadFormatInput">output_payload_format_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.workflowInput">workflow_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.messageBus">message_bus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.workflow">workflow</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_config`<sup>Required</sup> <a name="authentication_config" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.authenticationConfig"></a>

```python
authentication_config: EventarcPipelineDestinationsAuthenticationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference">EventarcPipelineDestinationsAuthenticationConfigOutputReference</a>

---

##### `http_endpoint`<sup>Required</sup> <a name="http_endpoint" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.httpEndpoint"></a>

```python
http_endpoint: EventarcPipelineDestinationsHttpEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference">EventarcPipelineDestinationsHttpEndpointOutputReference</a>

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.networkConfig"></a>

```python
network_config: EventarcPipelineDestinationsNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference">EventarcPipelineDestinationsNetworkConfigOutputReference</a>

---

##### `output_payload_format`<sup>Required</sup> <a name="output_payload_format" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.outputPayloadFormat"></a>

```python
output_payload_format: EventarcPipelineDestinationsOutputPayloadFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference">EventarcPipelineDestinationsOutputPayloadFormatOutputReference</a>

---

##### `authentication_config_input`<sup>Optional</sup> <a name="authentication_config_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.authenticationConfigInput"></a>

```python
authentication_config_input: EventarcPipelineDestinationsAuthenticationConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a>

---

##### `http_endpoint_input`<sup>Optional</sup> <a name="http_endpoint_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.httpEndpointInput"></a>

```python
http_endpoint_input: EventarcPipelineDestinationsHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a>

---

##### `message_bus_input`<sup>Optional</sup> <a name="message_bus_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.messageBusInput"></a>

```python
message_bus_input: str
```

- *Type:* str

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.networkConfigInput"></a>

```python
network_config_input: EventarcPipelineDestinationsNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a>

---

##### `output_payload_format_input`<sup>Optional</sup> <a name="output_payload_format_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.outputPayloadFormatInput"></a>

```python
output_payload_format_input: EventarcPipelineDestinationsOutputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a>

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `workflow_input`<sup>Optional</sup> <a name="workflow_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.workflowInput"></a>

```python
workflow_input: str
```

- *Type:* str

---

##### `message_bus`<sup>Required</sup> <a name="message_bus" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.messageBus"></a>

```python
message_bus: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.workflow"></a>

```python
workflow: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EventarcPipelineDestinations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations">EventarcPipelineDestinations</a>]

---


### EventarcPipelineInputPayloadFormatAvroOutputReference <a name="EventarcPipelineInputPayloadFormatAvroOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.resetSchemaDefinition">reset_schema_definition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schema_definition` <a name="reset_schema_definition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.resetSchemaDefinition"></a>

```python
def reset_schema_definition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinitionInput">schema_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinition">schema_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_definition_input`<sup>Optional</sup> <a name="schema_definition_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinitionInput"></a>

```python
schema_definition_input: str
```

- *Type:* str

---

##### `schema_definition`<sup>Required</sup> <a name="schema_definition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinition"></a>

```python
schema_definition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.internalValue"></a>

```python
internal_value: EventarcPipelineInputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a>

---


### EventarcPipelineInputPayloadFormatJsonOutputReference <a name="EventarcPipelineInputPayloadFormatJsonOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.internalValue"></a>

```python
internal_value: EventarcPipelineInputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a>

---


### EventarcPipelineInputPayloadFormatOutputReference <a name="EventarcPipelineInputPayloadFormatOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putAvro">put_avro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putJson">put_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putProtobuf">put_protobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetAvro">reset_avro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetJson">reset_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetProtobuf">reset_protobuf</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_avro` <a name="put_avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putAvro"></a>

```python
def put_avro(
  schema_definition: str = None
) -> None
```

###### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putAvro.parameter.schemaDefinition"></a>

- *Type:* str

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}

---

##### `put_json` <a name="put_json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putJson"></a>

```python
def put_json() -> None
```

##### `put_protobuf` <a name="put_protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putProtobuf"></a>

```python
def put_protobuf(
  schema_definition: str = None
) -> None
```

###### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putProtobuf.parameter.schemaDefinition"></a>

- *Type:* str

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}

---

##### `reset_avro` <a name="reset_avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetAvro"></a>

```python
def reset_avro() -> None
```

##### `reset_json` <a name="reset_json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetJson"></a>

```python
def reset_json() -> None
```

##### `reset_protobuf` <a name="reset_protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetProtobuf"></a>

```python
def reset_protobuf() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.avro">avro</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference">EventarcPipelineInputPayloadFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference">EventarcPipelineInputPayloadFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.protobuf">protobuf</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference">EventarcPipelineInputPayloadFormatProtobufOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.avroInput">avro_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.jsonInput">json_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.protobufInput">protobuf_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avro`<sup>Required</sup> <a name="avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.avro"></a>

```python
avro: EventarcPipelineInputPayloadFormatAvroOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference">EventarcPipelineInputPayloadFormatAvroOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.json"></a>

```python
json: EventarcPipelineInputPayloadFormatJsonOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference">EventarcPipelineInputPayloadFormatJsonOutputReference</a>

---

##### `protobuf`<sup>Required</sup> <a name="protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.protobuf"></a>

```python
protobuf: EventarcPipelineInputPayloadFormatProtobufOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference">EventarcPipelineInputPayloadFormatProtobufOutputReference</a>

---

##### `avro_input`<sup>Optional</sup> <a name="avro_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.avroInput"></a>

```python
avro_input: EventarcPipelineInputPayloadFormatAvro
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a>

---

##### `json_input`<sup>Optional</sup> <a name="json_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.jsonInput"></a>

```python
json_input: EventarcPipelineInputPayloadFormatJson
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a>

---

##### `protobuf_input`<sup>Optional</sup> <a name="protobuf_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.protobufInput"></a>

```python
protobuf_input: EventarcPipelineInputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.internalValue"></a>

```python
internal_value: EventarcPipelineInputPayloadFormat
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a>

---


### EventarcPipelineInputPayloadFormatProtobufOutputReference <a name="EventarcPipelineInputPayloadFormatProtobufOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.resetSchemaDefinition">reset_schema_definition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schema_definition` <a name="reset_schema_definition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.resetSchemaDefinition"></a>

```python
def reset_schema_definition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput">schema_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinition">schema_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_definition_input`<sup>Optional</sup> <a name="schema_definition_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput"></a>

```python
schema_definition_input: str
```

- *Type:* str

---

##### `schema_definition`<sup>Required</sup> <a name="schema_definition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinition"></a>

```python
schema_definition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.internalValue"></a>

```python
internal_value: EventarcPipelineInputPayloadFormatProtobuf
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a>

---


### EventarcPipelineLoggingConfigOutputReference <a name="EventarcPipelineLoggingConfigOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.resetLogSeverity">reset_log_severity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_severity` <a name="reset_log_severity" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.resetLogSeverity"></a>

```python
def reset_log_severity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.logSeverityInput">log_severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.logSeverity">log_severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_severity_input`<sup>Optional</sup> <a name="log_severity_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.logSeverityInput"></a>

```python
log_severity_input: str
```

- *Type:* str

---

##### `log_severity`<sup>Required</sup> <a name="log_severity" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.logSeverity"></a>

```python
log_severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: EventarcPipelineLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a>

---


### EventarcPipelineMediationsList <a name="EventarcPipelineMediationsList" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineMediationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventarcPipelineMediationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EventarcPipelineMediations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>]]

---


### EventarcPipelineMediationsOutputReference <a name="EventarcPipelineMediationsOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineMediationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.putTransformation">put_transformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.resetTransformation">reset_transformation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_transformation` <a name="put_transformation" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.putTransformation"></a>

```python
def put_transformation(
  transformation_template: str = None
) -> None
```

###### `transformation_template`<sup>Optional</sup> <a name="transformation_template" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.putTransformation.parameter.transformationTemplate"></a>

- *Type:* str

The CEL expression template to apply to transform messages.

The following CEL extension functions are provided for
use in this CEL expression:

* merge:
  map1.merge(map2) -> map3
* Merges the passed CEL map with the existing CEL map the
  function is applied to.
* If the same key exists in both maps, if the key's value is type
  map both maps are merged else the value from the passed map is
  used.
* denormalize:
  map.denormalize() -> map
* Denormalizes a CEL map such that every value of type map or key
  in the map is expanded to return a single level map.
* The resulting keys are "." separated indices of the map keys.
* For example:
  {
  "a": 1,
  "b": {
  "c": 2,
  "d": 3
  }
  "e": [4, 5]
  }
  .denormalize()
  -> {
  "a": 1,
  "b.c": 2,
  "b.d": 3,
  "e.0": 4,
  "e.1": 5
  }
* setField:
  map.setField(key, value) -> message
* Sets the field of the message with the given key to the
  given value.
* If the field is not present it will be added.
* If the field is present it will be overwritten.
* The key can be a dot separated path to set a field in a nested
  message.
* Key must be of type string.
* Value may be any valid type.
* removeFields:
  map.removeFields([key1, key2, ...]) -> message
* Removes the fields of the map with the given keys.
* The keys can be a dot separated path to remove a field in a
  nested message.
* If a key is not found it will be ignored.
* Keys must be of type string.
* toMap:
  [map1, map2, ...].toMap() -> map
* Converts a CEL list of CEL maps to a single CEL map
* toDestinationPayloadFormat():
  message.data.toDestinationPayloadFormat() -> string or bytes
* Converts the message data to the destination payload format
  specified in Pipeline.Destination.output_payload_format
* This function is meant to be applied to the message.data field.
* If the destination payload format is not set, the function will
  return the message data unchanged.
* toCloudEventJsonWithPayloadFormat:
  message.toCloudEventJsonWithPayloadFormat() -> map
* Converts a message to the corresponding structure of JSON
  format for CloudEvents
* This function applies toDestinationPayloadFormat() to the
  message data. It also sets the corresponding datacontenttype of
  the CloudEvent, as indicated by
  Pipeline.Destination.output_payload_format. If no
  output_payload_format is set it will use the existing
  datacontenttype on the CloudEvent if present, else leave
  datacontenttype absent.
* This function expects that the content of the message will
  adhere to the standard CloudEvent format. If it doesn't then this
  function will fail.
* The result is a CEL map that corresponds to the JSON
  representation of the CloudEvent. To convert that data to a JSON
  string it can be chained with the toJsonString function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/eventarc_pipeline#transformation_template EventarcPipeline#transformation_template}

---

##### `reset_transformation` <a name="reset_transformation" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.resetTransformation"></a>

```python
def reset_transformation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.transformation">transformation</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference">EventarcPipelineMediationsTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.transformationInput">transformation_input</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.transformation"></a>

```python
transformation: EventarcPipelineMediationsTransformationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference">EventarcPipelineMediationsTransformationOutputReference</a>

---

##### `transformation_input`<sup>Optional</sup> <a name="transformation_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.transformationInput"></a>

```python
transformation_input: EventarcPipelineMediationsTransformation
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EventarcPipelineMediations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations">EventarcPipelineMediations</a>]

---


### EventarcPipelineMediationsTransformationOutputReference <a name="EventarcPipelineMediationsTransformationOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.resetTransformationTemplate">reset_transformation_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_transformation_template` <a name="reset_transformation_template" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.resetTransformationTemplate"></a>

```python
def reset_transformation_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.transformationTemplateInput">transformation_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.transformationTemplate">transformation_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transformation_template_input`<sup>Optional</sup> <a name="transformation_template_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.transformationTemplateInput"></a>

```python
transformation_template_input: str
```

- *Type:* str

---

##### `transformation_template`<sup>Required</sup> <a name="transformation_template" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.transformationTemplate"></a>

```python
transformation_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.internalValue"></a>

```python
internal_value: EventarcPipelineMediationsTransformation
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a>

---


### EventarcPipelineRetryPolicyOutputReference <a name="EventarcPipelineRetryPolicyOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineRetryPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMaxAttempts">reset_max_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMaxRetryDelay">reset_max_retry_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMinRetryDelay">reset_min_retry_delay</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_attempts` <a name="reset_max_attempts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMaxAttempts"></a>

```python
def reset_max_attempts() -> None
```

##### `reset_max_retry_delay` <a name="reset_max_retry_delay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMaxRetryDelay"></a>

```python
def reset_max_retry_delay() -> None
```

##### `reset_min_retry_delay` <a name="reset_min_retry_delay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMinRetryDelay"></a>

```python
def reset_min_retry_delay() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxAttemptsInput">max_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxRetryDelayInput">max_retry_delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.minRetryDelayInput">min_retry_delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxRetryDelay">max_retry_delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.minRetryDelay">min_retry_delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_attempts_input`<sup>Optional</sup> <a name="max_attempts_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxAttemptsInput"></a>

```python
max_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retry_delay_input`<sup>Optional</sup> <a name="max_retry_delay_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxRetryDelayInput"></a>

```python
max_retry_delay_input: str
```

- *Type:* str

---

##### `min_retry_delay_input`<sup>Optional</sup> <a name="min_retry_delay_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.minRetryDelayInput"></a>

```python
min_retry_delay_input: str
```

- *Type:* str

---

##### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retry_delay`<sup>Required</sup> <a name="max_retry_delay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxRetryDelay"></a>

```python
max_retry_delay: str
```

- *Type:* str

---

##### `min_retry_delay`<sup>Required</sup> <a name="min_retry_delay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.minRetryDelay"></a>

```python
min_retry_delay: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.internalValue"></a>

```python
internal_value: EventarcPipelineRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a>

---


### EventarcPipelineTimeoutsOutputReference <a name="EventarcPipelineTimeoutsOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import eventarc_pipeline

eventarcPipeline.EventarcPipelineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EventarcPipelineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a>]

---




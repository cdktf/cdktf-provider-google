# `containerAnalysisOccurrence` Submodule <a name="`containerAnalysisOccurrence` Submodule" id="@cdktf/provider-google.containerAnalysisOccurrence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAnalysisOccurrence <a name="ContainerAnalysisOccurrence" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence google_container_analysis_occurrence}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_occurrence

containerAnalysisOccurrence.ContainerAnalysisOccurrence(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attestation: ContainerAnalysisOccurrenceAttestation,
  note_name: str,
  resource_uri: str,
  id: str = None,
  project: str = None,
  remediation: str = None,
  timeouts: ContainerAnalysisOccurrenceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.attestation">attestation</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a></code> | attestation block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.noteName">note_name</a></code> | <code>str</code> | The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID]. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.resourceUri">resource_uri</a></code> | <code>str</code> | Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#id ContainerAnalysisOccurrence#id}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#project ContainerAnalysisOccurrence#project}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.remediation">remediation</a></code> | <code>str</code> | A description of actions that can be taken to remedy the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.attestation"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a>

attestation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#attestation ContainerAnalysisOccurrence#attestation}

---

##### `note_name`<sup>Required</sup> <a name="note_name" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.noteName"></a>

- *Type:* str

The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID].

This field can be used as a
filter in list requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#note_name ContainerAnalysisOccurrence#note_name}

---

##### `resource_uri`<sup>Required</sup> <a name="resource_uri" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.resourceUri"></a>

- *Type:* str

Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#resource_uri ContainerAnalysisOccurrence#resource_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#id ContainerAnalysisOccurrence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#project ContainerAnalysisOccurrence#project}.

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.remediation"></a>

- *Type:* str

A description of actions that can be taken to remedy the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#remediation ContainerAnalysisOccurrence#remediation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#timeouts ContainerAnalysisOccurrence#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putAttestation">put_attestation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetRemediation">reset_remediation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attestation` <a name="put_attestation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putAttestation"></a>

```python
def put_attestation(
  serialized_payload: str,
  signatures: typing.Union[IResolvable, typing.List[ContainerAnalysisOccurrenceAttestationSignatures]]
) -> None
```

###### `serialized_payload`<sup>Required</sup> <a name="serialized_payload" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putAttestation.parameter.serializedPayload"></a>

- *Type:* str

The serialized payload that is verified by one or more signatures. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#serialized_payload ContainerAnalysisOccurrence#serialized_payload}

---

###### `signatures`<sup>Required</sup> <a name="signatures" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putAttestation.parameter.signatures"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>]]

signatures block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#signatures ContainerAnalysisOccurrence#signatures}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#create ContainerAnalysisOccurrence#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#delete ContainerAnalysisOccurrence#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#update ContainerAnalysisOccurrence#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_remediation` <a name="reset_remediation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetRemediation"></a>

```python
def reset_remediation() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerAnalysisOccurrence resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_occurrence

containerAnalysisOccurrence.ContainerAnalysisOccurrence.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_occurrence

containerAnalysisOccurrence.ContainerAnalysisOccurrence.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_occurrence

containerAnalysisOccurrence.ContainerAnalysisOccurrence.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_occurrence

containerAnalysisOccurrence.ContainerAnalysisOccurrence.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerAnalysisOccurrence resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerAnalysisOccurrence to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerAnalysisOccurrence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAnalysisOccurrence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.attestation">attestation</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference">ContainerAnalysisOccurrenceAttestationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference">ContainerAnalysisOccurrenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.attestationInput">attestation_input</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.noteNameInput">note_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.remediationInput">remediation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.resourceUriInput">resource_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.noteName">note_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.remediation">remediation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.resourceUri">resource_uri</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.attestation"></a>

```python
attestation: ContainerAnalysisOccurrenceAttestationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference">ContainerAnalysisOccurrenceAttestationOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.timeouts"></a>

```python
timeouts: ContainerAnalysisOccurrenceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference">ContainerAnalysisOccurrenceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `attestation_input`<sup>Optional</sup> <a name="attestation_input" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.attestationInput"></a>

```python
attestation_input: ContainerAnalysisOccurrenceAttestation
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `note_name_input`<sup>Optional</sup> <a name="note_name_input" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.noteNameInput"></a>

```python
note_name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `remediation_input`<sup>Optional</sup> <a name="remediation_input" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.remediationInput"></a>

```python
remediation_input: str
```

- *Type:* str

---

##### `resource_uri_input`<sup>Optional</sup> <a name="resource_uri_input" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.resourceUriInput"></a>

```python
resource_uri_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerAnalysisOccurrenceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `note_name`<sup>Required</sup> <a name="note_name" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.noteName"></a>

```python
note_name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `remediation`<sup>Required</sup> <a name="remediation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.remediation"></a>

```python
remediation: str
```

- *Type:* str

---

##### `resource_uri`<sup>Required</sup> <a name="resource_uri" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.resourceUri"></a>

```python
resource_uri: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrence.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAnalysisOccurrenceAttestation <a name="ContainerAnalysisOccurrenceAttestation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_occurrence

containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation(
  serialized_payload: str,
  signatures: typing.Union[IResolvable, typing.List[ContainerAnalysisOccurrenceAttestationSignatures]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.property.serializedPayload">serialized_payload</a></code> | <code>str</code> | The serialized payload that is verified by one or more signatures. A base64-encoded string. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.property.signatures">signatures</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>]]</code> | signatures block. |

---

##### `serialized_payload`<sup>Required</sup> <a name="serialized_payload" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.property.serializedPayload"></a>

```python
serialized_payload: str
```

- *Type:* str

The serialized payload that is verified by one or more signatures. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#serialized_payload ContainerAnalysisOccurrence#serialized_payload}

---

##### `signatures`<sup>Required</sup> <a name="signatures" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation.property.signatures"></a>

```python
signatures: typing.Union[IResolvable, typing.List[ContainerAnalysisOccurrenceAttestationSignatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>]]

signatures block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#signatures ContainerAnalysisOccurrence#signatures}

---

### ContainerAnalysisOccurrenceAttestationSignatures <a name="ContainerAnalysisOccurrenceAttestationSignatures" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_occurrence

containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures(
  public_key_id: str,
  signature: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.property.publicKeyId">public_key_id</a></code> | <code>str</code> | The identifier for the public key that verifies this signature. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.property.signature">signature</a></code> | <code>str</code> | The content of the signature, an opaque bytestring. |

---

##### `public_key_id`<sup>Required</sup> <a name="public_key_id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.property.publicKeyId"></a>

```python
public_key_id: str
```

- *Type:* str

The identifier for the public key that verifies this signature.

MUST be an RFC3986 conformant
URI. * When possible, the key id should be an
immutable reference, such as a cryptographic digest.
Examples of valid values:

* OpenPGP V4 public key fingerprint. See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr
  for more details on this scheme.

  * 'openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA'
* RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization):

  * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#public_key_id ContainerAnalysisOccurrence#public_key_id}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures.property.signature"></a>

```python
signature: str
```

- *Type:* str

The content of the signature, an opaque bytestring.

The payload that this signature verifies MUST be
unambiguously provided with the Signature during
verification. A wrapper message might provide the
payload explicitly. Alternatively, a message might
have a canonical serialization that can always be
unambiguously computed to derive the payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#signature ContainerAnalysisOccurrence#signature}

---

### ContainerAnalysisOccurrenceConfig <a name="ContainerAnalysisOccurrenceConfig" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_occurrence

containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attestation: ContainerAnalysisOccurrenceAttestation,
  note_name: str,
  resource_uri: str,
  id: str = None,
  project: str = None,
  remediation: str = None,
  timeouts: ContainerAnalysisOccurrenceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.attestation">attestation</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a></code> | attestation block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.noteName">note_name</a></code> | <code>str</code> | The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID]. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.resourceUri">resource_uri</a></code> | <code>str</code> | Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#id ContainerAnalysisOccurrence#id}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#project ContainerAnalysisOccurrence#project}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.remediation">remediation</a></code> | <code>str</code> | A description of actions that can be taken to remedy the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.attestation"></a>

```python
attestation: ContainerAnalysisOccurrenceAttestation
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a>

attestation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#attestation ContainerAnalysisOccurrence#attestation}

---

##### `note_name`<sup>Required</sup> <a name="note_name" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.noteName"></a>

```python
note_name: str
```

- *Type:* str

The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID].

This field can be used as a
filter in list requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#note_name ContainerAnalysisOccurrence#note_name}

---

##### `resource_uri`<sup>Required</sup> <a name="resource_uri" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.resourceUri"></a>

```python
resource_uri: str
```

- *Type:* str

Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#resource_uri ContainerAnalysisOccurrence#resource_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#id ContainerAnalysisOccurrence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#project ContainerAnalysisOccurrence#project}.

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.remediation"></a>

```python
remediation: str
```

- *Type:* str

A description of actions that can be taken to remedy the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#remediation ContainerAnalysisOccurrence#remediation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceConfig.property.timeouts"></a>

```python
timeouts: ContainerAnalysisOccurrenceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#timeouts ContainerAnalysisOccurrence#timeouts}

---

### ContainerAnalysisOccurrenceTimeouts <a name="ContainerAnalysisOccurrenceTimeouts" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_occurrence

containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#create ContainerAnalysisOccurrence#create}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#delete ContainerAnalysisOccurrence#delete}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#update ContainerAnalysisOccurrence#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#create ContainerAnalysisOccurrence#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#delete ContainerAnalysisOccurrence#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.10.0/docs/resources/container_analysis_occurrence#update ContainerAnalysisOccurrence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAnalysisOccurrenceAttestationOutputReference <a name="ContainerAnalysisOccurrenceAttestationOutputReference" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_occurrence

containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.putSignatures">put_signatures</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_signatures` <a name="put_signatures" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.putSignatures"></a>

```python
def put_signatures(
  value: typing.Union[IResolvable, typing.List[ContainerAnalysisOccurrenceAttestationSignatures]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.putSignatures.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.signatures">signatures</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList">ContainerAnalysisOccurrenceAttestationSignaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayloadInput">serialized_payload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.signaturesInput">signatures_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayload">serialized_payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `signatures`<sup>Required</sup> <a name="signatures" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.signatures"></a>

```python
signatures: ContainerAnalysisOccurrenceAttestationSignaturesList
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList">ContainerAnalysisOccurrenceAttestationSignaturesList</a>

---

##### `serialized_payload_input`<sup>Optional</sup> <a name="serialized_payload_input" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayloadInput"></a>

```python
serialized_payload_input: str
```

- *Type:* str

---

##### `signatures_input`<sup>Optional</sup> <a name="signatures_input" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.signaturesInput"></a>

```python
signatures_input: typing.Union[IResolvable, typing.List[ContainerAnalysisOccurrenceAttestationSignatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>]]

---

##### `serialized_payload`<sup>Required</sup> <a name="serialized_payload" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayload"></a>

```python
serialized_payload: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAnalysisOccurrenceAttestation
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestation">ContainerAnalysisOccurrenceAttestation</a>

---


### ContainerAnalysisOccurrenceAttestationSignaturesList <a name="ContainerAnalysisOccurrenceAttestationSignaturesList" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_occurrence

containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAnalysisOccurrenceAttestationSignaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAnalysisOccurrenceAttestationSignatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>]]

---


### ContainerAnalysisOccurrenceAttestationSignaturesOutputReference <a name="ContainerAnalysisOccurrenceAttestationSignaturesOutputReference" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_occurrence

containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resetSignature">reset_signature</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_signature` <a name="reset_signature" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resetSignature"></a>

```python
def reset_signature() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyIdInput">public_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signatureInput">signature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyId">public_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signature">signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_key_id_input`<sup>Optional</sup> <a name="public_key_id_input" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyIdInput"></a>

```python
public_key_id_input: str
```

- *Type:* str

---

##### `signature_input`<sup>Optional</sup> <a name="signature_input" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signatureInput"></a>

```python
signature_input: str
```

- *Type:* str

---

##### `public_key_id`<sup>Required</sup> <a name="public_key_id" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyId"></a>

```python
public_key_id: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAnalysisOccurrenceAttestationSignatures]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceAttestationSignatures">ContainerAnalysisOccurrenceAttestationSignatures</a>]

---


### ContainerAnalysisOccurrenceTimeoutsOutputReference <a name="ContainerAnalysisOccurrenceTimeoutsOutputReference" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_occurrence

containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAnalysisOccurrenceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAnalysisOccurrence.ContainerAnalysisOccurrenceTimeouts">ContainerAnalysisOccurrenceTimeouts</a>]

---




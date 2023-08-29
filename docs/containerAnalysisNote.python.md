# `google_container_analysis_note`

Refer to the Terraform Registory for docs: [`google_container_analysis_note`](https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note).

# `containerAnalysisNote` Submodule <a name="`containerAnalysisNote` Submodule" id="@cdktf/provider-google.containerAnalysisNote"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAnalysisNote <a name="ContainerAnalysisNote" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note google_container_analysis_note}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note

containerAnalysisNote.ContainerAnalysisNote(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attestation_authority: ContainerAnalysisNoteAttestationAuthority,
  name: str,
  expiration_time: str = None,
  id: str = None,
  long_description: str = None,
  project: str = None,
  related_note_names: typing.List[str] = None,
  related_url: typing.Union[IResolvable, typing.List[ContainerAnalysisNoteRelatedUrl]] = None,
  short_description: str = None,
  timeouts: ContainerAnalysisNoteTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.attestationAuthority">attestation_authority</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a></code> | attestation_authority block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.expirationTime">expiration_time</a></code> | <code>str</code> | Time of expiration for this note. Leave empty if note does not expire. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#id ContainerAnalysisNote#id}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.longDescription">long_description</a></code> | <code>str</code> | A detailed description of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#project ContainerAnalysisNote#project}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.relatedNoteNames">related_note_names</a></code> | <code>typing.List[str]</code> | Names of other notes related to this note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.relatedUrl">related_url</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>]]</code> | related_url block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.shortDescription">short_description</a></code> | <code>str</code> | A one sentence description of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestation_authority`<sup>Required</sup> <a name="attestation_authority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.attestationAuthority"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a>

attestation_authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#attestation_authority ContainerAnalysisNote#attestation_authority}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.name"></a>

- *Type:* str

The name of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#name ContainerAnalysisNote#name}

---

##### `expiration_time`<sup>Optional</sup> <a name="expiration_time" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.expirationTime"></a>

- *Type:* str

Time of expiration for this note. Leave empty if note does not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#expiration_time ContainerAnalysisNote#expiration_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#id ContainerAnalysisNote#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `long_description`<sup>Optional</sup> <a name="long_description" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.longDescription"></a>

- *Type:* str

A detailed description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#long_description ContainerAnalysisNote#long_description}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#project ContainerAnalysisNote#project}.

---

##### `related_note_names`<sup>Optional</sup> <a name="related_note_names" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.relatedNoteNames"></a>

- *Type:* typing.List[str]

Names of other notes related to this note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#related_note_names ContainerAnalysisNote#related_note_names}

---

##### `related_url`<sup>Optional</sup> <a name="related_url" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.relatedUrl"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>]]

related_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#related_url ContainerAnalysisNote#related_url}

---

##### `short_description`<sup>Optional</sup> <a name="short_description" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.shortDescription"></a>

- *Type:* str

A one sentence description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#short_description ContainerAnalysisNote#short_description}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#timeouts ContainerAnalysisNote#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putAttestationAuthority">put_attestation_authority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putRelatedUrl">put_related_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetExpirationTime">reset_expiration_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetLongDescription">reset_long_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetRelatedNoteNames">reset_related_note_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetRelatedUrl">reset_related_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetShortDescription">reset_short_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_attestation_authority` <a name="put_attestation_authority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putAttestationAuthority"></a>

```python
def put_attestation_authority(
  hint: ContainerAnalysisNoteAttestationAuthorityHint
) -> None
```

###### `hint`<sup>Required</sup> <a name="hint" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putAttestationAuthority.parameter.hint"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a>

hint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#hint ContainerAnalysisNote#hint}

---

##### `put_related_url` <a name="put_related_url" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putRelatedUrl"></a>

```python
def put_related_url(
  value: typing.Union[IResolvable, typing.List[ContainerAnalysisNoteRelatedUrl]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putRelatedUrl.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#create ContainerAnalysisNote#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#delete ContainerAnalysisNote#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#update ContainerAnalysisNote#update}.

---

##### `reset_expiration_time` <a name="reset_expiration_time" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetExpirationTime"></a>

```python
def reset_expiration_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_long_description` <a name="reset_long_description" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetLongDescription"></a>

```python
def reset_long_description() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_related_note_names` <a name="reset_related_note_names" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetRelatedNoteNames"></a>

```python
def reset_related_note_names() -> None
```

##### `reset_related_url` <a name="reset_related_url" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetRelatedUrl"></a>

```python
def reset_related_url() -> None
```

##### `reset_short_description` <a name="reset_short_description" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetShortDescription"></a>

```python
def reset_short_description() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note

containerAnalysisNote.ContainerAnalysisNote.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note

containerAnalysisNote.ContainerAnalysisNote.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note

containerAnalysisNote.ContainerAnalysisNote.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.attestationAuthority">attestation_authority</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference">ContainerAnalysisNoteAttestationAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedUrl">related_url</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList">ContainerAnalysisNoteRelatedUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference">ContainerAnalysisNoteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.attestationAuthorityInput">attestation_authority_input</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.expirationTimeInput">expiration_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.longDescriptionInput">long_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedNoteNamesInput">related_note_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedUrlInput">related_url_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.shortDescriptionInput">short_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.expirationTime">expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.longDescription">long_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedNoteNames">related_note_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.shortDescription">short_description</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestation_authority`<sup>Required</sup> <a name="attestation_authority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.attestationAuthority"></a>

```python
attestation_authority: ContainerAnalysisNoteAttestationAuthorityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference">ContainerAnalysisNoteAttestationAuthorityOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `related_url`<sup>Required</sup> <a name="related_url" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedUrl"></a>

```python
related_url: ContainerAnalysisNoteRelatedUrlList
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList">ContainerAnalysisNoteRelatedUrlList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.timeouts"></a>

```python
timeouts: ContainerAnalysisNoteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference">ContainerAnalysisNoteTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `attestation_authority_input`<sup>Optional</sup> <a name="attestation_authority_input" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.attestationAuthorityInput"></a>

```python
attestation_authority_input: ContainerAnalysisNoteAttestationAuthority
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a>

---

##### `expiration_time_input`<sup>Optional</sup> <a name="expiration_time_input" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.expirationTimeInput"></a>

```python
expiration_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `long_description_input`<sup>Optional</sup> <a name="long_description_input" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.longDescriptionInput"></a>

```python
long_description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `related_note_names_input`<sup>Optional</sup> <a name="related_note_names_input" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedNoteNamesInput"></a>

```python
related_note_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `related_url_input`<sup>Optional</sup> <a name="related_url_input" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedUrlInput"></a>

```python
related_url_input: typing.Union[IResolvable, typing.List[ContainerAnalysisNoteRelatedUrl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>]]

---

##### `short_description_input`<sup>Optional</sup> <a name="short_description_input" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.shortDescriptionInput"></a>

```python
short_description_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerAnalysisNoteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a>]

---

##### `expiration_time`<sup>Required</sup> <a name="expiration_time" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `long_description`<sup>Required</sup> <a name="long_description" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.longDescription"></a>

```python
long_description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `related_note_names`<sup>Required</sup> <a name="related_note_names" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedNoteNames"></a>

```python
related_note_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `short_description`<sup>Required</sup> <a name="short_description" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.shortDescription"></a>

```python
short_description: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAnalysisNoteAttestationAuthority <a name="ContainerAnalysisNoteAttestationAuthority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note

containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority(
  hint: ContainerAnalysisNoteAttestationAuthorityHint
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority.property.hint">hint</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a></code> | hint block. |

---

##### `hint`<sup>Required</sup> <a name="hint" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority.property.hint"></a>

```python
hint: ContainerAnalysisNoteAttestationAuthorityHint
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a>

hint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#hint ContainerAnalysisNote#hint}

---

### ContainerAnalysisNoteAttestationAuthorityHint <a name="ContainerAnalysisNoteAttestationAuthorityHint" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note

containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint(
  human_readable_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint.property.humanReadableName">human_readable_name</a></code> | <code>str</code> | The human readable name of this Attestation Authority, for example "qa". |

---

##### `human_readable_name`<sup>Required</sup> <a name="human_readable_name" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint.property.humanReadableName"></a>

```python
human_readable_name: str
```

- *Type:* str

The human readable name of this Attestation Authority, for example "qa".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#human_readable_name ContainerAnalysisNote#human_readable_name}

---

### ContainerAnalysisNoteConfig <a name="ContainerAnalysisNoteConfig" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note

containerAnalysisNote.ContainerAnalysisNoteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attestation_authority: ContainerAnalysisNoteAttestationAuthority,
  name: str,
  expiration_time: str = None,
  id: str = None,
  long_description: str = None,
  project: str = None,
  related_note_names: typing.List[str] = None,
  related_url: typing.Union[IResolvable, typing.List[ContainerAnalysisNoteRelatedUrl]] = None,
  short_description: str = None,
  timeouts: ContainerAnalysisNoteTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.attestationAuthority">attestation_authority</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a></code> | attestation_authority block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.name">name</a></code> | <code>str</code> | The name of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.expirationTime">expiration_time</a></code> | <code>str</code> | Time of expiration for this note. Leave empty if note does not expire. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#id ContainerAnalysisNote#id}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.longDescription">long_description</a></code> | <code>str</code> | A detailed description of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#project ContainerAnalysisNote#project}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.relatedNoteNames">related_note_names</a></code> | <code>typing.List[str]</code> | Names of other notes related to this note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.relatedUrl">related_url</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>]]</code> | related_url block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.shortDescription">short_description</a></code> | <code>str</code> | A one sentence description of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestation_authority`<sup>Required</sup> <a name="attestation_authority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.attestationAuthority"></a>

```python
attestation_authority: ContainerAnalysisNoteAttestationAuthority
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a>

attestation_authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#attestation_authority ContainerAnalysisNote#attestation_authority}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#name ContainerAnalysisNote#name}

---

##### `expiration_time`<sup>Optional</sup> <a name="expiration_time" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

Time of expiration for this note. Leave empty if note does not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#expiration_time ContainerAnalysisNote#expiration_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#id ContainerAnalysisNote#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `long_description`<sup>Optional</sup> <a name="long_description" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.longDescription"></a>

```python
long_description: str
```

- *Type:* str

A detailed description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#long_description ContainerAnalysisNote#long_description}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#project ContainerAnalysisNote#project}.

---

##### `related_note_names`<sup>Optional</sup> <a name="related_note_names" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.relatedNoteNames"></a>

```python
related_note_names: typing.List[str]
```

- *Type:* typing.List[str]

Names of other notes related to this note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#related_note_names ContainerAnalysisNote#related_note_names}

---

##### `related_url`<sup>Optional</sup> <a name="related_url" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.relatedUrl"></a>

```python
related_url: typing.Union[IResolvable, typing.List[ContainerAnalysisNoteRelatedUrl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>]]

related_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#related_url ContainerAnalysisNote#related_url}

---

##### `short_description`<sup>Optional</sup> <a name="short_description" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.shortDescription"></a>

```python
short_description: str
```

- *Type:* str

A one sentence description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#short_description ContainerAnalysisNote#short_description}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.timeouts"></a>

```python
timeouts: ContainerAnalysisNoteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#timeouts ContainerAnalysisNote#timeouts}

---

### ContainerAnalysisNoteRelatedUrl <a name="ContainerAnalysisNoteRelatedUrl" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note

containerAnalysisNote.ContainerAnalysisNoteRelatedUrl(
  url: str,
  label: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.property.url">url</a></code> | <code>str</code> | Specific URL associated with the resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.property.label">label</a></code> | <code>str</code> | Label to describe usage of the URL. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.property.url"></a>

```python
url: str
```

- *Type:* str

Specific URL associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#url ContainerAnalysisNote#url}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.property.label"></a>

```python
label: str
```

- *Type:* str

Label to describe usage of the URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#label ContainerAnalysisNote#label}

---

### ContainerAnalysisNoteTimeouts <a name="ContainerAnalysisNoteTimeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note

containerAnalysisNote.ContainerAnalysisNoteTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#create ContainerAnalysisNote#create}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#delete ContainerAnalysisNote#delete}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#update ContainerAnalysisNote#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#create ContainerAnalysisNote#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#delete ContainerAnalysisNote#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#update ContainerAnalysisNote#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAnalysisNoteAttestationAuthorityHintOutputReference <a name="ContainerAnalysisNoteAttestationAuthorityHintOutputReference" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note

containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableNameInput">human_readable_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableName">human_readable_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `human_readable_name_input`<sup>Optional</sup> <a name="human_readable_name_input" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableNameInput"></a>

```python
human_readable_name_input: str
```

- *Type:* str

---

##### `human_readable_name`<sup>Required</sup> <a name="human_readable_name" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableName"></a>

```python
human_readable_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAnalysisNoteAttestationAuthorityHint
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a>

---


### ContainerAnalysisNoteAttestationAuthorityOutputReference <a name="ContainerAnalysisNoteAttestationAuthorityOutputReference" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note

containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.putHint">put_hint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hint` <a name="put_hint" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.putHint"></a>

```python
def put_hint(
  human_readable_name: str
) -> None
```

###### `human_readable_name`<sup>Required</sup> <a name="human_readable_name" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.putHint.parameter.humanReadableName"></a>

- *Type:* str

The human readable name of this Attestation Authority, for example "qa".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/container_analysis_note#human_readable_name ContainerAnalysisNote#human_readable_name}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.hint">hint</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference">ContainerAnalysisNoteAttestationAuthorityHintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.hintInput">hint_input</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hint`<sup>Required</sup> <a name="hint" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.hint"></a>

```python
hint: ContainerAnalysisNoteAttestationAuthorityHintOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference">ContainerAnalysisNoteAttestationAuthorityHintOutputReference</a>

---

##### `hint_input`<sup>Optional</sup> <a name="hint_input" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.hintInput"></a>

```python
hint_input: ContainerAnalysisNoteAttestationAuthorityHint
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAnalysisNoteAttestationAuthority
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a>

---


### ContainerAnalysisNoteRelatedUrlList <a name="ContainerAnalysisNoteRelatedUrlList" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note

containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAnalysisNoteRelatedUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAnalysisNoteRelatedUrl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>]]

---


### ContainerAnalysisNoteRelatedUrlOutputReference <a name="ContainerAnalysisNoteRelatedUrlOutputReference" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note

containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resetLabel">reset_label</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_label` <a name="reset_label" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAnalysisNoteRelatedUrl]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>]

---


### ContainerAnalysisNoteTimeoutsOutputReference <a name="ContainerAnalysisNoteTimeoutsOutputReference" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_analysis_note

containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAnalysisNoteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a>]

---




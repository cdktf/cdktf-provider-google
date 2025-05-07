# `healthcareDataset` Submodule <a name="`healthcareDataset` Submodule" id="@cdktf/provider-google.healthcareDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareDataset <a name="HealthcareDataset" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset google_healthcare_dataset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dataset

healthcareDataset.HealthcareDataset(
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
  name: str,
  encryption_spec: HealthcareDatasetEncryptionSpec = None,
  id: str = None,
  project: str = None,
  timeouts: HealthcareDatasetTimeouts = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the Dataset. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name for the Dataset. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpec">HealthcareDatasetEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#id HealthcareDataset#id}. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#project HealthcareDataset#project}. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeouts">HealthcareDatasetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | The default timezone used by this dataset. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.location"></a>

- *Type:* str

The location for the Dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#location HealthcareDataset#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.name"></a>

- *Type:* str

The resource name for the Dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#name HealthcareDataset#name}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpec">HealthcareDatasetEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#encryption_spec HealthcareDataset#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#id HealthcareDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#project HealthcareDataset#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeouts">HealthcareDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#timeouts HealthcareDataset#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.Initializer.parameter.timeZone"></a>

- *Type:* str

The default timezone used by this dataset.

Must be a either a valid IANA time zone name such as
"America/New_York" or empty, which defaults to UTC. This is used for parsing times in resources
(e.g., HL7 messages) where no explicit timezone is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#time_zone HealthcareDataset#time_zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  kms_key_name: str = None
) -> None
```

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.putEncryptionSpec.parameter.kmsKeyName"></a>

- *Type:* str

KMS encryption key that is used to secure this dataset and its sub-resources.

The key used for
encryption and the dataset must be in the same location. If empty, the default Google encryption
key will be used to secure this dataset. The format is
projects/{projectId}/locations/{locationId}/keyRings/{keyRingId}/cryptoKeys/{keyId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#kms_key_name HealthcareDataset#kms_key_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#create HealthcareDataset#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#delete HealthcareDataset#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#update HealthcareDataset#update}.

---

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HealthcareDataset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dataset

healthcareDataset.HealthcareDataset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dataset

healthcareDataset.HealthcareDataset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dataset

healthcareDataset.HealthcareDataset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dataset

healthcareDataset.HealthcareDataset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HealthcareDataset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HealthcareDataset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HealthcareDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HealthcareDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference">HealthcareDatasetEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference">HealthcareDatasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpec">HealthcareDatasetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeouts">HealthcareDatasetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.encryptionSpec"></a>

```python
encryption_spec: HealthcareDatasetEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference">HealthcareDatasetEncryptionSpecOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.timeouts"></a>

```python
timeouts: HealthcareDatasetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference">HealthcareDatasetTimeoutsOutputReference</a>

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.encryptionSpecInput"></a>

```python
encryption_spec_input: HealthcareDatasetEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpec">HealthcareDatasetEncryptionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, HealthcareDatasetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeouts">HealthcareDatasetTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.healthcareDataset.HealthcareDataset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareDatasetConfig <a name="HealthcareDatasetConfig" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dataset

healthcareDataset.HealthcareDatasetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  encryption_spec: HealthcareDatasetEncryptionSpec = None,
  id: str = None,
  project: str = None,
  timeouts: HealthcareDatasetTimeouts = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.location">location</a></code> | <code>str</code> | The location for the Dataset. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.name">name</a></code> | <code>str</code> | The resource name for the Dataset. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpec">HealthcareDatasetEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#id HealthcareDataset#id}. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#project HealthcareDataset#project}. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeouts">HealthcareDatasetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.timeZone">time_zone</a></code> | <code>str</code> | The default timezone used by this dataset. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the Dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#location HealthcareDataset#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name for the Dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#name HealthcareDataset#name}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.encryptionSpec"></a>

```python
encryption_spec: HealthcareDatasetEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpec">HealthcareDatasetEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#encryption_spec HealthcareDataset#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#id HealthcareDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#project HealthcareDataset#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.timeouts"></a>

```python
timeouts: HealthcareDatasetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeouts">HealthcareDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#timeouts HealthcareDataset#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The default timezone used by this dataset.

Must be a either a valid IANA time zone name such as
"America/New_York" or empty, which defaults to UTC. This is used for parsing times in resources
(e.g., HL7 messages) where no explicit timezone is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#time_zone HealthcareDataset#time_zone}

---

### HealthcareDatasetEncryptionSpec <a name="HealthcareDatasetEncryptionSpec" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dataset

healthcareDataset.HealthcareDatasetEncryptionSpec(
  kms_key_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpec.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | KMS encryption key that is used to secure this dataset and its sub-resources. |

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpec.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

KMS encryption key that is used to secure this dataset and its sub-resources.

The key used for
encryption and the dataset must be in the same location. If empty, the default Google encryption
key will be used to secure this dataset. The format is
projects/{projectId}/locations/{locationId}/keyRings/{keyRingId}/cryptoKeys/{keyId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#kms_key_name HealthcareDataset#kms_key_name}

---

### HealthcareDatasetTimeouts <a name="HealthcareDatasetTimeouts" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dataset

healthcareDataset.HealthcareDatasetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#create HealthcareDataset#create}. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#delete HealthcareDataset#delete}. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#update HealthcareDataset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#create HealthcareDataset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#delete HealthcareDataset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/healthcare_dataset#update HealthcareDataset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareDatasetEncryptionSpecOutputReference <a name="HealthcareDatasetEncryptionSpecOutputReference" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dataset

healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpec">HealthcareDatasetEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: HealthcareDatasetEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetEncryptionSpec">HealthcareDatasetEncryptionSpec</a>

---


### HealthcareDatasetTimeoutsOutputReference <a name="HealthcareDatasetTimeoutsOutputReference" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dataset

healthcareDataset.HealthcareDatasetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeouts">HealthcareDatasetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HealthcareDatasetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.healthcareDataset.HealthcareDatasetTimeouts">HealthcareDatasetTimeouts</a>]

---




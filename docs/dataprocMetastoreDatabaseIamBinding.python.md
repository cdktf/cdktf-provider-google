# `dataprocMetastoreDatabaseIamBinding` Submodule <a name="`dataprocMetastoreDatabaseIamBinding` Submodule" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocMetastoreDatabaseIamBinding <a name="DataprocMetastoreDatabaseIamBinding" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding google_dataproc_metastore_database_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_metastore_database_iam_binding

dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  members: typing.List[str],
  role: str,
  service_id: str,
  condition: DataprocMetastoreDatabaseIamBindingCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#database DataprocMetastoreDatabaseIamBinding#database}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#members DataprocMetastoreDatabaseIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#role DataprocMetastoreDatabaseIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#service_id DataprocMetastoreDatabaseIamBinding#service_id}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingCondition">DataprocMetastoreDatabaseIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#id DataprocMetastoreDatabaseIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#location DataprocMetastoreDatabaseIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#project DataprocMetastoreDatabaseIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#database DataprocMetastoreDatabaseIamBinding#database}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#members DataprocMetastoreDatabaseIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#role DataprocMetastoreDatabaseIamBinding#role}.

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.serviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#service_id DataprocMetastoreDatabaseIamBinding#service_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingCondition">DataprocMetastoreDatabaseIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#condition DataprocMetastoreDatabaseIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#id DataprocMetastoreDatabaseIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#location DataprocMetastoreDatabaseIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#project DataprocMetastoreDatabaseIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#expression DataprocMetastoreDatabaseIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#title DataprocMetastoreDatabaseIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#description DataprocMetastoreDatabaseIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataprocMetastoreDatabaseIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dataproc_metastore_database_iam_binding

dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dataproc_metastore_database_iam_binding

dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dataproc_metastore_database_iam_binding

dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dataproc_metastore_database_iam_binding

dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataprocMetastoreDatabaseIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataprocMetastoreDatabaseIamBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataprocMetastoreDatabaseIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataprocMetastoreDatabaseIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference">DataprocMetastoreDatabaseIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingCondition">DataprocMetastoreDatabaseIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.condition"></a>

```python
condition: DataprocMetastoreDatabaseIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference">DataprocMetastoreDatabaseIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.conditionInput"></a>

```python
condition_input: DataprocMetastoreDatabaseIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingCondition">DataprocMetastoreDatabaseIamBindingCondition</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocMetastoreDatabaseIamBindingCondition <a name="DataprocMetastoreDatabaseIamBindingCondition" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_metastore_database_iam_binding

dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#expression DataprocMetastoreDatabaseIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#title DataprocMetastoreDatabaseIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#description DataprocMetastoreDatabaseIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#expression DataprocMetastoreDatabaseIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#title DataprocMetastoreDatabaseIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#description DataprocMetastoreDatabaseIamBinding#description}.

---

### DataprocMetastoreDatabaseIamBindingConfig <a name="DataprocMetastoreDatabaseIamBindingConfig" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_metastore_database_iam_binding

dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  members: typing.List[str],
  role: str,
  service_id: str,
  condition: DataprocMetastoreDatabaseIamBindingCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#database DataprocMetastoreDatabaseIamBinding#database}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#members DataprocMetastoreDatabaseIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#role DataprocMetastoreDatabaseIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.serviceId">service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#service_id DataprocMetastoreDatabaseIamBinding#service_id}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingCondition">DataprocMetastoreDatabaseIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#id DataprocMetastoreDatabaseIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#location DataprocMetastoreDatabaseIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#project DataprocMetastoreDatabaseIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#database DataprocMetastoreDatabaseIamBinding#database}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#members DataprocMetastoreDatabaseIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#role DataprocMetastoreDatabaseIamBinding#role}.

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#service_id DataprocMetastoreDatabaseIamBinding#service_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.condition"></a>

```python
condition: DataprocMetastoreDatabaseIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingCondition">DataprocMetastoreDatabaseIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#condition DataprocMetastoreDatabaseIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#id DataprocMetastoreDatabaseIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#location DataprocMetastoreDatabaseIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_database_iam_binding#project DataprocMetastoreDatabaseIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocMetastoreDatabaseIamBindingConditionOutputReference <a name="DataprocMetastoreDatabaseIamBindingConditionOutputReference" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_metastore_database_iam_binding

dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingCondition">DataprocMetastoreDatabaseIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataprocMetastoreDatabaseIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamBinding.DataprocMetastoreDatabaseIamBindingCondition">DataprocMetastoreDatabaseIamBindingCondition</a>

---




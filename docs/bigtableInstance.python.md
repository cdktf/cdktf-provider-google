# `bigtableInstance` Submodule <a name="`bigtableInstance` Submodule" id="@cdktf/provider-google.bigtableInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableInstance <a name="BigtableInstance" id="@cdktf/provider-google.bigtableInstance.BigtableInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance google_bigtable_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_instance

bigtableInstance.BigtableInstance(
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
  cluster: typing.Union[IResolvable, typing.List[BigtableInstanceCluster]] = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  instance_type: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: BigtableInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.cluster">cluster</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>]]</code> | cluster block. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When the field is set to true or unset in Terraform state, a terraform apply or terraform destroy that would delete the instance will fail. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human-readable display name of the Bigtable instance. Defaults to the instance name. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When deleting a BigTable instance, this boolean option will delete all backups within the instance. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#id BigtableInstance#id}. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | The instance type to create. One of "DEVELOPMENT" or "PRODUCTION". Defaults to "PRODUCTION". |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A mapping of labels to assign to the resource. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeouts">BigtableInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.name"></a>

- *Type:* str

The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance.

Must be 6-33 characters and must only contain hyphens, lowercase letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#name BigtableInstance#name}

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.cluster"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>]]

cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#cluster BigtableInstance#cluster}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When the field is set to true or unset in Terraform state, a terraform apply or terraform destroy that would delete the instance will fail.

When the field is set to false, deleting the instance is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#deletion_protection BigtableInstance#deletion_protection}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.displayName"></a>

- *Type:* str

The human-readable display name of the Bigtable instance. Defaults to the instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#display_name BigtableInstance#display_name}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When deleting a BigTable instance, this boolean option will delete all backups within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#force_destroy BigtableInstance#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#id BigtableInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.instanceType"></a>

- *Type:* str

The instance type to create. One of "DEVELOPMENT" or "PRODUCTION". Defaults to "PRODUCTION".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#instance_type BigtableInstance#instance_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A mapping of labels to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#labels BigtableInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#project BigtableInstance#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeouts">BigtableInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#timeouts BigtableInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.putCluster">put_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetCluster">reset_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cluster` <a name="put_cluster" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.putCluster"></a>

```python
def put_cluster(
  value: typing.Union[IResolvable, typing.List[BigtableInstanceCluster]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.putCluster.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#create BigtableInstance#create}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#read BigtableInstance#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#update BigtableInstance#update}.

---

##### `reset_cluster` <a name="reset_cluster" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetCluster"></a>

```python
def reset_cluster() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BigtableInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import bigtable_instance

bigtableInstance.BigtableInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import bigtable_instance

bigtableInstance.BigtableInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import bigtable_instance

bigtableInstance.BigtableInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import bigtable_instance

bigtableInstance.BigtableInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BigtableInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigtableInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigtableInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigtableInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.cluster">cluster</a></code> | <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList">BigtableInstanceClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference">BigtableInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.clusterInput">cluster_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeouts">BigtableInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.cluster"></a>

```python
cluster: BigtableInstanceClusterList
```

- *Type:* <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList">BigtableInstanceClusterList</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.timeouts"></a>

```python
timeouts: BigtableInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference">BigtableInstanceTimeoutsOutputReference</a>

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.clusterInput"></a>

```python
cluster_input: typing.Union[IResolvable, typing.List[BigtableInstanceCluster]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>]]

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BigtableInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeouts">BigtableInstanceTimeouts</a>]

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableInstanceCluster <a name="BigtableInstanceCluster" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_instance

bigtableInstance.BigtableInstanceCluster(
  cluster_id: str,
  autoscaling_config: BigtableInstanceClusterAutoscalingConfig = None,
  kms_key_name: str = None,
  node_scaling_factor: str = None,
  num_nodes: typing.Union[int, float] = None,
  storage_type: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the Cloud Bigtable cluster. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.autoscalingConfig">autoscaling_config</a></code> | <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable cluster. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.nodeScalingFactor">node_scaling_factor</a></code> | <code>str</code> | The node scaling factor of this cluster. One of "NodeScalingFactor1X" or "NodeScalingFactor2X". Defaults to "NodeScalingFactor1X". |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.numNodes">num_nodes</a></code> | <code>typing.Union[int, float]</code> | The number of nodes in the cluster. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.storageType">storage_type</a></code> | <code>str</code> | The storage type to use. One of "SSD" or "HDD". Defaults to "SSD". |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.zone">zone</a></code> | <code>str</code> | The zone to create the Cloud Bigtable cluster in. |

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The ID of the Cloud Bigtable cluster.

Must be 6-30 characters and must only contain hyphens, lowercase letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#cluster_id BigtableInstance#cluster_id}

---

##### `autoscaling_config`<sup>Optional</sup> <a name="autoscaling_config" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.autoscalingConfig"></a>

```python
autoscaling_config: BigtableInstanceClusterAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#autoscaling_config BigtableInstance#autoscaling_config}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable cluster.

The requirements for this key are: 1) The Cloud Bigtable service account associated with the project that contains this cluster must be granted the cloudkms.cryptoKeyEncrypterDecrypter role on the CMEK key. 2) Only regional keys can be used and the region of the CMEK key must match the region of the cluster. 3) All clusters within an instance must use the same CMEK key. Values are of the form projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#kms_key_name BigtableInstance#kms_key_name}

---

##### `node_scaling_factor`<sup>Optional</sup> <a name="node_scaling_factor" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.nodeScalingFactor"></a>

```python
node_scaling_factor: str
```

- *Type:* str

The node scaling factor of this cluster. One of "NodeScalingFactor1X" or "NodeScalingFactor2X". Defaults to "NodeScalingFactor1X".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#node_scaling_factor BigtableInstance#node_scaling_factor}

---

##### `num_nodes`<sup>Optional</sup> <a name="num_nodes" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.numNodes"></a>

```python
num_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes in the cluster.

If no value is set, Cloud Bigtable automatically allocates nodes based on your data footprint and optimized for 50% storage utilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#num_nodes BigtableInstance#num_nodes}

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

The storage type to use. One of "SSD" or "HDD". Defaults to "SSD".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#storage_type BigtableInstance#storage_type}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.zone"></a>

```python
zone: str
```

- *Type:* str

The zone to create the Cloud Bigtable cluster in.

Each cluster must have a different zone in the same region. Zones that support Bigtable instances are noted on the Cloud Bigtable locations page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#zone BigtableInstance#zone}

---

### BigtableInstanceClusterAutoscalingConfig <a name="BigtableInstanceClusterAutoscalingConfig" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_instance

bigtableInstance.BigtableInstanceClusterAutoscalingConfig(
  cpu_target: typing.Union[int, float],
  max_nodes: typing.Union[int, float],
  min_nodes: typing.Union[int, float],
  storage_target: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.cpuTarget">cpu_target</a></code> | <code>typing.Union[int, float]</code> | The target CPU utilization for autoscaling. Value must be between 10 and 80. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | The maximum number of nodes for autoscaling. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | The minimum number of nodes for autoscaling. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.storageTarget">storage_target</a></code> | <code>typing.Union[int, float]</code> | The target storage utilization for autoscaling, in GB, for each node in a cluster. |

---

##### `cpu_target`<sup>Required</sup> <a name="cpu_target" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.cpuTarget"></a>

```python
cpu_target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target CPU utilization for autoscaling. Value must be between 10 and 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#cpu_target BigtableInstance#cpu_target}

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of nodes for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#max_nodes BigtableInstance#max_nodes}

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of nodes for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#min_nodes BigtableInstance#min_nodes}

---

##### `storage_target`<sup>Optional</sup> <a name="storage_target" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.storageTarget"></a>

```python
storage_target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target storage utilization for autoscaling, in GB, for each node in a cluster.

This number is limited between 2560 (2.5TiB) and 5120 (5TiB) for a SSD cluster and between 8192 (8TiB) and 16384 (16 TiB) for an HDD cluster. If not set, whatever is already set for the cluster will not change, or if the cluster is just being created, it will use the default value of 2560 for SSD clusters and 8192 for HDD clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#storage_target BigtableInstance#storage_target}

---

### BigtableInstanceConfig <a name="BigtableInstanceConfig" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_instance

bigtableInstance.BigtableInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  cluster: typing.Union[IResolvable, typing.List[BigtableInstanceCluster]] = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  instance_type: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: BigtableInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.name">name</a></code> | <code>str</code> | The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.cluster">cluster</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>]]</code> | cluster block. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When the field is set to true or unset in Terraform state, a terraform apply or terraform destroy that would delete the instance will fail. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.displayName">display_name</a></code> | <code>str</code> | The human-readable display name of the Bigtable instance. Defaults to the instance name. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When deleting a BigTable instance, this boolean option will delete all backups within the instance. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#id BigtableInstance#id}. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.instanceType">instance_type</a></code> | <code>str</code> | The instance type to create. One of "DEVELOPMENT" or "PRODUCTION". Defaults to "PRODUCTION". |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A mapping of labels to assign to the resource. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeouts">BigtableInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance.

Must be 6-33 characters and must only contain hyphens, lowercase letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#name BigtableInstance#name}

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.cluster"></a>

```python
cluster: typing.Union[IResolvable, typing.List[BigtableInstanceCluster]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>]]

cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#cluster BigtableInstance#cluster}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When the field is set to true or unset in Terraform state, a terraform apply or terraform destroy that would delete the instance will fail.

When the field is set to false, deleting the instance is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#deletion_protection BigtableInstance#deletion_protection}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable display name of the Bigtable instance. Defaults to the instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#display_name BigtableInstance#display_name}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When deleting a BigTable instance, this boolean option will delete all backups within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#force_destroy BigtableInstance#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#id BigtableInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

The instance type to create. One of "DEVELOPMENT" or "PRODUCTION". Defaults to "PRODUCTION".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#instance_type BigtableInstance#instance_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of labels to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#labels BigtableInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#project BigtableInstance#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.timeouts"></a>

```python
timeouts: BigtableInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeouts">BigtableInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#timeouts BigtableInstance#timeouts}

---

### BigtableInstanceTimeouts <a name="BigtableInstanceTimeouts" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_instance

bigtableInstance.BigtableInstanceTimeouts(
  create: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#create BigtableInstance#create}. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#read BigtableInstance#read}. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#update BigtableInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#create BigtableInstance#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#read BigtableInstance#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#update BigtableInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableInstanceClusterAutoscalingConfigOutputReference <a name="BigtableInstanceClusterAutoscalingConfigOutputReference" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_instance

bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.resetStorageTarget">reset_storage_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_target` <a name="reset_storage_target" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.resetStorageTarget"></a>

```python
def reset_storage_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.cpuTargetInput">cpu_target_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.maxNodesInput">max_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.minNodesInput">min_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.storageTargetInput">storage_target_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.cpuTarget">cpu_target</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.storageTarget">storage_target</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_target_input`<sup>Optional</sup> <a name="cpu_target_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.cpuTargetInput"></a>

```python
cpu_target_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_nodes_input`<sup>Optional</sup> <a name="max_nodes_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.maxNodesInput"></a>

```python
max_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes_input`<sup>Optional</sup> <a name="min_nodes_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.minNodesInput"></a>

```python
min_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_target_input`<sup>Optional</sup> <a name="storage_target_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.storageTargetInput"></a>

```python
storage_target_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_target`<sup>Required</sup> <a name="cpu_target" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.cpuTarget"></a>

```python
cpu_target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_target`<sup>Required</sup> <a name="storage_target" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.storageTarget"></a>

```python
storage_target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: BigtableInstanceClusterAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a>

---


### BigtableInstanceClusterList <a name="BigtableInstanceClusterList" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_instance

bigtableInstance.BigtableInstanceClusterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BigtableInstanceClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BigtableInstanceCluster]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>]]

---


### BigtableInstanceClusterOutputReference <a name="BigtableInstanceClusterOutputReference" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_instance

bigtableInstance.BigtableInstanceClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.putAutoscalingConfig">put_autoscaling_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetAutoscalingConfig">reset_autoscaling_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetNodeScalingFactor">reset_node_scaling_factor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetNumNodes">reset_num_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetStorageType">reset_storage_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetZone">reset_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscaling_config` <a name="put_autoscaling_config" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.putAutoscalingConfig"></a>

```python
def put_autoscaling_config(
  cpu_target: typing.Union[int, float],
  max_nodes: typing.Union[int, float],
  min_nodes: typing.Union[int, float],
  storage_target: typing.Union[int, float] = None
) -> None
```

###### `cpu_target`<sup>Required</sup> <a name="cpu_target" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.putAutoscalingConfig.parameter.cpuTarget"></a>

- *Type:* typing.Union[int, float]

The target CPU utilization for autoscaling. Value must be between 10 and 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#cpu_target BigtableInstance#cpu_target}

---

###### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.putAutoscalingConfig.parameter.maxNodes"></a>

- *Type:* typing.Union[int, float]

The maximum number of nodes for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#max_nodes BigtableInstance#max_nodes}

---

###### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.putAutoscalingConfig.parameter.minNodes"></a>

- *Type:* typing.Union[int, float]

The minimum number of nodes for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#min_nodes BigtableInstance#min_nodes}

---

###### `storage_target`<sup>Optional</sup> <a name="storage_target" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.putAutoscalingConfig.parameter.storageTarget"></a>

- *Type:* typing.Union[int, float]

The target storage utilization for autoscaling, in GB, for each node in a cluster.

This number is limited between 2560 (2.5TiB) and 5120 (5TiB) for a SSD cluster and between 8192 (8TiB) and 16384 (16 TiB) for an HDD cluster. If not set, whatever is already set for the cluster will not change, or if the cluster is just being created, it will use the default value of 2560 for SSD clusters and 8192 for HDD clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/bigtable_instance#storage_target BigtableInstance#storage_target}

---

##### `reset_autoscaling_config` <a name="reset_autoscaling_config" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetAutoscalingConfig"></a>

```python
def reset_autoscaling_config() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_node_scaling_factor` <a name="reset_node_scaling_factor" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetNodeScalingFactor"></a>

```python
def reset_node_scaling_factor() -> None
```

##### `reset_num_nodes` <a name="reset_num_nodes" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetNumNodes"></a>

```python
def reset_num_nodes() -> None
```

##### `reset_storage_type` <a name="reset_storage_type" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetStorageType"></a>

```python
def reset_storage_type() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetZone"></a>

```python
def reset_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.autoscalingConfig">autoscaling_config</a></code> | <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference">BigtableInstanceClusterAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.autoscalingConfigInput">autoscaling_config_input</a></code> | <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.nodeScalingFactorInput">node_scaling_factor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.numNodesInput">num_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.nodeScalingFactor">node_scaling_factor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.numNodes">num_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscaling_config`<sup>Required</sup> <a name="autoscaling_config" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.autoscalingConfig"></a>

```python
autoscaling_config: BigtableInstanceClusterAutoscalingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference">BigtableInstanceClusterAutoscalingConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `autoscaling_config_input`<sup>Optional</sup> <a name="autoscaling_config_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.autoscalingConfigInput"></a>

```python
autoscaling_config_input: BigtableInstanceClusterAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `node_scaling_factor_input`<sup>Optional</sup> <a name="node_scaling_factor_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.nodeScalingFactorInput"></a>

```python
node_scaling_factor_input: str
```

- *Type:* str

---

##### `num_nodes_input`<sup>Optional</sup> <a name="num_nodes_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.numNodesInput"></a>

```python
num_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `node_scaling_factor`<sup>Required</sup> <a name="node_scaling_factor" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.nodeScalingFactor"></a>

```python
node_scaling_factor: str
```

- *Type:* str

---

##### `num_nodes`<sup>Required</sup> <a name="num_nodes" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.numNodes"></a>

```python
num_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigtableInstanceCluster]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>]

---


### BigtableInstanceTimeoutsOutputReference <a name="BigtableInstanceTimeoutsOutputReference" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_instance

bigtableInstance.BigtableInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeouts">BigtableInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigtableInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceTimeouts">BigtableInstanceTimeouts</a>]

---




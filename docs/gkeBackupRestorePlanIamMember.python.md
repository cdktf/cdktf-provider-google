# `google_gke_backup_restore_plan_iam_member`

Refer to the Terraform Registory for docs: [`google_gke_backup_restore_plan_iam_member`](https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member).

# `gkeBackupRestorePlanIamMember` Submodule <a name="`gkeBackupRestorePlanIamMember` Submodule" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeBackupRestorePlanIamMember <a name="GkeBackupRestorePlanIamMember" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member google_gke_backup_restore_plan_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan_iam_member

gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  member: str,
  name: str,
  role: str,
  condition: GkeBackupRestorePlanIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#member GkeBackupRestorePlanIamMember#member}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#name GkeBackupRestorePlanIamMember#name}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#role GkeBackupRestorePlanIamMember#role}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition">GkeBackupRestorePlanIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#id GkeBackupRestorePlanIamMember#id}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#location GkeBackupRestorePlanIamMember#location}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#project GkeBackupRestorePlanIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#member GkeBackupRestorePlanIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#name GkeBackupRestorePlanIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#role GkeBackupRestorePlanIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition">GkeBackupRestorePlanIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#condition GkeBackupRestorePlanIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#id GkeBackupRestorePlanIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#location GkeBackupRestorePlanIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#project GkeBackupRestorePlanIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#expression GkeBackupRestorePlanIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#title GkeBackupRestorePlanIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#description GkeBackupRestorePlanIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan_iam_member

gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan_iam_member

gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan_iam_member

gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference">GkeBackupRestorePlanIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition">GkeBackupRestorePlanIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.condition"></a>

```python
condition: GkeBackupRestorePlanIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference">GkeBackupRestorePlanIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.conditionInput"></a>

```python
condition_input: GkeBackupRestorePlanIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition">GkeBackupRestorePlanIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GkeBackupRestorePlanIamMemberCondition <a name="GkeBackupRestorePlanIamMemberCondition" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan_iam_member

gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#expression GkeBackupRestorePlanIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#title GkeBackupRestorePlanIamMember#title}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#description GkeBackupRestorePlanIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#expression GkeBackupRestorePlanIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#title GkeBackupRestorePlanIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#description GkeBackupRestorePlanIamMember#description}.

---

### GkeBackupRestorePlanIamMemberConfig <a name="GkeBackupRestorePlanIamMemberConfig" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan_iam_member

gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  member: str,
  name: str,
  role: str,
  condition: GkeBackupRestorePlanIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#member GkeBackupRestorePlanIamMember#member}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#name GkeBackupRestorePlanIamMember#name}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#role GkeBackupRestorePlanIamMember#role}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition">GkeBackupRestorePlanIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#id GkeBackupRestorePlanIamMember#id}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#location GkeBackupRestorePlanIamMember#location}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#project GkeBackupRestorePlanIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#member GkeBackupRestorePlanIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#name GkeBackupRestorePlanIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#role GkeBackupRestorePlanIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.condition"></a>

```python
condition: GkeBackupRestorePlanIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition">GkeBackupRestorePlanIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#condition GkeBackupRestorePlanIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#id GkeBackupRestorePlanIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#location GkeBackupRestorePlanIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/gke_backup_restore_plan_iam_member#project GkeBackupRestorePlanIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeBackupRestorePlanIamMemberConditionOutputReference <a name="GkeBackupRestorePlanIamMemberConditionOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_backup_restore_plan_iam_member

gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition">GkeBackupRestorePlanIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: GkeBackupRestorePlanIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamMember.GkeBackupRestorePlanIamMemberCondition">GkeBackupRestorePlanIamMemberCondition</a>

---




# `google_dataproc_metastore_service_iam_member`

Refer to the Terraform Registory for docs: [`google_dataproc_metastore_service_iam_member`](https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member).

# `dataprocMetastoreServiceIamMember` Submodule <a name="`dataprocMetastoreServiceIamMember` Submodule" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocMetastoreServiceIamMember <a name="DataprocMetastoreServiceIamMember" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member google_dataproc_metastore_service_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_metastore_service_iam_member

dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember(
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
  role: str,
  service_id: str,
  condition: DataprocMetastoreServiceIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#member DataprocMetastoreServiceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#role DataprocMetastoreServiceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#service_id DataprocMetastoreServiceIamMember#service_id}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberCondition">DataprocMetastoreServiceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#id DataprocMetastoreServiceIamMember#id}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#location DataprocMetastoreServiceIamMember#location}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#project DataprocMetastoreServiceIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#member DataprocMetastoreServiceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#role DataprocMetastoreServiceIamMember#role}.

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.serviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#service_id DataprocMetastoreServiceIamMember#service_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberCondition">DataprocMetastoreServiceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#condition DataprocMetastoreServiceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#id DataprocMetastoreServiceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#location DataprocMetastoreServiceIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#project DataprocMetastoreServiceIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#expression DataprocMetastoreServiceIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#title DataprocMetastoreServiceIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#description DataprocMetastoreServiceIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dataproc_metastore_service_iam_member

dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dataproc_metastore_service_iam_member

dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dataproc_metastore_service_iam_member

dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference">DataprocMetastoreServiceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberCondition">DataprocMetastoreServiceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.condition"></a>

```python
condition: DataprocMetastoreServiceIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference">DataprocMetastoreServiceIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.conditionInput"></a>

```python
condition_input: DataprocMetastoreServiceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberCondition">DataprocMetastoreServiceIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocMetastoreServiceIamMemberCondition <a name="DataprocMetastoreServiceIamMemberCondition" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_metastore_service_iam_member

dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#expression DataprocMetastoreServiceIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#title DataprocMetastoreServiceIamMember#title}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#description DataprocMetastoreServiceIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#expression DataprocMetastoreServiceIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#title DataprocMetastoreServiceIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#description DataprocMetastoreServiceIamMember#description}.

---

### DataprocMetastoreServiceIamMemberConfig <a name="DataprocMetastoreServiceIamMemberConfig" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_metastore_service_iam_member

dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  member: str,
  role: str,
  service_id: str,
  condition: DataprocMetastoreServiceIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#member DataprocMetastoreServiceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#role DataprocMetastoreServiceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.serviceId">service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#service_id DataprocMetastoreServiceIamMember#service_id}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberCondition">DataprocMetastoreServiceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#id DataprocMetastoreServiceIamMember#id}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#location DataprocMetastoreServiceIamMember#location}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#project DataprocMetastoreServiceIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#member DataprocMetastoreServiceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#role DataprocMetastoreServiceIamMember#role}.

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#service_id DataprocMetastoreServiceIamMember#service_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.condition"></a>

```python
condition: DataprocMetastoreServiceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberCondition">DataprocMetastoreServiceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#condition DataprocMetastoreServiceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#id DataprocMetastoreServiceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#location DataprocMetastoreServiceIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_metastore_service_iam_member#project DataprocMetastoreServiceIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocMetastoreServiceIamMemberConditionOutputReference <a name="DataprocMetastoreServiceIamMemberConditionOutputReference" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_metastore_service_iam_member

dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberCondition">DataprocMetastoreServiceIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataprocMetastoreServiceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreServiceIamMember.DataprocMetastoreServiceIamMemberCondition">DataprocMetastoreServiceIamMemberCondition</a>

---




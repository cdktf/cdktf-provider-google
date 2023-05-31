# `google_dataproc_autoscaling_policy_iam_member`

Refer to the Terraform Registory for docs: [`google_dataproc_autoscaling_policy_iam_member`](https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member).

# `dataprocAutoscalingPolicyIamMember` Submodule <a name="`dataprocAutoscalingPolicyIamMember` Submodule" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocAutoscalingPolicyIamMember <a name="DataprocAutoscalingPolicyIamMember" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member google_dataproc_autoscaling_policy_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy_iam_member

dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember(
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
  policy_id: str,
  role: str,
  condition: DataprocAutoscalingPolicyIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#member DataprocAutoscalingPolicyIamMember#member}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#policy_id DataprocAutoscalingPolicyIamMember#policy_id}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#role DataprocAutoscalingPolicyIamMember#role}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberCondition">DataprocAutoscalingPolicyIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#id DataprocAutoscalingPolicyIamMember#id}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#location DataprocAutoscalingPolicyIamMember#location}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#project DataprocAutoscalingPolicyIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#member DataprocAutoscalingPolicyIamMember#member}.

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.policyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#policy_id DataprocAutoscalingPolicyIamMember#policy_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#role DataprocAutoscalingPolicyIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberCondition">DataprocAutoscalingPolicyIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#condition DataprocAutoscalingPolicyIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#id DataprocAutoscalingPolicyIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#location DataprocAutoscalingPolicyIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#project DataprocAutoscalingPolicyIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#expression DataprocAutoscalingPolicyIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#title DataprocAutoscalingPolicyIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#description DataprocAutoscalingPolicyIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy_iam_member

dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy_iam_member

dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy_iam_member

dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference">DataprocAutoscalingPolicyIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberCondition">DataprocAutoscalingPolicyIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.condition"></a>

```python
condition: DataprocAutoscalingPolicyIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference">DataprocAutoscalingPolicyIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.conditionInput"></a>

```python
condition_input: DataprocAutoscalingPolicyIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberCondition">DataprocAutoscalingPolicyIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocAutoscalingPolicyIamMemberCondition <a name="DataprocAutoscalingPolicyIamMemberCondition" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy_iam_member

dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#expression DataprocAutoscalingPolicyIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#title DataprocAutoscalingPolicyIamMember#title}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#description DataprocAutoscalingPolicyIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#expression DataprocAutoscalingPolicyIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#title DataprocAutoscalingPolicyIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#description DataprocAutoscalingPolicyIamMember#description}.

---

### DataprocAutoscalingPolicyIamMemberConfig <a name="DataprocAutoscalingPolicyIamMemberConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy_iam_member

dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  member: str,
  policy_id: str,
  role: str,
  condition: DataprocAutoscalingPolicyIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#member DataprocAutoscalingPolicyIamMember#member}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#policy_id DataprocAutoscalingPolicyIamMember#policy_id}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#role DataprocAutoscalingPolicyIamMember#role}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberCondition">DataprocAutoscalingPolicyIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#id DataprocAutoscalingPolicyIamMember#id}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#location DataprocAutoscalingPolicyIamMember#location}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#project DataprocAutoscalingPolicyIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#member DataprocAutoscalingPolicyIamMember#member}.

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#policy_id DataprocAutoscalingPolicyIamMember#policy_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#role DataprocAutoscalingPolicyIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.condition"></a>

```python
condition: DataprocAutoscalingPolicyIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberCondition">DataprocAutoscalingPolicyIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#condition DataprocAutoscalingPolicyIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#id DataprocAutoscalingPolicyIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#location DataprocAutoscalingPolicyIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/dataproc_autoscaling_policy_iam_member#project DataprocAutoscalingPolicyIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocAutoscalingPolicyIamMemberConditionOutputReference <a name="DataprocAutoscalingPolicyIamMemberConditionOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_autoscaling_policy_iam_member

dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberCondition">DataprocAutoscalingPolicyIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataprocAutoscalingPolicyIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamMember.DataprocAutoscalingPolicyIamMemberCondition">DataprocAutoscalingPolicyIamMemberCondition</a>

---




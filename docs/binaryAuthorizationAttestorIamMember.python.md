# `google_binary_authorization_attestor_iam_member`

Refer to the Terraform Registory for docs: [`google_binary_authorization_attestor_iam_member`](https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member).

# `binaryAuthorizationAttestorIamMember` Submodule <a name="`binaryAuthorizationAttestorIamMember` Submodule" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BinaryAuthorizationAttestorIamMember <a name="BinaryAuthorizationAttestorIamMember" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member google_binary_authorization_attestor_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_attestor_iam_member

binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attestor: str,
  member: str,
  role: str,
  condition: BinaryAuthorizationAttestorIamMemberCondition = None,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.attestor">attestor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#attestor BinaryAuthorizationAttestorIamMember#attestor}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#member BinaryAuthorizationAttestorIamMember#member}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#role BinaryAuthorizationAttestorIamMember#role}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition">BinaryAuthorizationAttestorIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#id BinaryAuthorizationAttestorIamMember#id}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#project BinaryAuthorizationAttestorIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestor`<sup>Required</sup> <a name="attestor" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.attestor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#attestor BinaryAuthorizationAttestorIamMember#attestor}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#member BinaryAuthorizationAttestorIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#role BinaryAuthorizationAttestorIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition">BinaryAuthorizationAttestorIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#condition BinaryAuthorizationAttestorIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#id BinaryAuthorizationAttestorIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#project BinaryAuthorizationAttestorIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#expression BinaryAuthorizationAttestorIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#title BinaryAuthorizationAttestorIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#description BinaryAuthorizationAttestorIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_attestor_iam_member

binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_attestor_iam_member

binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_attestor_iam_member

binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference">BinaryAuthorizationAttestorIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.attestorInput">attestor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition">BinaryAuthorizationAttestorIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.attestor">attestor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.condition"></a>

```python
condition: BinaryAuthorizationAttestorIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference">BinaryAuthorizationAttestorIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `attestor_input`<sup>Optional</sup> <a name="attestor_input" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.attestorInput"></a>

```python
attestor_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.conditionInput"></a>

```python
condition_input: BinaryAuthorizationAttestorIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition">BinaryAuthorizationAttestorIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `attestor`<sup>Required</sup> <a name="attestor" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.attestor"></a>

```python
attestor: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BinaryAuthorizationAttestorIamMemberCondition <a name="BinaryAuthorizationAttestorIamMemberCondition" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_attestor_iam_member

binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#expression BinaryAuthorizationAttestorIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#title BinaryAuthorizationAttestorIamMember#title}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#description BinaryAuthorizationAttestorIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#expression BinaryAuthorizationAttestorIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#title BinaryAuthorizationAttestorIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#description BinaryAuthorizationAttestorIamMember#description}.

---

### BinaryAuthorizationAttestorIamMemberConfig <a name="BinaryAuthorizationAttestorIamMemberConfig" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_attestor_iam_member

binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attestor: str,
  member: str,
  role: str,
  condition: BinaryAuthorizationAttestorIamMemberCondition = None,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.attestor">attestor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#attestor BinaryAuthorizationAttestorIamMember#attestor}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#member BinaryAuthorizationAttestorIamMember#member}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#role BinaryAuthorizationAttestorIamMember#role}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition">BinaryAuthorizationAttestorIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#id BinaryAuthorizationAttestorIamMember#id}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#project BinaryAuthorizationAttestorIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestor`<sup>Required</sup> <a name="attestor" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.attestor"></a>

```python
attestor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#attestor BinaryAuthorizationAttestorIamMember#attestor}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#member BinaryAuthorizationAttestorIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#role BinaryAuthorizationAttestorIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.condition"></a>

```python
condition: BinaryAuthorizationAttestorIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition">BinaryAuthorizationAttestorIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#condition BinaryAuthorizationAttestorIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#id BinaryAuthorizationAttestorIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/binary_authorization_attestor_iam_member#project BinaryAuthorizationAttestorIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BinaryAuthorizationAttestorIamMemberConditionOutputReference <a name="BinaryAuthorizationAttestorIamMemberConditionOutputReference" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_attestor_iam_member

binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition">BinaryAuthorizationAttestorIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: BinaryAuthorizationAttestorIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition">BinaryAuthorizationAttestorIamMemberCondition</a>

---




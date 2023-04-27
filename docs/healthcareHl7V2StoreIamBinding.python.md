# `google_healthcare_hl7_v2_store_iam_binding`

Refer to the Terraform Registory for docs: [`google_healthcare_hl7_v2_store_iam_binding`](https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding).

# `healthcareHl7V2StoreIamBinding` Submodule <a name="`healthcareHl7V2StoreIamBinding` Submodule" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareHl7V2StoreIamBinding <a name="HealthcareHl7V2StoreIamBinding" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding google_healthcare_hl7_v2_store_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store_iam_binding

healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hl7_v2_store_id: str,
  members: typing.List[str],
  role: str,
  condition: HealthcareHl7V2StoreIamBindingCondition = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.hl7V2StoreId">hl7_v2_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#hl7_v2_store_id HealthcareHl7V2StoreIamBinding#hl7_v2_store_id}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#members HealthcareHl7V2StoreIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#role HealthcareHl7V2StoreIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#id HealthcareHl7V2StoreIamBinding#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hl7_v2_store_id`<sup>Required</sup> <a name="hl7_v2_store_id" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.hl7V2StoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#hl7_v2_store_id HealthcareHl7V2StoreIamBinding#hl7_v2_store_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#members HealthcareHl7V2StoreIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#role HealthcareHl7V2StoreIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#condition HealthcareHl7V2StoreIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#id HealthcareHl7V2StoreIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#expression HealthcareHl7V2StoreIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#title HealthcareHl7V2StoreIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#description HealthcareHl7V2StoreIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store_iam_binding

healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store_iam_binding

healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store_iam_binding

healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference">HealthcareHl7V2StoreIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.hl7V2StoreIdInput">hl7_v2_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.hl7V2StoreId">hl7_v2_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.condition"></a>

```python
condition: HealthcareHl7V2StoreIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference">HealthcareHl7V2StoreIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.conditionInput"></a>

```python
condition_input: HealthcareHl7V2StoreIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a>

---

##### `hl7_v2_store_id_input`<sup>Optional</sup> <a name="hl7_v2_store_id_input" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.hl7V2StoreIdInput"></a>

```python
hl7_v2_store_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `hl7_v2_store_id`<sup>Required</sup> <a name="hl7_v2_store_id" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.hl7V2StoreId"></a>

```python
hl7_v2_store_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareHl7V2StoreIamBindingCondition <a name="HealthcareHl7V2StoreIamBindingCondition" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store_iam_binding

healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#expression HealthcareHl7V2StoreIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#title HealthcareHl7V2StoreIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#description HealthcareHl7V2StoreIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#expression HealthcareHl7V2StoreIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#title HealthcareHl7V2StoreIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#description HealthcareHl7V2StoreIamBinding#description}.

---

### HealthcareHl7V2StoreIamBindingConfig <a name="HealthcareHl7V2StoreIamBindingConfig" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store_iam_binding

healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hl7_v2_store_id: str,
  members: typing.List[str],
  role: str,
  condition: HealthcareHl7V2StoreIamBindingCondition = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.hl7V2StoreId">hl7_v2_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#hl7_v2_store_id HealthcareHl7V2StoreIamBinding#hl7_v2_store_id}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#members HealthcareHl7V2StoreIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#role HealthcareHl7V2StoreIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#id HealthcareHl7V2StoreIamBinding#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hl7_v2_store_id`<sup>Required</sup> <a name="hl7_v2_store_id" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.hl7V2StoreId"></a>

```python
hl7_v2_store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#hl7_v2_store_id HealthcareHl7V2StoreIamBinding#hl7_v2_store_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#members HealthcareHl7V2StoreIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#role HealthcareHl7V2StoreIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.condition"></a>

```python
condition: HealthcareHl7V2StoreIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#condition HealthcareHl7V2StoreIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/healthcare_hl7_v2_store_iam_binding#id HealthcareHl7V2StoreIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareHl7V2StoreIamBindingConditionOutputReference <a name="HealthcareHl7V2StoreIamBindingConditionOutputReference" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_hl7_v2_store_iam_binding

healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: HealthcareHl7V2StoreIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a>

---




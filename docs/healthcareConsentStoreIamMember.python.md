# `healthcareConsentStoreIamMember` Submodule <a name="`healthcareConsentStoreIamMember` Submodule" id="@cdktf/provider-google.healthcareConsentStoreIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareConsentStoreIamMember <a name="HealthcareConsentStoreIamMember" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member google_healthcare_consent_store_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_consent_store_iam_member

healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  consent_store_id: str,
  dataset: str,
  member: str,
  role: str,
  condition: HealthcareConsentStoreIamMemberCondition = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.consentStoreId">consent_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#consent_store_id HealthcareConsentStoreIamMember#consent_store_id}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.dataset">dataset</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#dataset HealthcareConsentStoreIamMember#dataset}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#member HealthcareConsentStoreIamMember#member}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#role HealthcareConsentStoreIamMember#role}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition">HealthcareConsentStoreIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#id HealthcareConsentStoreIamMember#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `consent_store_id`<sup>Required</sup> <a name="consent_store_id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.consentStoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#consent_store_id HealthcareConsentStoreIamMember#consent_store_id}.

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.dataset"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#dataset HealthcareConsentStoreIamMember#dataset}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#member HealthcareConsentStoreIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#role HealthcareConsentStoreIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition">HealthcareConsentStoreIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#condition HealthcareConsentStoreIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#id HealthcareConsentStoreIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#expression HealthcareConsentStoreIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#title HealthcareConsentStoreIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#description HealthcareConsentStoreIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HealthcareConsentStoreIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import healthcare_consent_store_iam_member

healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import healthcare_consent_store_iam_member

healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import healthcare_consent_store_iam_member

healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import healthcare_consent_store_iam_member

healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HealthcareConsentStoreIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HealthcareConsentStoreIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HealthcareConsentStoreIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HealthcareConsentStoreIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference">HealthcareConsentStoreIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition">HealthcareConsentStoreIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.consentStoreIdInput">consent_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.consentStoreId">consent_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.condition"></a>

```python
condition: HealthcareConsentStoreIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference">HealthcareConsentStoreIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.conditionInput"></a>

```python
condition_input: HealthcareConsentStoreIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition">HealthcareConsentStoreIamMemberCondition</a>

---

##### `consent_store_id_input`<sup>Optional</sup> <a name="consent_store_id_input" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.consentStoreIdInput"></a>

```python
consent_store_id_input: str
```

- *Type:* str

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.datasetInput"></a>

```python
dataset_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `consent_store_id`<sup>Required</sup> <a name="consent_store_id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.consentStoreId"></a>

```python
consent_store_id: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareConsentStoreIamMemberCondition <a name="HealthcareConsentStoreIamMemberCondition" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_consent_store_iam_member

healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#expression HealthcareConsentStoreIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#title HealthcareConsentStoreIamMember#title}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#description HealthcareConsentStoreIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#expression HealthcareConsentStoreIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#title HealthcareConsentStoreIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#description HealthcareConsentStoreIamMember#description}.

---

### HealthcareConsentStoreIamMemberConfig <a name="HealthcareConsentStoreIamMemberConfig" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_consent_store_iam_member

healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  consent_store_id: str,
  dataset: str,
  member: str,
  role: str,
  condition: HealthcareConsentStoreIamMemberCondition = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.consentStoreId">consent_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#consent_store_id HealthcareConsentStoreIamMember#consent_store_id}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.dataset">dataset</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#dataset HealthcareConsentStoreIamMember#dataset}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#member HealthcareConsentStoreIamMember#member}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#role HealthcareConsentStoreIamMember#role}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition">HealthcareConsentStoreIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#id HealthcareConsentStoreIamMember#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `consent_store_id`<sup>Required</sup> <a name="consent_store_id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.consentStoreId"></a>

```python
consent_store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#consent_store_id HealthcareConsentStoreIamMember#consent_store_id}.

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#dataset HealthcareConsentStoreIamMember#dataset}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#member HealthcareConsentStoreIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#role HealthcareConsentStoreIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.condition"></a>

```python
condition: HealthcareConsentStoreIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition">HealthcareConsentStoreIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#condition HealthcareConsentStoreIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/healthcare_consent_store_iam_member#id HealthcareConsentStoreIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareConsentStoreIamMemberConditionOutputReference <a name="HealthcareConsentStoreIamMemberConditionOutputReference" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_consent_store_iam_member

healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition">HealthcareConsentStoreIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: HealthcareConsentStoreIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition">HealthcareConsentStoreIamMemberCondition</a>

---




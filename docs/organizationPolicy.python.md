# `google_organization_policy`

Refer to the Terraform Registory for docs: [`google_organization_policy`](https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy).

# `organizationPolicy` Submodule <a name="`organizationPolicy` Submodule" id="@cdktf/provider-google.organizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationPolicy <a name="OrganizationPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy google_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_policy

organizationPolicy.OrganizationPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  constraint: str,
  org_id: str,
  boolean_policy: OrganizationPolicyBooleanPolicy = None,
  id: str = None,
  list_policy: OrganizationPolicyListPolicy = None,
  restore_policy: OrganizationPolicyRestorePolicy = None,
  timeouts: OrganizationPolicyTimeouts = None,
  version: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.constraint">constraint</a></code> | <code>str</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#org_id OrganizationPolicy#org_id}. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.booleanPolicy">boolean_policy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#id OrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.listPolicy">list_policy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.version">version</a></code> | <code>typing.Union[int, float]</code> | Version of the Policy. Default version is 0. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.constraint"></a>

- *Type:* str

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#constraint OrganizationPolicy#constraint}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.orgId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#org_id OrganizationPolicy#org_id}.

---

##### `boolean_policy`<sup>Optional</sup> <a name="boolean_policy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.booleanPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#boolean_policy OrganizationPolicy#boolean_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#id OrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `list_policy`<sup>Optional</sup> <a name="list_policy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.listPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#list_policy OrganizationPolicy#list_policy}

---

##### `restore_policy`<sup>Optional</sup> <a name="restore_policy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.restorePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#restore_policy OrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#timeouts OrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.version"></a>

- *Type:* typing.Union[int, float]

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#version OrganizationPolicy#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putBooleanPolicy">put_boolean_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putListPolicy">put_list_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putRestorePolicy">put_restore_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetBooleanPolicy">reset_boolean_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetListPolicy">reset_list_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetRestorePolicy">reset_restore_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_boolean_policy` <a name="put_boolean_policy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putBooleanPolicy"></a>

```python
def put_boolean_policy(
  enforced: typing.Union[bool, IResolvable]
) -> None
```

###### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putBooleanPolicy.parameter.enforced"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#enforced OrganizationPolicy#enforced}

---

##### `put_list_policy` <a name="put_list_policy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putListPolicy"></a>

```python
def put_list_policy(
  allow: OrganizationPolicyListPolicyAllow = None,
  deny: OrganizationPolicyListPolicyDeny = None,
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  suggested_value: str = None
) -> None
```

###### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putListPolicy.parameter.allow"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#allow OrganizationPolicy#allow}

---

###### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putListPolicy.parameter.deny"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#deny OrganizationPolicy#deny}

---

###### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putListPolicy.parameter.inheritFromParent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#inherit_from_parent OrganizationPolicy#inherit_from_parent}

---

###### `suggested_value`<sup>Optional</sup> <a name="suggested_value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putListPolicy.parameter.suggestedValue"></a>

- *Type:* str

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#suggested_value OrganizationPolicy#suggested_value}

---

##### `put_restore_policy` <a name="put_restore_policy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putRestorePolicy"></a>

```python
def put_restore_policy(
  default: typing.Union[bool, IResolvable]
) -> None
```

###### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putRestorePolicy.parameter.default"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#default OrganizationPolicy#default}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#create OrganizationPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#delete OrganizationPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#read OrganizationPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#update OrganizationPolicy#update}.

---

##### `reset_boolean_policy` <a name="reset_boolean_policy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetBooleanPolicy"></a>

```python
def reset_boolean_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_list_policy` <a name="reset_list_policy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetListPolicy"></a>

```python
def reset_list_policy() -> None
```

##### `reset_restore_policy` <a name="reset_restore_policy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetRestorePolicy"></a>

```python
def reset_restore_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import organization_policy

organizationPolicy.OrganizationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import organization_policy

organizationPolicy.OrganizationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import organization_policy

organizationPolicy.OrganizationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.booleanPolicy">boolean_policy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference">OrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.listPolicy">list_policy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference">OrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference">OrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference">OrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.booleanPolicyInput">boolean_policy_input</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.constraintInput">constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.listPolicyInput">list_policy_input</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.restorePolicyInput">restore_policy_input</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.constraint">constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `boolean_policy`<sup>Required</sup> <a name="boolean_policy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.booleanPolicy"></a>

```python
boolean_policy: OrganizationPolicyBooleanPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference">OrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `list_policy`<sup>Required</sup> <a name="list_policy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.listPolicy"></a>

```python
list_policy: OrganizationPolicyListPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference">OrganizationPolicyListPolicyOutputReference</a>

---

##### `restore_policy`<sup>Required</sup> <a name="restore_policy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.restorePolicy"></a>

```python
restore_policy: OrganizationPolicyRestorePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference">OrganizationPolicyRestorePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.timeouts"></a>

```python
timeouts: OrganizationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference">OrganizationPolicyTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `boolean_policy_input`<sup>Optional</sup> <a name="boolean_policy_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.booleanPolicyInput"></a>

```python
boolean_policy_input: OrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a>

---

##### `constraint_input`<sup>Optional</sup> <a name="constraint_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.constraintInput"></a>

```python
constraint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `list_policy_input`<sup>Optional</sup> <a name="list_policy_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.listPolicyInput"></a>

```python
list_policy_input: OrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a>

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `restore_policy_input`<sup>Optional</sup> <a name="restore_policy_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.restorePolicyInput"></a>

```python
restore_policy_input: OrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OrganizationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationPolicyBooleanPolicy <a name="OrganizationPolicyBooleanPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_policy

organizationPolicy.OrganizationPolicyBooleanPolicy(
  enforced: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy.property.enforced">enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy.property.enforced"></a>

```python
enforced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#enforced OrganizationPolicy#enforced}

---

### OrganizationPolicyConfig <a name="OrganizationPolicyConfig" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_policy

organizationPolicy.OrganizationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  constraint: str,
  org_id: str,
  boolean_policy: OrganizationPolicyBooleanPolicy = None,
  id: str = None,
  list_policy: OrganizationPolicyListPolicy = None,
  restore_policy: OrganizationPolicyRestorePolicy = None,
  timeouts: OrganizationPolicyTimeouts = None,
  version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.constraint">constraint</a></code> | <code>str</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#org_id OrganizationPolicy#org_id}. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.booleanPolicy">boolean_policy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#id OrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.listPolicy">list_policy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Version of the Policy. Default version is 0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#constraint OrganizationPolicy#constraint}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#org_id OrganizationPolicy#org_id}.

---

##### `boolean_policy`<sup>Optional</sup> <a name="boolean_policy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.booleanPolicy"></a>

```python
boolean_policy: OrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#boolean_policy OrganizationPolicy#boolean_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#id OrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `list_policy`<sup>Optional</sup> <a name="list_policy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.listPolicy"></a>

```python
list_policy: OrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#list_policy OrganizationPolicy#list_policy}

---

##### `restore_policy`<sup>Optional</sup> <a name="restore_policy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.restorePolicy"></a>

```python
restore_policy: OrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#restore_policy OrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.timeouts"></a>

```python
timeouts: OrganizationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#timeouts OrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#version OrganizationPolicy#version}

---

### OrganizationPolicyListPolicy <a name="OrganizationPolicyListPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_policy

organizationPolicy.OrganizationPolicyListPolicy(
  allow: OrganizationPolicyListPolicyAllow = None,
  deny: OrganizationPolicyListPolicyDeny = None,
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  suggested_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.suggestedValue">suggested_value</a></code> | <code>str</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.allow"></a>

```python
allow: OrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#allow OrganizationPolicy#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.deny"></a>

```python
deny: OrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#deny OrganizationPolicy#deny}

---

##### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#inherit_from_parent OrganizationPolicy#inherit_from_parent}

---

##### `suggested_value`<sup>Optional</sup> <a name="suggested_value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.suggestedValue"></a>

```python
suggested_value: str
```

- *Type:* str

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#suggested_value OrganizationPolicy#suggested_value}

---

### OrganizationPolicyListPolicyAllow <a name="OrganizationPolicyListPolicyAllow" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_policy

organizationPolicy.OrganizationPolicyListPolicyAllow(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow.property.values">values</a></code> | <code>typing.List[str]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#all OrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#values OrganizationPolicy#values}

---

### OrganizationPolicyListPolicyDeny <a name="OrganizationPolicyListPolicyDeny" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_policy

organizationPolicy.OrganizationPolicyListPolicyDeny(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny.property.values">values</a></code> | <code>typing.List[str]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#all OrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#values OrganizationPolicy#values}

---

### OrganizationPolicyRestorePolicy <a name="OrganizationPolicyRestorePolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_policy

organizationPolicy.OrganizationPolicyRestorePolicy(
  default: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#default OrganizationPolicy#default}

---

### OrganizationPolicyTimeouts <a name="OrganizationPolicyTimeouts" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_policy

organizationPolicy.OrganizationPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#create OrganizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#delete OrganizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#read OrganizationPolicy#read}. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#update OrganizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#create OrganizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#delete OrganizationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#read OrganizationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#update OrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationPolicyBooleanPolicyOutputReference <a name="OrganizationPolicyBooleanPolicyOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_policy

organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">enforced_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.enforced">enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforced_input`<sup>Optional</sup> <a name="enforced_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```python
enforced_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```python
enforced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a>

---


### OrganizationPolicyListPolicyAllowOutputReference <a name="OrganizationPolicyListPolicyAllowOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_policy

organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all` <a name="reset_all" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.allInput">all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```python
all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a>

---


### OrganizationPolicyListPolicyDenyOutputReference <a name="OrganizationPolicyListPolicyDenyOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_policy

organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all` <a name="reset_all" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.allInput">all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```python
all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a>

---


### OrganizationPolicyListPolicyOutputReference <a name="OrganizationPolicyListPolicyOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_policy

organizationPolicy.OrganizationPolicyListPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putAllow">put_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putDeny">put_deny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetAllow">reset_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetDeny">reset_deny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetInheritFromParent">reset_inherit_from_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetSuggestedValue">reset_suggested_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allow` <a name="put_allow" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putAllow"></a>

```python
def put_allow(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putAllow.parameter.all"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#all OrganizationPolicy#all}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putAllow.parameter.values"></a>

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#values OrganizationPolicy#values}

---

##### `put_deny` <a name="put_deny" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putDeny"></a>

```python
def put_deny(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putDeny.parameter.all"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#all OrganizationPolicy#all}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putDeny.parameter.values"></a>

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/organization_policy#values OrganizationPolicy#values}

---

##### `reset_allow` <a name="reset_allow" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```python
def reset_allow() -> None
```

##### `reset_deny` <a name="reset_deny" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```python
def reset_deny() -> None
```

##### `reset_inherit_from_parent` <a name="reset_inherit_from_parent" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```python
def reset_inherit_from_parent() -> None
```

##### `reset_suggested_value` <a name="reset_suggested_value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```python
def reset_suggested_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference">OrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference">OrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.allowInput">allow_input</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.denyInput">deny_input</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">inherit_from_parent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">suggested_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.suggestedValue">suggested_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.allow"></a>

```python
allow: OrganizationPolicyListPolicyAllowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference">OrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.deny"></a>

```python
deny: OrganizationPolicyListPolicyDenyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference">OrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `allow_input`<sup>Optional</sup> <a name="allow_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```python
allow_input: OrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a>

---

##### `deny_input`<sup>Optional</sup> <a name="deny_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```python
deny_input: OrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a>

---

##### `inherit_from_parent_input`<sup>Optional</sup> <a name="inherit_from_parent_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```python
inherit_from_parent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suggested_value_input`<sup>Optional</sup> <a name="suggested_value_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```python
suggested_value_input: str
```

- *Type:* str

---

##### `inherit_from_parent`<sup>Required</sup> <a name="inherit_from_parent" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suggested_value`<sup>Required</sup> <a name="suggested_value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```python
suggested_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a>

---


### OrganizationPolicyRestorePolicyOutputReference <a name="OrganizationPolicyRestorePolicyOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_policy

organizationPolicy.OrganizationPolicyRestorePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.defaultInput">default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```python
default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a>

---


### OrganizationPolicyTimeoutsOutputReference <a name="OrganizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import organization_policy

organizationPolicy.OrganizationPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OrganizationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a>]

---




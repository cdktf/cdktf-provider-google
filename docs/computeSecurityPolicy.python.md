# `computeSecurityPolicy` Submodule <a name="`computeSecurityPolicy` Submodule" id="@cdktf/provider-google.computeSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSecurityPolicy <a name="ComputeSecurityPolicy" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy google_compute_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicy(
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
  adaptive_protection_config: ComputeSecurityPolicyAdaptiveProtectionConfig = None,
  advanced_options_config: ComputeSecurityPolicyAdvancedOptionsConfig = None,
  description: str = None,
  id: str = None,
  project: str = None,
  recaptcha_options_config: ComputeSecurityPolicyRecaptchaOptionsConfig = None,
  rule: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRule]] = None,
  timeouts: ComputeSecurityPolicyTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the security policy. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.adaptiveProtectionConfig">adaptive_protection_config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a></code> | adaptive_protection_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.advancedOptionsConfig">advanced_options_config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a></code> | advanced_options_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this security policy. Max size is 2048. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#id ComputeSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | The project in which the resource belongs. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.recaptchaOptionsConfig">recaptcha_options_config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a></code> | recaptcha_options_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.type">type</a></code> | <code>str</code> | The type indicates the intended use of the security policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.name"></a>

- *Type:* str

The name of the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#name ComputeSecurityPolicy#name}

---

##### `adaptive_protection_config`<sup>Optional</sup> <a name="adaptive_protection_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.adaptiveProtectionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a>

adaptive_protection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#adaptive_protection_config ComputeSecurityPolicy#adaptive_protection_config}

---

##### `advanced_options_config`<sup>Optional</sup> <a name="advanced_options_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.advancedOptionsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a>

advanced_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#advanced_options_config ComputeSecurityPolicy#advanced_options_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this security policy. Max size is 2048.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#description ComputeSecurityPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#id ComputeSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.project"></a>

- *Type:* str

The project in which the resource belongs. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#project ComputeSecurityPolicy#project}

---

##### `recaptcha_options_config`<sup>Optional</sup> <a name="recaptcha_options_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.recaptchaOptionsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a>

recaptcha_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#recaptcha_options_config ComputeSecurityPolicy#recaptcha_options_config}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#rule ComputeSecurityPolicy#rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#timeouts ComputeSecurityPolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.Initializer.parameter.type"></a>

- *Type:* str

The type indicates the intended use of the security policy.

CLOUD_ARMOR - Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers. CLOUD_ARMOR_EDGE - Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#type ComputeSecurityPolicy#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdaptiveProtectionConfig">put_adaptive_protection_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdvancedOptionsConfig">put_advanced_options_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRecaptchaOptionsConfig">put_recaptcha_options_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetAdaptiveProtectionConfig">reset_adaptive_protection_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetAdvancedOptionsConfig">reset_advanced_options_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetRecaptchaOptionsConfig">reset_recaptcha_options_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetRule">reset_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_adaptive_protection_config` <a name="put_adaptive_protection_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdaptiveProtectionConfig"></a>

```python
def put_adaptive_protection_config(
  layer7_ddos_defense_config: ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig = None
) -> None
```

###### `layer7_ddos_defense_config`<sup>Optional</sup> <a name="layer7_ddos_defense_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdaptiveProtectionConfig.parameter.layer7DdosDefenseConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a>

layer_7_ddos_defense_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#layer_7_ddos_defense_config ComputeSecurityPolicy#layer_7_ddos_defense_config}

---

##### `put_advanced_options_config` <a name="put_advanced_options_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdvancedOptionsConfig"></a>

```python
def put_advanced_options_config(
  json_custom_config: ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig = None,
  json_parsing: str = None,
  log_level: str = None,
  user_ip_request_headers: typing.List[str] = None
) -> None
```

###### `json_custom_config`<sup>Optional</sup> <a name="json_custom_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdvancedOptionsConfig.parameter.jsonCustomConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

json_custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#json_custom_config ComputeSecurityPolicy#json_custom_config}

---

###### `json_parsing`<sup>Optional</sup> <a name="json_parsing" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdvancedOptionsConfig.parameter.jsonParsing"></a>

- *Type:* str

JSON body parsing. Supported values include: "DISABLED", "STANDARD".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#json_parsing ComputeSecurityPolicy#json_parsing}

---

###### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdvancedOptionsConfig.parameter.logLevel"></a>

- *Type:* str

Logging level. Supported values include: "NORMAL", "VERBOSE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#log_level ComputeSecurityPolicy#log_level}

---

###### `user_ip_request_headers`<sup>Optional</sup> <a name="user_ip_request_headers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putAdvancedOptionsConfig.parameter.userIpRequestHeaders"></a>

- *Type:* typing.List[str]

An optional list of case-insensitive request header names to use for resolving the callers client IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#user_ip_request_headers ComputeSecurityPolicy#user_ip_request_headers}

---

##### `put_recaptcha_options_config` <a name="put_recaptcha_options_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRecaptchaOptionsConfig"></a>

```python
def put_recaptcha_options_config(
  redirect_site_key: str
) -> None
```

###### `redirect_site_key`<sup>Required</sup> <a name="redirect_site_key" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRecaptchaOptionsConfig.parameter.redirectSiteKey"></a>

- *Type:* str

A field to supply a reCAPTCHA site key to be used for all the rules using the redirect action with the type of GOOGLE_RECAPTCHA under the security policy.

The specified site key needs to be created from the reCAPTCHA API. The user is responsible for the validity of the specified site key. If not specified, a Google-managed site key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#redirect_site_key ComputeSecurityPolicy#redirect_site_key}

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#create ComputeSecurityPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#delete ComputeSecurityPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#update ComputeSecurityPolicy#update}.

---

##### `reset_adaptive_protection_config` <a name="reset_adaptive_protection_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetAdaptiveProtectionConfig"></a>

```python
def reset_adaptive_protection_config() -> None
```

##### `reset_advanced_options_config` <a name="reset_advanced_options_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetAdvancedOptionsConfig"></a>

```python
def reset_advanced_options_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_recaptcha_options_config` <a name="reset_recaptcha_options_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetRecaptchaOptionsConfig"></a>

```python
def reset_recaptcha_options_config() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetRule"></a>

```python
def reset_rule() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeSecurityPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.adaptiveProtectionConfig">adaptive_protection_config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference">ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.advancedOptionsConfig">advanced_options_config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference">ComputeSecurityPolicyAdvancedOptionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.recaptchaOptionsConfig">recaptcha_options_config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference">ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList">ComputeSecurityPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference">ComputeSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.adaptiveProtectionConfigInput">adaptive_protection_config_input</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.advancedOptionsConfigInput">advanced_options_config_input</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.recaptchaOptionsConfigInput">recaptcha_options_config_input</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `adaptive_protection_config`<sup>Required</sup> <a name="adaptive_protection_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.adaptiveProtectionConfig"></a>

```python
adaptive_protection_config: ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference">ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference</a>

---

##### `advanced_options_config`<sup>Required</sup> <a name="advanced_options_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.advancedOptionsConfig"></a>

```python
advanced_options_config: ComputeSecurityPolicyAdvancedOptionsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference">ComputeSecurityPolicyAdvancedOptionsConfigOutputReference</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `recaptcha_options_config`<sup>Required</sup> <a name="recaptcha_options_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.recaptchaOptionsConfig"></a>

```python
recaptcha_options_config: ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference">ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.rule"></a>

```python
rule: ComputeSecurityPolicyRuleList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList">ComputeSecurityPolicyRuleList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.timeouts"></a>

```python
timeouts: ComputeSecurityPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference">ComputeSecurityPolicyTimeoutsOutputReference</a>

---

##### `adaptive_protection_config_input`<sup>Optional</sup> <a name="adaptive_protection_config_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.adaptiveProtectionConfigInput"></a>

```python
adaptive_protection_config_input: ComputeSecurityPolicyAdaptiveProtectionConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a>

---

##### `advanced_options_config_input`<sup>Optional</sup> <a name="advanced_options_config_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.advancedOptionsConfigInput"></a>

```python
advanced_options_config_input: ComputeSecurityPolicyAdvancedOptionsConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `recaptcha_options_config_input`<sup>Optional</sup> <a name="recaptcha_options_config_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.recaptchaOptionsConfigInput"></a>

```python
recaptcha_options_config_input: ComputeSecurityPolicyRecaptchaOptionsConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a>

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeSecurityPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSecurityPolicyAdaptiveProtectionConfig <a name="ComputeSecurityPolicyAdaptiveProtectionConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig(
  layer7_ddos_defense_config: ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig.property.layer7DdosDefenseConfig">layer7_ddos_defense_config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a></code> | layer_7_ddos_defense_config block. |

---

##### `layer7_ddos_defense_config`<sup>Optional</sup> <a name="layer7_ddos_defense_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig.property.layer7DdosDefenseConfig"></a>

```python
layer7_ddos_defense_config: ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a>

layer_7_ddos_defense_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#layer_7_ddos_defense_config ComputeSecurityPolicy#layer_7_ddos_defense_config}

---

### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig(
  enable: typing.Union[bool, IResolvable] = None,
  rule_visibility: str = None,
  threshold_configs: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, enables CAAP for L7 DDoS detection. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.property.ruleVisibility">rule_visibility</a></code> | <code>str</code> | Rule visibility. Supported values include: "STANDARD", "PREMIUM". |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.property.thresholdConfigs">threshold_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs</a>]]</code> | threshold_configs block. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, enables CAAP for L7 DDoS detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#enable ComputeSecurityPolicy#enable}

---

##### `rule_visibility`<sup>Optional</sup> <a name="rule_visibility" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.property.ruleVisibility"></a>

```python
rule_visibility: str
```

- *Type:* str

Rule visibility. Supported values include: "STANDARD", "PREMIUM".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#rule_visibility ComputeSecurityPolicy#rule_visibility}

---

##### `threshold_configs`<sup>Optional</sup> <a name="threshold_configs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.property.thresholdConfigs"></a>

```python
threshold_configs: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs</a>]]

threshold_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#threshold_configs ComputeSecurityPolicy#threshold_configs}

---

### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs(
  name: str,
  auto_deploy_confidence_threshold: typing.Union[int, float] = None,
  auto_deploy_expiration_sec: typing.Union[int, float] = None,
  auto_deploy_impacted_baseline_threshold: typing.Union[int, float] = None,
  auto_deploy_load_threshold: typing.Union[int, float] = None,
  detection_absolute_qps: typing.Union[int, float] = None,
  detection_load_threshold: typing.Union[int, float] = None,
  detection_relative_to_baseline_qps: typing.Union[int, float] = None,
  traffic_granularity_configs: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.name">name</a></code> | <code>str</code> | The name must be 1-63 characters long, and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.autoDeployConfidenceThreshold">auto_deploy_confidence_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#auto_deploy_confidence_threshold ComputeSecurityPolicy#auto_deploy_confidence_threshold}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.autoDeployExpirationSec">auto_deploy_expiration_sec</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#auto_deploy_expiration_sec ComputeSecurityPolicy#auto_deploy_expiration_sec}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.autoDeployImpactedBaselineThreshold">auto_deploy_impacted_baseline_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#auto_deploy_impacted_baseline_threshold ComputeSecurityPolicy#auto_deploy_impacted_baseline_threshold}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.autoDeployLoadThreshold">auto_deploy_load_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#auto_deploy_load_threshold ComputeSecurityPolicy#auto_deploy_load_threshold}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.detectionAbsoluteQps">detection_absolute_qps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#detection_absolute_qps ComputeSecurityPolicy#detection_absolute_qps}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.detectionLoadThreshold">detection_load_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#detection_load_threshold ComputeSecurityPolicy#detection_load_threshold}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.detectionRelativeToBaselineQps">detection_relative_to_baseline_qps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#detection_relative_to_baseline_qps ComputeSecurityPolicy#detection_relative_to_baseline_qps}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.trafficGranularityConfigs">traffic_granularity_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs</a>]]</code> | traffic_granularity_configs block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.name"></a>

```python
name: str
```

- *Type:* str

The name must be 1-63 characters long, and comply with RFC1035.

The name must be unique within the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#name ComputeSecurityPolicy#name}

---

##### `auto_deploy_confidence_threshold`<sup>Optional</sup> <a name="auto_deploy_confidence_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.autoDeployConfidenceThreshold"></a>

```python
auto_deploy_confidence_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#auto_deploy_confidence_threshold ComputeSecurityPolicy#auto_deploy_confidence_threshold}.

---

##### `auto_deploy_expiration_sec`<sup>Optional</sup> <a name="auto_deploy_expiration_sec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.autoDeployExpirationSec"></a>

```python
auto_deploy_expiration_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#auto_deploy_expiration_sec ComputeSecurityPolicy#auto_deploy_expiration_sec}.

---

##### `auto_deploy_impacted_baseline_threshold`<sup>Optional</sup> <a name="auto_deploy_impacted_baseline_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.autoDeployImpactedBaselineThreshold"></a>

```python
auto_deploy_impacted_baseline_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#auto_deploy_impacted_baseline_threshold ComputeSecurityPolicy#auto_deploy_impacted_baseline_threshold}.

---

##### `auto_deploy_load_threshold`<sup>Optional</sup> <a name="auto_deploy_load_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.autoDeployLoadThreshold"></a>

```python
auto_deploy_load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#auto_deploy_load_threshold ComputeSecurityPolicy#auto_deploy_load_threshold}.

---

##### `detection_absolute_qps`<sup>Optional</sup> <a name="detection_absolute_qps" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.detectionAbsoluteQps"></a>

```python
detection_absolute_qps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#detection_absolute_qps ComputeSecurityPolicy#detection_absolute_qps}.

---

##### `detection_load_threshold`<sup>Optional</sup> <a name="detection_load_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.detectionLoadThreshold"></a>

```python
detection_load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#detection_load_threshold ComputeSecurityPolicy#detection_load_threshold}.

---

##### `detection_relative_to_baseline_qps`<sup>Optional</sup> <a name="detection_relative_to_baseline_qps" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.detectionRelativeToBaselineQps"></a>

```python
detection_relative_to_baseline_qps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#detection_relative_to_baseline_qps ComputeSecurityPolicy#detection_relative_to_baseline_qps}.

---

##### `traffic_granularity_configs`<sup>Optional</sup> <a name="traffic_granularity_configs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.property.trafficGranularityConfigs"></a>

```python
traffic_granularity_configs: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs</a>]]

traffic_granularity_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#traffic_granularity_configs ComputeSecurityPolicy#traffic_granularity_configs}

---

### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs(
  type: str,
  enable_each_unique_value: typing.Union[bool, IResolvable] = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs.property.type">type</a></code> | <code>str</code> | Type of this configuration. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs.property.enableEachUniqueValue">enable_each_unique_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled, traffic matching each unique value for the specified type constitutes a separate traffic unit. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs.property.value">value</a></code> | <code>str</code> | Requests that match this value constitute a granular traffic unit. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs.property.type"></a>

```python
type: str
```

- *Type:* str

Type of this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#type ComputeSecurityPolicy#type}

---

##### `enable_each_unique_value`<sup>Optional</sup> <a name="enable_each_unique_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs.property.enableEachUniqueValue"></a>

```python
enable_each_unique_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled, traffic matching each unique value for the specified type constitutes a separate traffic unit.

It can only be set to true if value is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#enable_each_unique_value ComputeSecurityPolicy#enable_each_unique_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs.property.value"></a>

```python
value: str
```

- *Type:* str

Requests that match this value constitute a granular traffic unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#value ComputeSecurityPolicy#value}

---

### ComputeSecurityPolicyAdvancedOptionsConfig <a name="ComputeSecurityPolicyAdvancedOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig(
  json_custom_config: ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig = None,
  json_parsing: str = None,
  log_level: str = None,
  user_ip_request_headers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig">json_custom_config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | json_custom_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.jsonParsing">json_parsing</a></code> | <code>str</code> | JSON body parsing. Supported values include: "DISABLED", "STANDARD". |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.logLevel">log_level</a></code> | <code>str</code> | Logging level. Supported values include: "NORMAL", "VERBOSE". |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.userIpRequestHeaders">user_ip_request_headers</a></code> | <code>typing.List[str]</code> | An optional list of case-insensitive request header names to use for resolving the callers client IP address. |

---

##### `json_custom_config`<sup>Optional</sup> <a name="json_custom_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig"></a>

```python
json_custom_config: ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

json_custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#json_custom_config ComputeSecurityPolicy#json_custom_config}

---

##### `json_parsing`<sup>Optional</sup> <a name="json_parsing" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.jsonParsing"></a>

```python
json_parsing: str
```

- *Type:* str

JSON body parsing. Supported values include: "DISABLED", "STANDARD".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#json_parsing ComputeSecurityPolicy#json_parsing}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

Logging level. Supported values include: "NORMAL", "VERBOSE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#log_level ComputeSecurityPolicy#log_level}

---

##### `user_ip_request_headers`<sup>Optional</sup> <a name="user_ip_request_headers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig.property.userIpRequestHeaders"></a>

```python
user_ip_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

An optional list of case-insensitive request header names to use for resolving the callers client IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#user_ip_request_headers ComputeSecurityPolicy#user_ip_request_headers}

---

### ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig <a name="ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig(
  content_types: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes">content_types</a></code> | <code>typing.List[str]</code> | A list of custom Content-Type header values to apply the JSON parsing. |

---

##### `content_types`<sup>Required</sup> <a name="content_types" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes"></a>

```python
content_types: typing.List[str]
```

- *Type:* typing.List[str]

A list of custom Content-Type header values to apply the JSON parsing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#content_types ComputeSecurityPolicy#content_types}

---

### ComputeSecurityPolicyConfig <a name="ComputeSecurityPolicyConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  adaptive_protection_config: ComputeSecurityPolicyAdaptiveProtectionConfig = None,
  advanced_options_config: ComputeSecurityPolicyAdvancedOptionsConfig = None,
  description: str = None,
  id: str = None,
  project: str = None,
  recaptcha_options_config: ComputeSecurityPolicyRecaptchaOptionsConfig = None,
  rule: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRule]] = None,
  timeouts: ComputeSecurityPolicyTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.name">name</a></code> | <code>str</code> | The name of the security policy. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.adaptiveProtectionConfig">adaptive_protection_config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a></code> | adaptive_protection_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.advancedOptionsConfig">advanced_options_config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a></code> | advanced_options_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.description">description</a></code> | <code>str</code> | An optional description of this security policy. Max size is 2048. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#id ComputeSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.project">project</a></code> | <code>str</code> | The project in which the resource belongs. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.recaptchaOptionsConfig">recaptcha_options_config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a></code> | recaptcha_options_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.type">type</a></code> | <code>str</code> | The type indicates the intended use of the security policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#name ComputeSecurityPolicy#name}

---

##### `adaptive_protection_config`<sup>Optional</sup> <a name="adaptive_protection_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.adaptiveProtectionConfig"></a>

```python
adaptive_protection_config: ComputeSecurityPolicyAdaptiveProtectionConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a>

adaptive_protection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#adaptive_protection_config ComputeSecurityPolicy#adaptive_protection_config}

---

##### `advanced_options_config`<sup>Optional</sup> <a name="advanced_options_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.advancedOptionsConfig"></a>

```python
advanced_options_config: ComputeSecurityPolicyAdvancedOptionsConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a>

advanced_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#advanced_options_config ComputeSecurityPolicy#advanced_options_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this security policy. Max size is 2048.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#description ComputeSecurityPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#id ComputeSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project in which the resource belongs. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#project ComputeSecurityPolicy#project}

---

##### `recaptcha_options_config`<sup>Optional</sup> <a name="recaptcha_options_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.recaptchaOptionsConfig"></a>

```python
recaptcha_options_config: ComputeSecurityPolicyRecaptchaOptionsConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a>

recaptcha_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#recaptcha_options_config ComputeSecurityPolicy#recaptcha_options_config}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#rule ComputeSecurityPolicy#rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.timeouts"></a>

```python
timeouts: ComputeSecurityPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#timeouts ComputeSecurityPolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type indicates the intended use of the security policy.

CLOUD_ARMOR - Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers. CLOUD_ARMOR_EDGE - Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#type ComputeSecurityPolicy#type}

---

### ComputeSecurityPolicyRecaptchaOptionsConfig <a name="ComputeSecurityPolicyRecaptchaOptionsConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig(
  redirect_site_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig.property.redirectSiteKey">redirect_site_key</a></code> | <code>str</code> | A field to supply a reCAPTCHA site key to be used for all the rules using the redirect action with the type of GOOGLE_RECAPTCHA under the security policy. |

---

##### `redirect_site_key`<sup>Required</sup> <a name="redirect_site_key" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig.property.redirectSiteKey"></a>

```python
redirect_site_key: str
```

- *Type:* str

A field to supply a reCAPTCHA site key to be used for all the rules using the redirect action with the type of GOOGLE_RECAPTCHA under the security policy.

The specified site key needs to be created from the reCAPTCHA API. The user is responsible for the validity of the specified site key. If not specified, a Google-managed site key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#redirect_site_key ComputeSecurityPolicy#redirect_site_key}

---

### ComputeSecurityPolicyRule <a name="ComputeSecurityPolicyRule" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRule(
  action: str,
  match: ComputeSecurityPolicyRuleMatch,
  priority: typing.Union[int, float],
  description: str = None,
  header_action: ComputeSecurityPolicyRuleHeaderAction = None,
  preconfigured_waf_config: ComputeSecurityPolicyRulePreconfiguredWafConfig = None,
  preview: typing.Union[bool, IResolvable] = None,
  rate_limit_options: ComputeSecurityPolicyRuleRateLimitOptions = None,
  redirect_options: ComputeSecurityPolicyRuleRedirectOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.action">action</a></code> | <code>str</code> | Action to take when match matches the request. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | An unique positive integer indicating the priority of evaluation for a rule. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.description">description</a></code> | <code>str</code> | An optional description of this rule. Max size is 64. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.headerAction">header_action</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a></code> | header_action block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.preconfiguredWafConfig">preconfigured_waf_config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.preview">preview</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, the action specified above is not enforced. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.rateLimitOptions">rate_limit_options</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a></code> | rate_limit_options block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.redirectOptions">redirect_options</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a></code> | redirect_options block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.action"></a>

```python
action: str
```

- *Type:* str

Action to take when match matches the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#action ComputeSecurityPolicy#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.match"></a>

```python
match: ComputeSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#match ComputeSecurityPolicy#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An unique positive integer indicating the priority of evaluation for a rule.

Rules are evaluated from highest priority (lowest numerically) to lowest priority (highest numerically) in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#priority ComputeSecurityPolicy#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this rule. Max size is 64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#description ComputeSecurityPolicy#description}

---

##### `header_action`<sup>Optional</sup> <a name="header_action" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.headerAction"></a>

```python
header_action: ComputeSecurityPolicyRuleHeaderAction
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a>

header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#header_action ComputeSecurityPolicy#header_action}

---

##### `preconfigured_waf_config`<sup>Optional</sup> <a name="preconfigured_waf_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.preconfiguredWafConfig"></a>

```python
preconfigured_waf_config: ComputeSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#preconfigured_waf_config ComputeSecurityPolicy#preconfigured_waf_config}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.preview"></a>

```python
preview: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, the action specified above is not enforced.

Stackdriver logs for requests that trigger a preview action are annotated as such.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#preview ComputeSecurityPolicy#preview}

---

##### `rate_limit_options`<sup>Optional</sup> <a name="rate_limit_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.rateLimitOptions"></a>

```python
rate_limit_options: ComputeSecurityPolicyRuleRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a>

rate_limit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#rate_limit_options ComputeSecurityPolicy#rate_limit_options}

---

##### `redirect_options`<sup>Optional</sup> <a name="redirect_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule.property.redirectOptions"></a>

```python
redirect_options: ComputeSecurityPolicyRuleRedirectOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a>

redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#redirect_options ComputeSecurityPolicy#redirect_options}

---

### ComputeSecurityPolicyRuleHeaderAction <a name="ComputeSecurityPolicyRuleHeaderAction" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction(
  request_headers_to_adds: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction.property.requestHeadersToAdds">request_headers_to_adds</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]]</code> | request_headers_to_adds block. |

---

##### `request_headers_to_adds`<sup>Required</sup> <a name="request_headers_to_adds" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction.property.requestHeadersToAdds"></a>

```python
request_headers_to_adds: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]]

request_headers_to_adds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#request_headers_to_adds ComputeSecurityPolicy#request_headers_to_adds}

---

### ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds <a name="ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds(
  header_name: str,
  header_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerName">header_name</a></code> | <code>str</code> | The name of the header to set. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerValue">header_value</a></code> | <code>str</code> | The value to set the named header to. |

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

The name of the header to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#header_name ComputeSecurityPolicy#header_name}

---

##### `header_value`<sup>Optional</sup> <a name="header_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

The value to set the named header to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#header_value ComputeSecurityPolicy#header_value}

---

### ComputeSecurityPolicyRuleMatch <a name="ComputeSecurityPolicyRuleMatch" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleMatch(
  config: ComputeSecurityPolicyRuleMatchConfig = None,
  expr: ComputeSecurityPolicyRuleMatchExpr = None,
  expr_options: ComputeSecurityPolicyRuleMatchExprOptions = None,
  versioned_expr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a></code> | expr block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.exprOptions">expr_options</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions">ComputeSecurityPolicyRuleMatchExprOptions</a></code> | expr_options block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.versionedExpr">versioned_expr</a></code> | <code>str</code> | Predefined rule expression. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.config"></a>

```python
config: ComputeSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#config ComputeSecurityPolicy#config}

---

##### `expr`<sup>Optional</sup> <a name="expr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.expr"></a>

```python
expr: ComputeSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#expr ComputeSecurityPolicy#expr}

---

##### `expr_options`<sup>Optional</sup> <a name="expr_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.exprOptions"></a>

```python
expr_options: ComputeSecurityPolicyRuleMatchExprOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions">ComputeSecurityPolicyRuleMatchExprOptions</a>

expr_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#expr_options ComputeSecurityPolicy#expr_options}

---

##### `versioned_expr`<sup>Optional</sup> <a name="versioned_expr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch.property.versionedExpr"></a>

```python
versioned_expr: str
```

- *Type:* str

Predefined rule expression.

If this field is specified, config must also be specified. Available options:   SRC_IPS_V1: Must specify the corresponding src_ip_ranges field in config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#versioned_expr ComputeSecurityPolicy#versioned_expr}

---

### ComputeSecurityPolicyRuleMatchConfig <a name="ComputeSecurityPolicyRuleMatchConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig(
  src_ip_ranges: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | Set of IP addresses or ranges (IPV4 or IPV6) in CIDR notation to match against inbound traffic. |

---

##### `src_ip_ranges`<sup>Required</sup> <a name="src_ip_ranges" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Set of IP addresses or ranges (IPV4 or IPV6) in CIDR notation to match against inbound traffic.

There is a limit of 10 IP ranges per rule. A value of '*' matches all IPs (can be used to override the default behavior).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#src_ip_ranges ComputeSecurityPolicy#src_ip_ranges}

---

### ComputeSecurityPolicyRuleMatchExpr <a name="ComputeSecurityPolicyRuleMatchExpr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr(
  expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#expression ComputeSecurityPolicy#expression}

---

### ComputeSecurityPolicyRuleMatchExprOptions <a name="ComputeSecurityPolicyRuleMatchExprOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions(
  recaptcha_options: ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions.property.recaptchaOptions">recaptcha_options</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a></code> | recaptcha_options block. |

---

##### `recaptcha_options`<sup>Required</sup> <a name="recaptcha_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions.property.recaptchaOptions"></a>

```python
recaptcha_options: ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a>

recaptcha_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#recaptcha_options ComputeSecurityPolicy#recaptcha_options}

---

### ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions <a name="ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions(
  action_token_site_keys: typing.List[str] = None,
  session_token_site_keys: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions.property.actionTokenSiteKeys">action_token_site_keys</a></code> | <code>typing.List[str]</code> | A list of site keys to be used during the validation of reCAPTCHA action-tokens. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions.property.sessionTokenSiteKeys">session_token_site_keys</a></code> | <code>typing.List[str]</code> | A list of site keys to be used during the validation of reCAPTCHA session-tokens. |

---

##### `action_token_site_keys`<sup>Optional</sup> <a name="action_token_site_keys" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions.property.actionTokenSiteKeys"></a>

```python
action_token_site_keys: typing.List[str]
```

- *Type:* typing.List[str]

A list of site keys to be used during the validation of reCAPTCHA action-tokens.

The provided site keys need to be created from reCAPTCHA API under the same project where the security policy is created

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#action_token_site_keys ComputeSecurityPolicy#action_token_site_keys}

---

##### `session_token_site_keys`<sup>Optional</sup> <a name="session_token_site_keys" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions.property.sessionTokenSiteKeys"></a>

```python
session_token_site_keys: typing.List[str]
```

- *Type:* typing.List[str]

A list of site keys to be used during the validation of reCAPTCHA session-tokens.

The provided site keys need to be created from reCAPTCHA API under the same project where the security policy is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#session_token_site_keys ComputeSecurityPolicy#session_token_site_keys}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfig <a name="ComputeSecurityPolicyRulePreconfiguredWafConfig" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig(
  exclusion: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig.property.exclusion">exclusion</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]]</code> | exclusion block. |

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig.property.exclusion"></a>

```python
exclusion: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#exclusion ComputeSecurityPolicy#exclusion}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion(
  target_rule_set: str,
  request_cookie: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie]] = None,
  request_header: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader]] = None,
  request_query_param: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam]] = None,
  request_uri: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri]] = None,
  target_rule_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet">target_rule_set</a></code> | <code>str</code> | Target WAF rule set to apply the preconfigured WAF exclusion. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie">request_cookie</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]]</code> | request_cookie block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader">request_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]]</code> | request_header block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam">request_query_param</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]]</code> | request_query_param block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri">request_uri</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]]</code> | request_uri block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds">target_rule_ids</a></code> | <code>typing.List[str]</code> | A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. |

---

##### `target_rule_set`<sup>Required</sup> <a name="target_rule_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet"></a>

```python
target_rule_set: str
```

- *Type:* str

Target WAF rule set to apply the preconfigured WAF exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#target_rule_set ComputeSecurityPolicy#target_rule_set}

---

##### `request_cookie`<sup>Optional</sup> <a name="request_cookie" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie"></a>

```python
request_cookie: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]]

request_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#request_cookie ComputeSecurityPolicy#request_cookie}

---

##### `request_header`<sup>Optional</sup> <a name="request_header" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader"></a>

```python
request_header: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]]

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#request_header ComputeSecurityPolicy#request_header}

---

##### `request_query_param`<sup>Optional</sup> <a name="request_query_param" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam"></a>

```python
request_query_param: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]]

request_query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#request_query_param ComputeSecurityPolicy#request_query_param}

---

##### `request_uri`<sup>Optional</sup> <a name="request_uri" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri"></a>

```python
request_uri: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]]

request_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#request_uri ComputeSecurityPolicy#request_uri}

---

##### `target_rule_ids`<sup>Optional</sup> <a name="target_rule_ids" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds"></a>

```python
target_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.

If omitted, it refers to all the rule IDs under the WAF rule set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#target_rule_ids ComputeSecurityPolicy#target_rule_ids}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie(
  operator: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator">operator</a></code> | <code>str</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value">value</a></code> | <code>str</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator"></a>

```python
operator: str
```

- *Type:* str

You can specify an exact match or a partial match by using a field operator and a field value.

Available options: EQUALS: The operator matches if the field value equals the specified value. STARTS_WITH: The operator matches if the field value starts with the specified value. ENDS_WITH: The operator matches if the field value ends with the specified value. CONTAINS: The operator matches if the field value contains the specified value. EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#operator ComputeSecurityPolicy#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value"></a>

```python
value: str
```

- *Type:* str

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#value ComputeSecurityPolicy#value}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader(
  operator: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator">operator</a></code> | <code>str</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value">value</a></code> | <code>str</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator"></a>

```python
operator: str
```

- *Type:* str

You can specify an exact match or a partial match by using a field operator and a field value.

Available options: EQUALS: The operator matches if the field value equals the specified value. STARTS_WITH: The operator matches if the field value starts with the specified value. ENDS_WITH: The operator matches if the field value ends with the specified value. CONTAINS: The operator matches if the field value contains the specified value. EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#operator ComputeSecurityPolicy#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value"></a>

```python
value: str
```

- *Type:* str

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#value ComputeSecurityPolicy#value}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam(
  operator: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator">operator</a></code> | <code>str</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value">value</a></code> | <code>str</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator"></a>

```python
operator: str
```

- *Type:* str

You can specify an exact match or a partial match by using a field operator and a field value.

Available options: EQUALS: The operator matches if the field value equals the specified value. STARTS_WITH: The operator matches if the field value starts with the specified value. ENDS_WITH: The operator matches if the field value ends with the specified value. CONTAINS: The operator matches if the field value contains the specified value. EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#operator ComputeSecurityPolicy#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value"></a>

```python
value: str
```

- *Type:* str

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#value ComputeSecurityPolicy#value}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri(
  operator: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator">operator</a></code> | <code>str</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value">value</a></code> | <code>str</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator"></a>

```python
operator: str
```

- *Type:* str

You can specify an exact match or a partial match by using a field operator and a field value.

Available options: EQUALS: The operator matches if the field value equals the specified value. STARTS_WITH: The operator matches if the field value starts with the specified value. ENDS_WITH: The operator matches if the field value ends with the specified value. CONTAINS: The operator matches if the field value contains the specified value. EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#operator ComputeSecurityPolicy#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value"></a>

```python
value: str
```

- *Type:* str

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#value ComputeSecurityPolicy#value}

---

### ComputeSecurityPolicyRuleRateLimitOptions <a name="ComputeSecurityPolicyRuleRateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions(
  conform_action: str,
  exceed_action: str,
  rate_limit_threshold: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold,
  ban_duration_sec: typing.Union[int, float] = None,
  ban_threshold: ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold = None,
  enforce_on_key: str = None,
  enforce_on_key_configs: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs]] = None,
  enforce_on_key_name: str = None,
  exceed_redirect_options: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.conformAction">conform_action</a></code> | <code>str</code> | Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.exceedAction">exceed_action</a></code> | <code>str</code> | Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.rateLimitThreshold">rate_limit_threshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | rate_limit_threshold block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.banDurationSec">ban_duration_sec</a></code> | <code>typing.Union[int, float]</code> | Can only be specified if the action for the rule is "rate_based_ban". |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.banThreshold">ban_threshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | ban_threshold block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.enforceOnKey">enforce_on_key</a></code> | <code>str</code> | Determines the key to enforce the rateLimitThreshold on. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyConfigs">enforce_on_key_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]]</code> | enforce_on_key_configs block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyName">enforce_on_key_name</a></code> | <code>str</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.exceedRedirectOptions">exceed_redirect_options</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a></code> | exceed_redirect_options block. |

---

##### `conform_action`<sup>Required</sup> <a name="conform_action" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.conformAction"></a>

```python
conform_action: str
```

- *Type:* str

Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#conform_action ComputeSecurityPolicy#conform_action}

---

##### `exceed_action`<sup>Required</sup> <a name="exceed_action" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.exceedAction"></a>

```python
exceed_action: str
```

- *Type:* str

Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint.

Valid options are "deny()" where valid values for status are 403, 404, 429, and 502, and "redirect" where the redirect parameters come from exceedRedirectOptions below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#exceed_action ComputeSecurityPolicy#exceed_action}

---

##### `rate_limit_threshold`<sup>Required</sup> <a name="rate_limit_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.rateLimitThreshold"></a>

```python
rate_limit_threshold: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

rate_limit_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#rate_limit_threshold ComputeSecurityPolicy#rate_limit_threshold}

---

##### `ban_duration_sec`<sup>Optional</sup> <a name="ban_duration_sec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.banDurationSec"></a>

```python
ban_duration_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Can only be specified if the action for the rule is "rate_based_ban".

If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#ban_duration_sec ComputeSecurityPolicy#ban_duration_sec}

---

##### `ban_threshold`<sup>Optional</sup> <a name="ban_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.banThreshold"></a>

```python
ban_threshold: ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

ban_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#ban_threshold ComputeSecurityPolicy#ban_threshold}

---

##### `enforce_on_key`<sup>Optional</sup> <a name="enforce_on_key" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.enforceOnKey"></a>

```python
enforce_on_key: str
```

- *Type:* str

Determines the key to enforce the rateLimitThreshold on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#enforce_on_key ComputeSecurityPolicy#enforce_on_key}

---

##### `enforce_on_key_configs`<sup>Optional</sup> <a name="enforce_on_key_configs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyConfigs"></a>

```python
enforce_on_key_configs: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]]

enforce_on_key_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#enforce_on_key_configs ComputeSecurityPolicy#enforce_on_key_configs}

---

##### `enforce_on_key_name`<sup>Optional</sup> <a name="enforce_on_key_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyName"></a>

```python
enforce_on_key_name: str
```

- *Type:* str

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#enforce_on_key_name ComputeSecurityPolicy#enforce_on_key_name}

---

##### `exceed_redirect_options`<sup>Optional</sup> <a name="exceed_redirect_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions.property.exceedRedirectOptions"></a>

```python
exceed_redirect_options: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a>

exceed_redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#exceed_redirect_options ComputeSecurityPolicy#exceed_redirect_options}

---

### ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold <a name="ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold(
  count: typing.Union[int, float],
  interval_sec: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.property.intervalSec">interval_sec</a></code> | <code>typing.Union[int, float]</code> | Interval over which the threshold is computed. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#count ComputeSecurityPolicy#count}

---

##### `interval_sec`<sup>Required</sup> <a name="interval_sec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.property.intervalSec"></a>

```python
interval_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#interval_sec ComputeSecurityPolicy#interval_sec}

---

### ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs <a name="ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs(
  enforce_on_key_name: str = None,
  enforce_on_key_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName">enforce_on_key_name</a></code> | <code>str</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType">enforce_on_key_type</a></code> | <code>str</code> | Determines the key to enforce the rate_limit_threshold on. |

---

##### `enforce_on_key_name`<sup>Optional</sup> <a name="enforce_on_key_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName"></a>

```python
enforce_on_key_name: str
```

- *Type:* str

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#enforce_on_key_name ComputeSecurityPolicy#enforce_on_key_name}

---

##### `enforce_on_key_type`<sup>Optional</sup> <a name="enforce_on_key_type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType"></a>

```python
enforce_on_key_type: str
```

- *Type:* str

Determines the key to enforce the rate_limit_threshold on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#enforce_on_key_type ComputeSecurityPolicy#enforce_on_key_type}

---

### ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions <a name="ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions(
  type: str,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.property.type">type</a></code> | <code>str</code> | Type of the redirect action. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.property.target">target</a></code> | <code>str</code> | Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the redirect action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#type ComputeSecurityPolicy#type}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.property.target"></a>

```python
target: str
```

- *Type:* str

Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#target ComputeSecurityPolicy#target}

---

### ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold <a name="ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold(
  count: typing.Union[int, float],
  interval_sec: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.intervalSec">interval_sec</a></code> | <code>typing.Union[int, float]</code> | Interval over which the threshold is computed. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#count ComputeSecurityPolicy#count}

---

##### `interval_sec`<sup>Required</sup> <a name="interval_sec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.intervalSec"></a>

```python
interval_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#interval_sec ComputeSecurityPolicy#interval_sec}

---

### ComputeSecurityPolicyRuleRedirectOptions <a name="ComputeSecurityPolicyRuleRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions(
  type: str,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions.property.type">type</a></code> | <code>str</code> | Type of the redirect action. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions.property.target">target</a></code> | <code>str</code> | Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the redirect action.

Available options: EXTERNAL_302: Must specify the corresponding target field in config. GOOGLE_RECAPTCHA: Cannot specify target field in config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#type ComputeSecurityPolicy#type}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions.property.target"></a>

```python
target: str
```

- *Type:* str

Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#target ComputeSecurityPolicy#target}

---

### ComputeSecurityPolicyTimeouts <a name="ComputeSecurityPolicyTimeouts" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#create ComputeSecurityPolicy#create}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#delete ComputeSecurityPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#update ComputeSecurityPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#create ComputeSecurityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#delete ComputeSecurityPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#update ComputeSecurityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.putThresholdConfigs">put_threshold_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resetRuleVisibility">reset_rule_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resetThresholdConfigs">reset_threshold_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_threshold_configs` <a name="put_threshold_configs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.putThresholdConfigs"></a>

```python
def put_threshold_configs(
  value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.putThresholdConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs</a>]]

---

##### `reset_enable` <a name="reset_enable" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_rule_visibility` <a name="reset_rule_visibility" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resetRuleVisibility"></a>

```python
def reset_rule_visibility() -> None
```

##### `reset_threshold_configs` <a name="reset_threshold_configs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resetThresholdConfigs"></a>

```python
def reset_threshold_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.thresholdConfigs">threshold_configs</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibilityInput">rule_visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.thresholdConfigsInput">threshold_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibility">rule_visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threshold_configs`<sup>Required</sup> <a name="threshold_configs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.thresholdConfigs"></a>

```python
threshold_configs: ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList</a>

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule_visibility_input`<sup>Optional</sup> <a name="rule_visibility_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibilityInput"></a>

```python
rule_visibility_input: str
```

- *Type:* str

---

##### `threshold_configs_input`<sup>Optional</sup> <a name="threshold_configs_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.thresholdConfigsInput"></a>

```python
threshold_configs_input: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs</a>]]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule_visibility`<sup>Required</sup> <a name="rule_visibility" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibility"></a>

```python
rule_visibility: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a>

---


### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs</a>]]

---


### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.putTrafficGranularityConfigs">put_traffic_granularity_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetAutoDeployConfidenceThreshold">reset_auto_deploy_confidence_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetAutoDeployExpirationSec">reset_auto_deploy_expiration_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetAutoDeployImpactedBaselineThreshold">reset_auto_deploy_impacted_baseline_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetAutoDeployLoadThreshold">reset_auto_deploy_load_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetDetectionAbsoluteQps">reset_detection_absolute_qps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetDetectionLoadThreshold">reset_detection_load_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetDetectionRelativeToBaselineQps">reset_detection_relative_to_baseline_qps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetTrafficGranularityConfigs">reset_traffic_granularity_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_traffic_granularity_configs` <a name="put_traffic_granularity_configs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.putTrafficGranularityConfigs"></a>

```python
def put_traffic_granularity_configs(
  value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.putTrafficGranularityConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs</a>]]

---

##### `reset_auto_deploy_confidence_threshold` <a name="reset_auto_deploy_confidence_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetAutoDeployConfidenceThreshold"></a>

```python
def reset_auto_deploy_confidence_threshold() -> None
```

##### `reset_auto_deploy_expiration_sec` <a name="reset_auto_deploy_expiration_sec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetAutoDeployExpirationSec"></a>

```python
def reset_auto_deploy_expiration_sec() -> None
```

##### `reset_auto_deploy_impacted_baseline_threshold` <a name="reset_auto_deploy_impacted_baseline_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetAutoDeployImpactedBaselineThreshold"></a>

```python
def reset_auto_deploy_impacted_baseline_threshold() -> None
```

##### `reset_auto_deploy_load_threshold` <a name="reset_auto_deploy_load_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetAutoDeployLoadThreshold"></a>

```python
def reset_auto_deploy_load_threshold() -> None
```

##### `reset_detection_absolute_qps` <a name="reset_detection_absolute_qps" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetDetectionAbsoluteQps"></a>

```python
def reset_detection_absolute_qps() -> None
```

##### `reset_detection_load_threshold` <a name="reset_detection_load_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetDetectionLoadThreshold"></a>

```python
def reset_detection_load_threshold() -> None
```

##### `reset_detection_relative_to_baseline_qps` <a name="reset_detection_relative_to_baseline_qps" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetDetectionRelativeToBaselineQps"></a>

```python
def reset_detection_relative_to_baseline_qps() -> None
```

##### `reset_traffic_granularity_configs` <a name="reset_traffic_granularity_configs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resetTrafficGranularityConfigs"></a>

```python
def reset_traffic_granularity_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.trafficGranularityConfigs">traffic_granularity_configs</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployConfidenceThresholdInput">auto_deploy_confidence_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployExpirationSecInput">auto_deploy_expiration_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployImpactedBaselineThresholdInput">auto_deploy_impacted_baseline_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployLoadThresholdInput">auto_deploy_load_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionAbsoluteQpsInput">detection_absolute_qps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionLoadThresholdInput">detection_load_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionRelativeToBaselineQpsInput">detection_relative_to_baseline_qps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.trafficGranularityConfigsInput">traffic_granularity_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployConfidenceThreshold">auto_deploy_confidence_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployExpirationSec">auto_deploy_expiration_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployImpactedBaselineThreshold">auto_deploy_impacted_baseline_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployLoadThreshold">auto_deploy_load_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionAbsoluteQps">detection_absolute_qps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionLoadThreshold">detection_load_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionRelativeToBaselineQps">detection_relative_to_baseline_qps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `traffic_granularity_configs`<sup>Required</sup> <a name="traffic_granularity_configs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.trafficGranularityConfigs"></a>

```python
traffic_granularity_configs: ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList</a>

---

##### `auto_deploy_confidence_threshold_input`<sup>Optional</sup> <a name="auto_deploy_confidence_threshold_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployConfidenceThresholdInput"></a>

```python
auto_deploy_confidence_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_deploy_expiration_sec_input`<sup>Optional</sup> <a name="auto_deploy_expiration_sec_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployExpirationSecInput"></a>

```python
auto_deploy_expiration_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_deploy_impacted_baseline_threshold_input`<sup>Optional</sup> <a name="auto_deploy_impacted_baseline_threshold_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployImpactedBaselineThresholdInput"></a>

```python
auto_deploy_impacted_baseline_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_deploy_load_threshold_input`<sup>Optional</sup> <a name="auto_deploy_load_threshold_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployLoadThresholdInput"></a>

```python
auto_deploy_load_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `detection_absolute_qps_input`<sup>Optional</sup> <a name="detection_absolute_qps_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionAbsoluteQpsInput"></a>

```python
detection_absolute_qps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `detection_load_threshold_input`<sup>Optional</sup> <a name="detection_load_threshold_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionLoadThresholdInput"></a>

```python
detection_load_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `detection_relative_to_baseline_qps_input`<sup>Optional</sup> <a name="detection_relative_to_baseline_qps_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionRelativeToBaselineQpsInput"></a>

```python
detection_relative_to_baseline_qps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `traffic_granularity_configs_input`<sup>Optional</sup> <a name="traffic_granularity_configs_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.trafficGranularityConfigsInput"></a>

```python
traffic_granularity_configs_input: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs</a>]]

---

##### `auto_deploy_confidence_threshold`<sup>Required</sup> <a name="auto_deploy_confidence_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployConfidenceThreshold"></a>

```python
auto_deploy_confidence_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_deploy_expiration_sec`<sup>Required</sup> <a name="auto_deploy_expiration_sec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployExpirationSec"></a>

```python
auto_deploy_expiration_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_deploy_impacted_baseline_threshold`<sup>Required</sup> <a name="auto_deploy_impacted_baseline_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployImpactedBaselineThreshold"></a>

```python
auto_deploy_impacted_baseline_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_deploy_load_threshold`<sup>Required</sup> <a name="auto_deploy_load_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployLoadThreshold"></a>

```python
auto_deploy_load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `detection_absolute_qps`<sup>Required</sup> <a name="detection_absolute_qps" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionAbsoluteQps"></a>

```python
detection_absolute_qps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `detection_load_threshold`<sup>Required</sup> <a name="detection_load_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionLoadThreshold"></a>

```python
detection_load_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `detection_relative_to_baseline_qps`<sup>Required</sup> <a name="detection_relative_to_baseline_qps" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionRelativeToBaselineQps"></a>

```python
detection_relative_to_baseline_qps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs</a>]

---


### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs</a>]]

---


### ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference <a name="ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resetEnableEachUniqueValue">reset_enable_each_unique_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_each_unique_value` <a name="reset_enable_each_unique_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resetEnableEachUniqueValue"></a>

```python
def reset_enable_each_unique_value() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.enableEachUniqueValueInput">enable_each_unique_value_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.enableEachUniqueValue">enable_each_unique_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_each_unique_value_input`<sup>Optional</sup> <a name="enable_each_unique_value_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.enableEachUniqueValueInput"></a>

```python
enable_each_unique_value_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `enable_each_unique_value`<sup>Required</sup> <a name="enable_each_unique_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.enableEachUniqueValue"></a>

```python
enable_each_unique_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs</a>]

---


### ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference <a name="ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.putLayer7DdosDefenseConfig">put_layer7_ddos_defense_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resetLayer7DdosDefenseConfig">reset_layer7_ddos_defense_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_layer7_ddos_defense_config` <a name="put_layer7_ddos_defense_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.putLayer7DdosDefenseConfig"></a>

```python
def put_layer7_ddos_defense_config(
  enable: typing.Union[bool, IResolvable] = None,
  rule_visibility: str = None,
  threshold_configs: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs]] = None
) -> None
```

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.putLayer7DdosDefenseConfig.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, enables CAAP for L7 DDoS detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#enable ComputeSecurityPolicy#enable}

---

###### `rule_visibility`<sup>Optional</sup> <a name="rule_visibility" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.putLayer7DdosDefenseConfig.parameter.ruleVisibility"></a>

- *Type:* str

Rule visibility. Supported values include: "STANDARD", "PREMIUM".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#rule_visibility ComputeSecurityPolicy#rule_visibility}

---

###### `threshold_configs`<sup>Optional</sup> <a name="threshold_configs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.putLayer7DdosDefenseConfig.parameter.thresholdConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs</a>]]

threshold_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#threshold_configs ComputeSecurityPolicy#threshold_configs}

---

##### `reset_layer7_ddos_defense_config` <a name="reset_layer7_ddos_defense_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resetLayer7DdosDefenseConfig"></a>

```python
def reset_layer7_ddos_defense_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfig">layer7_ddos_defense_config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfigInput">layer7_ddos_defense_config_input</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `layer7_ddos_defense_config`<sup>Required</sup> <a name="layer7_ddos_defense_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfig"></a>

```python
layer7_ddos_defense_config: ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference</a>

---

##### `layer7_ddos_defense_config_input`<sup>Optional</sup> <a name="layer7_ddos_defense_config_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfigInput"></a>

```python
layer7_ddos_defense_config_input: ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">ComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSecurityPolicyAdaptiveProtectionConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdaptiveProtectionConfig">ComputeSecurityPolicyAdaptiveProtectionConfig</a>

---


### ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference <a name="ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput">content_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes">content_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_types_input`<sup>Optional</sup> <a name="content_types_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput"></a>

```python
content_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content_types`<sup>Required</sup> <a name="content_types" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes"></a>

```python
content_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---


### ComputeSecurityPolicyAdvancedOptionsConfigOutputReference <a name="ComputeSecurityPolicyAdvancedOptionsConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig">put_json_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig">reset_json_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing">reset_json_parsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetUserIpRequestHeaders">reset_user_ip_request_headers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_json_custom_config` <a name="put_json_custom_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig"></a>

```python
def put_json_custom_config(
  content_types: typing.List[str]
) -> None
```

###### `content_types`<sup>Required</sup> <a name="content_types" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig.parameter.contentTypes"></a>

- *Type:* typing.List[str]

A list of custom Content-Type header values to apply the JSON parsing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#content_types ComputeSecurityPolicy#content_types}

---

##### `reset_json_custom_config` <a name="reset_json_custom_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig"></a>

```python
def reset_json_custom_config() -> None
```

##### `reset_json_parsing` <a name="reset_json_parsing" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing"></a>

```python
def reset_json_parsing() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_user_ip_request_headers` <a name="reset_user_ip_request_headers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resetUserIpRequestHeaders"></a>

```python
def reset_user_ip_request_headers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig">json_custom_config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput">json_custom_config_input</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput">json_parsing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeadersInput">user_ip_request_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing">json_parsing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders">user_ip_request_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_custom_config`<sup>Required</sup> <a name="json_custom_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig"></a>

```python
json_custom_config: ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a>

---

##### `json_custom_config_input`<sup>Optional</sup> <a name="json_custom_config_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput"></a>

```python
json_custom_config_input: ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---

##### `json_parsing_input`<sup>Optional</sup> <a name="json_parsing_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput"></a>

```python
json_parsing_input: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `user_ip_request_headers_input`<sup>Optional</sup> <a name="user_ip_request_headers_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeadersInput"></a>

```python
user_ip_request_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `json_parsing`<sup>Required</sup> <a name="json_parsing" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing"></a>

```python
json_parsing: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `user_ip_request_headers`<sup>Required</sup> <a name="user_ip_request_headers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders"></a>

```python
user_ip_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSecurityPolicyAdvancedOptionsConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyAdvancedOptionsConfig">ComputeSecurityPolicyAdvancedOptionsConfig</a>

---


### ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference <a name="ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKeyInput">redirect_site_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKey">redirect_site_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `redirect_site_key_input`<sup>Optional</sup> <a name="redirect_site_key_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKeyInput"></a>

```python
redirect_site_key_input: str
```

- *Type:* str

---

##### `redirect_site_key`<sup>Required</sup> <a name="redirect_site_key" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKey"></a>

```python
redirect_site_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSecurityPolicyRecaptchaOptionsConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRecaptchaOptionsConfig">ComputeSecurityPolicyRecaptchaOptionsConfig</a>

---


### ComputeSecurityPolicyRuleHeaderActionOutputReference <a name="ComputeSecurityPolicyRuleHeaderActionOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds">put_request_headers_to_adds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_request_headers_to_adds` <a name="put_request_headers_to_adds" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds"></a>

```python
def put_request_headers_to_adds(
  value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds">request_headers_to_adds</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAddsInput">request_headers_to_adds_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `request_headers_to_adds`<sup>Required</sup> <a name="request_headers_to_adds" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds"></a>

```python
request_headers_to_adds: ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a>

---

##### `request_headers_to_adds_input`<sup>Optional</sup> <a name="request_headers_to_adds_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAddsInput"></a>

```python
request_headers_to_adds_input: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSecurityPolicyRuleHeaderAction
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a>

---


### ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList <a name="ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]]

---


### ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference <a name="ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderValue">reset_header_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header_value` <a name="reset_header_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderValue"></a>

```python
def reset_header_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerNameInput">header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValueInput">header_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue">header_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_name_input`<sup>Optional</sup> <a name="header_name_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerNameInput"></a>

```python
header_name_input: str
```

- *Type:* str

---

##### `header_value_input`<sup>Optional</sup> <a name="header_value_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValueInput"></a>

```python
header_value_input: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `header_value`<sup>Required</sup> <a name="header_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]

---


### ComputeSecurityPolicyRuleList <a name="ComputeSecurityPolicyRuleList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeSecurityPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>]]

---


### ComputeSecurityPolicyRuleMatchConfigOutputReference <a name="ComputeSecurityPolicyRuleMatchConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput">src_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `src_ip_ranges_input`<sup>Optional</sup> <a name="src_ip_ranges_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput"></a>

```python
src_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_ranges`<sup>Required</sup> <a name="src_ip_ranges" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a>

---


### ComputeSecurityPolicyRuleMatchExprOptionsOutputReference <a name="ComputeSecurityPolicyRuleMatchExprOptionsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.putRecaptchaOptions">put_recaptcha_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_recaptcha_options` <a name="put_recaptcha_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.putRecaptchaOptions"></a>

```python
def put_recaptcha_options(
  action_token_site_keys: typing.List[str] = None,
  session_token_site_keys: typing.List[str] = None
) -> None
```

###### `action_token_site_keys`<sup>Optional</sup> <a name="action_token_site_keys" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.putRecaptchaOptions.parameter.actionTokenSiteKeys"></a>

- *Type:* typing.List[str]

A list of site keys to be used during the validation of reCAPTCHA action-tokens.

The provided site keys need to be created from reCAPTCHA API under the same project where the security policy is created

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#action_token_site_keys ComputeSecurityPolicy#action_token_site_keys}

---

###### `session_token_site_keys`<sup>Optional</sup> <a name="session_token_site_keys" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.putRecaptchaOptions.parameter.sessionTokenSiteKeys"></a>

- *Type:* typing.List[str]

A list of site keys to be used during the validation of reCAPTCHA session-tokens.

The provided site keys need to be created from reCAPTCHA API under the same project where the security policy is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#session_token_site_keys ComputeSecurityPolicy#session_token_site_keys}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.recaptchaOptions">recaptcha_options</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.recaptchaOptionsInput">recaptcha_options_input</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions">ComputeSecurityPolicyRuleMatchExprOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recaptcha_options`<sup>Required</sup> <a name="recaptcha_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.recaptchaOptions"></a>

```python
recaptcha_options: ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference</a>

---

##### `recaptcha_options_input`<sup>Optional</sup> <a name="recaptcha_options_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.recaptchaOptionsInput"></a>

```python
recaptcha_options_input: ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSecurityPolicyRuleMatchExprOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions">ComputeSecurityPolicyRuleMatchExprOptions</a>

---


### ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference <a name="ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resetActionTokenSiteKeys">reset_action_token_site_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resetSessionTokenSiteKeys">reset_session_token_site_keys</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action_token_site_keys` <a name="reset_action_token_site_keys" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resetActionTokenSiteKeys"></a>

```python
def reset_action_token_site_keys() -> None
```

##### `reset_session_token_site_keys` <a name="reset_session_token_site_keys" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resetSessionTokenSiteKeys"></a>

```python
def reset_session_token_site_keys() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.actionTokenSiteKeysInput">action_token_site_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.sessionTokenSiteKeysInput">session_token_site_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.actionTokenSiteKeys">action_token_site_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.sessionTokenSiteKeys">session_token_site_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_token_site_keys_input`<sup>Optional</sup> <a name="action_token_site_keys_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.actionTokenSiteKeysInput"></a>

```python
action_token_site_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `session_token_site_keys_input`<sup>Optional</sup> <a name="session_token_site_keys_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.sessionTokenSiteKeysInput"></a>

```python
session_token_site_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `action_token_site_keys`<sup>Required</sup> <a name="action_token_site_keys" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.actionTokenSiteKeys"></a>

```python
action_token_site_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `session_token_site_keys`<sup>Required</sup> <a name="session_token_site_keys" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.sessionTokenSiteKeys"></a>

```python
session_token_site_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a>

---


### ComputeSecurityPolicyRuleMatchExprOutputReference <a name="ComputeSecurityPolicyRuleMatchExprOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a>

---


### ComputeSecurityPolicyRuleMatchOutputReference <a name="ComputeSecurityPolicyRuleMatchOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putExpr">put_expr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putExprOptions">put_expr_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetExpr">reset_expr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetExprOptions">reset_expr_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetVersionedExpr">reset_versioned_expr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_config` <a name="put_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putConfig"></a>

```python
def put_config(
  src_ip_ranges: typing.List[str]
) -> None
```

###### `src_ip_ranges`<sup>Required</sup> <a name="src_ip_ranges" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putConfig.parameter.srcIpRanges"></a>

- *Type:* typing.List[str]

Set of IP addresses or ranges (IPV4 or IPV6) in CIDR notation to match against inbound traffic.

There is a limit of 10 IP ranges per rule. A value of '*' matches all IPs (can be used to override the default behavior).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#src_ip_ranges ComputeSecurityPolicy#src_ip_ranges}

---

##### `put_expr` <a name="put_expr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putExpr"></a>

```python
def put_expr(
  expression: str
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putExpr.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#expression ComputeSecurityPolicy#expression}

---

##### `put_expr_options` <a name="put_expr_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putExprOptions"></a>

```python
def put_expr_options(
  recaptcha_options: ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions
) -> None
```

###### `recaptcha_options`<sup>Required</sup> <a name="recaptcha_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.putExprOptions.parameter.recaptchaOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a>

recaptcha_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#recaptcha_options ComputeSecurityPolicy#recaptcha_options}

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_expr` <a name="reset_expr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetExpr"></a>

```python
def reset_expr() -> None
```

##### `reset_expr_options` <a name="reset_expr_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetExprOptions"></a>

```python
def reset_expr_options() -> None
```

##### `reset_versioned_expr` <a name="reset_versioned_expr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.resetVersionedExpr"></a>

```python
def reset_versioned_expr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference">ComputeSecurityPolicyRuleMatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference">ComputeSecurityPolicyRuleMatchExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.exprOptions">expr_options</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference">ComputeSecurityPolicyRuleMatchExprOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.exprInput">expr_input</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.exprOptionsInput">expr_options_input</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions">ComputeSecurityPolicyRuleMatchExprOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.versionedExprInput">versioned_expr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.versionedExpr">versioned_expr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.config"></a>

```python
config: ComputeSecurityPolicyRuleMatchConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfigOutputReference">ComputeSecurityPolicyRuleMatchConfigOutputReference</a>

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.expr"></a>

```python
expr: ComputeSecurityPolicyRuleMatchExprOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOutputReference">ComputeSecurityPolicyRuleMatchExprOutputReference</a>

---

##### `expr_options`<sup>Required</sup> <a name="expr_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.exprOptions"></a>

```python
expr_options: ComputeSecurityPolicyRuleMatchExprOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptionsOutputReference">ComputeSecurityPolicyRuleMatchExprOptionsOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.configInput"></a>

```python
config_input: ComputeSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a>

---

##### `expr_input`<sup>Optional</sup> <a name="expr_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.exprInput"></a>

```python
expr_input: ComputeSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a>

---

##### `expr_options_input`<sup>Optional</sup> <a name="expr_options_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.exprOptionsInput"></a>

```python
expr_options_input: ComputeSecurityPolicyRuleMatchExprOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions">ComputeSecurityPolicyRuleMatchExprOptions</a>

---

##### `versioned_expr_input`<sup>Optional</sup> <a name="versioned_expr_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.versionedExprInput"></a>

```python
versioned_expr_input: str
```

- *Type:* str

---

##### `versioned_expr`<sup>Required</sup> <a name="versioned_expr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.versionedExpr"></a>

```python
versioned_expr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a>

---


### ComputeSecurityPolicyRuleOutputReference <a name="ComputeSecurityPolicyRuleOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putHeaderAction">put_header_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putPreconfiguredWafConfig">put_preconfigured_waf_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRateLimitOptions">put_rate_limit_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRedirectOptions">put_redirect_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetHeaderAction">reset_header_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetPreconfiguredWafConfig">reset_preconfigured_waf_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetPreview">reset_preview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetRateLimitOptions">reset_rate_limit_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetRedirectOptions">reset_redirect_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header_action` <a name="put_header_action" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putHeaderAction"></a>

```python
def put_header_action(
  request_headers_to_adds: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds]]
) -> None
```

###### `request_headers_to_adds`<sup>Required</sup> <a name="request_headers_to_adds" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putHeaderAction.parameter.requestHeadersToAdds"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>]]

request_headers_to_adds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#request_headers_to_adds ComputeSecurityPolicy#request_headers_to_adds}

---

##### `put_match` <a name="put_match" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putMatch"></a>

```python
def put_match(
  config: ComputeSecurityPolicyRuleMatchConfig = None,
  expr: ComputeSecurityPolicyRuleMatchExpr = None,
  expr_options: ComputeSecurityPolicyRuleMatchExprOptions = None,
  versioned_expr: str = None
) -> None
```

###### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putMatch.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchConfig">ComputeSecurityPolicyRuleMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#config ComputeSecurityPolicy#config}

---

###### `expr`<sup>Optional</sup> <a name="expr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putMatch.parameter.expr"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExpr">ComputeSecurityPolicyRuleMatchExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#expr ComputeSecurityPolicy#expr}

---

###### `expr_options`<sup>Optional</sup> <a name="expr_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putMatch.parameter.exprOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchExprOptions">ComputeSecurityPolicyRuleMatchExprOptions</a>

expr_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#expr_options ComputeSecurityPolicy#expr_options}

---

###### `versioned_expr`<sup>Optional</sup> <a name="versioned_expr" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putMatch.parameter.versionedExpr"></a>

- *Type:* str

Predefined rule expression.

If this field is specified, config must also be specified. Available options:   SRC_IPS_V1: Must specify the corresponding src_ip_ranges field in config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#versioned_expr ComputeSecurityPolicy#versioned_expr}

---

##### `put_preconfigured_waf_config` <a name="put_preconfigured_waf_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putPreconfiguredWafConfig"></a>

```python
def put_preconfigured_waf_config(
  exclusion: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion]] = None
) -> None
```

###### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putPreconfiguredWafConfig.parameter.exclusion"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#exclusion ComputeSecurityPolicy#exclusion}

---

##### `put_rate_limit_options` <a name="put_rate_limit_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRateLimitOptions"></a>

```python
def put_rate_limit_options(
  conform_action: str,
  exceed_action: str,
  rate_limit_threshold: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold,
  ban_duration_sec: typing.Union[int, float] = None,
  ban_threshold: ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold = None,
  enforce_on_key: str = None,
  enforce_on_key_configs: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs]] = None,
  enforce_on_key_name: str = None,
  exceed_redirect_options: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions = None
) -> None
```

###### `conform_action`<sup>Required</sup> <a name="conform_action" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRateLimitOptions.parameter.conformAction"></a>

- *Type:* str

Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#conform_action ComputeSecurityPolicy#conform_action}

---

###### `exceed_action`<sup>Required</sup> <a name="exceed_action" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRateLimitOptions.parameter.exceedAction"></a>

- *Type:* str

Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint.

Valid options are "deny()" where valid values for status are 403, 404, 429, and 502, and "redirect" where the redirect parameters come from exceedRedirectOptions below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#exceed_action ComputeSecurityPolicy#exceed_action}

---

###### `rate_limit_threshold`<sup>Required</sup> <a name="rate_limit_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRateLimitOptions.parameter.rateLimitThreshold"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

rate_limit_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#rate_limit_threshold ComputeSecurityPolicy#rate_limit_threshold}

---

###### `ban_duration_sec`<sup>Optional</sup> <a name="ban_duration_sec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRateLimitOptions.parameter.banDurationSec"></a>

- *Type:* typing.Union[int, float]

Can only be specified if the action for the rule is "rate_based_ban".

If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#ban_duration_sec ComputeSecurityPolicy#ban_duration_sec}

---

###### `ban_threshold`<sup>Optional</sup> <a name="ban_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRateLimitOptions.parameter.banThreshold"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

ban_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#ban_threshold ComputeSecurityPolicy#ban_threshold}

---

###### `enforce_on_key`<sup>Optional</sup> <a name="enforce_on_key" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRateLimitOptions.parameter.enforceOnKey"></a>

- *Type:* str

Determines the key to enforce the rateLimitThreshold on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#enforce_on_key ComputeSecurityPolicy#enforce_on_key}

---

###### `enforce_on_key_configs`<sup>Optional</sup> <a name="enforce_on_key_configs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRateLimitOptions.parameter.enforceOnKeyConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]]

enforce_on_key_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#enforce_on_key_configs ComputeSecurityPolicy#enforce_on_key_configs}

---

###### `enforce_on_key_name`<sup>Optional</sup> <a name="enforce_on_key_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRateLimitOptions.parameter.enforceOnKeyName"></a>

- *Type:* str

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#enforce_on_key_name ComputeSecurityPolicy#enforce_on_key_name}

---

###### `exceed_redirect_options`<sup>Optional</sup> <a name="exceed_redirect_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRateLimitOptions.parameter.exceedRedirectOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a>

exceed_redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#exceed_redirect_options ComputeSecurityPolicy#exceed_redirect_options}

---

##### `put_redirect_options` <a name="put_redirect_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRedirectOptions"></a>

```python
def put_redirect_options(
  type: str,
  target: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRedirectOptions.parameter.type"></a>

- *Type:* str

Type of the redirect action.

Available options: EXTERNAL_302: Must specify the corresponding target field in config. GOOGLE_RECAPTCHA: Cannot specify target field in config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#type ComputeSecurityPolicy#type}

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.putRedirectOptions.parameter.target"></a>

- *Type:* str

Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#target ComputeSecurityPolicy#target}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_header_action` <a name="reset_header_action" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetHeaderAction"></a>

```python
def reset_header_action() -> None
```

##### `reset_preconfigured_waf_config` <a name="reset_preconfigured_waf_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetPreconfiguredWafConfig"></a>

```python
def reset_preconfigured_waf_config() -> None
```

##### `reset_preview` <a name="reset_preview" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetPreview"></a>

```python
def reset_preview() -> None
```

##### `reset_rate_limit_options` <a name="reset_rate_limit_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetRateLimitOptions"></a>

```python
def reset_rate_limit_options() -> None
```

##### `reset_redirect_options` <a name="reset_redirect_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.resetRedirectOptions"></a>

```python
def reset_redirect_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.headerAction">header_action</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference">ComputeSecurityPolicyRuleHeaderActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference">ComputeSecurityPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.preconfiguredWafConfig">preconfigured_waf_config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference">ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.rateLimitOptions">rate_limit_options</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.redirectOptions">redirect_options</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference">ComputeSecurityPolicyRuleRedirectOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.headerActionInput">header_action_input</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.preconfiguredWafConfigInput">preconfigured_waf_config_input</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.previewInput">preview_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.rateLimitOptionsInput">rate_limit_options_input</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.redirectOptionsInput">redirect_options_input</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.preview">preview</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_action`<sup>Required</sup> <a name="header_action" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.headerAction"></a>

```python
header_action: ComputeSecurityPolicyRuleHeaderActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderActionOutputReference">ComputeSecurityPolicyRuleHeaderActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.match"></a>

```python
match: ComputeSecurityPolicyRuleMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatchOutputReference">ComputeSecurityPolicyRuleMatchOutputReference</a>

---

##### `preconfigured_waf_config`<sup>Required</sup> <a name="preconfigured_waf_config" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.preconfiguredWafConfig"></a>

```python
preconfigured_waf_config: ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference">ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference</a>

---

##### `rate_limit_options`<sup>Required</sup> <a name="rate_limit_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.rateLimitOptions"></a>

```python
rate_limit_options: ComputeSecurityPolicyRuleRateLimitOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsOutputReference</a>

---

##### `redirect_options`<sup>Required</sup> <a name="redirect_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.redirectOptions"></a>

```python
redirect_options: ComputeSecurityPolicyRuleRedirectOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference">ComputeSecurityPolicyRuleRedirectOptionsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `header_action_input`<sup>Optional</sup> <a name="header_action_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.headerActionInput"></a>

```python
header_action_input: ComputeSecurityPolicyRuleHeaderAction
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleHeaderAction">ComputeSecurityPolicyRuleHeaderAction</a>

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.matchInput"></a>

```python
match_input: ComputeSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleMatch">ComputeSecurityPolicyRuleMatch</a>

---

##### `preconfigured_waf_config_input`<sup>Optional</sup> <a name="preconfigured_waf_config_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.preconfiguredWafConfigInput"></a>

```python
preconfigured_waf_config_input: ComputeSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a>

---

##### `preview_input`<sup>Optional</sup> <a name="preview_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.previewInput"></a>

```python
preview_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit_options_input`<sup>Optional</sup> <a name="rate_limit_options_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.rateLimitOptionsInput"></a>

```python
rate_limit_options_input: ComputeSecurityPolicyRuleRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a>

---

##### `redirect_options_input`<sup>Optional</sup> <a name="redirect_options_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.redirectOptionsInput"></a>

```python
redirect_options_input: ComputeSecurityPolicyRuleRedirectOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.preview"></a>

```python
preview: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeSecurityPolicyRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRule">ComputeSecurityPolicyRule</a>]

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]]

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie">put_request_cookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader">put_request_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam">put_request_query_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri">put_request_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie">reset_request_cookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader">reset_request_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam">reset_request_query_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri">reset_request_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds">reset_target_rule_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_request_cookie` <a name="put_request_cookie" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie"></a>

```python
def put_request_cookie(
  value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]]

---

##### `put_request_header` <a name="put_request_header" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader"></a>

```python
def put_request_header(
  value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]]

---

##### `put_request_query_param` <a name="put_request_query_param" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam"></a>

```python
def put_request_query_param(
  value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]]

---

##### `put_request_uri` <a name="put_request_uri" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri"></a>

```python
def put_request_uri(
  value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]]

---

##### `reset_request_cookie` <a name="reset_request_cookie" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie"></a>

```python
def reset_request_cookie() -> None
```

##### `reset_request_header` <a name="reset_request_header" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader"></a>

```python
def reset_request_header() -> None
```

##### `reset_request_query_param` <a name="reset_request_query_param" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam"></a>

```python
def reset_request_query_param() -> None
```

##### `reset_request_uri` <a name="reset_request_uri" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri"></a>

```python
def reset_request_uri() -> None
```

##### `reset_target_rule_ids` <a name="reset_target_rule_ids" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds"></a>

```python
def reset_target_rule_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie">request_cookie</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader">request_header</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">request_query_param</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri">request_uri</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput">request_cookie_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput">request_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput">request_query_param_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput">request_uri_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput">target_rule_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput">target_rule_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">target_rule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">target_rule_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `request_cookie`<sup>Required</sup> <a name="request_cookie" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```python
request_cookie: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `request_header`<sup>Required</sup> <a name="request_header" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```python
request_header: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `request_query_param`<sup>Required</sup> <a name="request_query_param" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```python
request_query_param: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `request_uri`<sup>Required</sup> <a name="request_uri" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```python
request_uri: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `request_cookie_input`<sup>Optional</sup> <a name="request_cookie_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput"></a>

```python
request_cookie_input: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]]

---

##### `request_header_input`<sup>Optional</sup> <a name="request_header_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput"></a>

```python
request_header_input: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]]

---

##### `request_query_param_input`<sup>Optional</sup> <a name="request_query_param_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput"></a>

```python
request_query_param_input: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]]

---

##### `request_uri_input`<sup>Optional</sup> <a name="request_uri_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput"></a>

```python
request_uri_input: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]]

---

##### `target_rule_ids_input`<sup>Optional</sup> <a name="target_rule_ids_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput"></a>

```python
target_rule_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_rule_set_input`<sup>Optional</sup> <a name="target_rule_set_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput"></a>

```python
target_rule_set_input: str
```

- *Type:* str

---

##### `target_rule_ids`<sup>Required</sup> <a name="target_rule_ids" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```python
target_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_rule_set`<sup>Required</sup> <a name="target_rule_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```python
target_rule_set: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]]

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>]

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]]

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>]

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]]

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>]

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]]

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>]

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion">put_exclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion">reset_exclusion</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exclusion` <a name="put_exclusion" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion"></a>

```python
def put_exclusion(
  value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]]

---

##### `reset_exclusion` <a name="reset_exclusion" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion"></a>

```python
def reset_exclusion() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput">exclusion_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion"></a>

```python
exclusion: ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList</a>

---

##### `exclusion_input`<sup>Optional</sup> <a name="exclusion_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput"></a>

```python
exclusion_input: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRulePreconfiguredWafConfig">ComputeSecurityPolicyRulePreconfiguredWafConfig</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput">interval_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSec">interval_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_sec_input`<sup>Optional</sup> <a name="interval_sec_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput"></a>

```python
interval_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_sec`<sup>Required</sup> <a name="interval_sec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSec"></a>

```python
interval_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList <a name="ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]]

---


### ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName">reset_enforce_on_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType">reset_enforce_on_key_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enforce_on_key_name` <a name="reset_enforce_on_key_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName"></a>

```python
def reset_enforce_on_key_name() -> None
```

##### `reset_enforce_on_key_type` <a name="reset_enforce_on_key_type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType"></a>

```python
def reset_enforce_on_key_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput">enforce_on_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput">enforce_on_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName">enforce_on_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType">enforce_on_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforce_on_key_name_input`<sup>Optional</sup> <a name="enforce_on_key_name_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput"></a>

```python
enforce_on_key_name_input: str
```

- *Type:* str

---

##### `enforce_on_key_type_input`<sup>Optional</sup> <a name="enforce_on_key_type_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput"></a>

```python
enforce_on_key_type_input: str
```

- *Type:* str

---

##### `enforce_on_key_name`<sup>Required</sup> <a name="enforce_on_key_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName"></a>

```python
enforce_on_key_name: str
```

- *Type:* str

---

##### `enforce_on_key_type`<sup>Required</sup> <a name="enforce_on_key_type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType"></a>

```python
enforce_on_key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]

---


### ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target` <a name="reset_target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putBanThreshold">put_ban_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putEnforceOnKeyConfigs">put_enforce_on_key_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putExceedRedirectOptions">put_exceed_redirect_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putRateLimitThreshold">put_rate_limit_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanDurationSec">reset_ban_duration_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanThreshold">reset_ban_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKey">reset_enforce_on_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs">reset_enforce_on_key_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyName">reset_enforce_on_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetExceedRedirectOptions">reset_exceed_redirect_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ban_threshold` <a name="put_ban_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putBanThreshold"></a>

```python
def put_ban_threshold(
  count: typing.Union[int, float],
  interval_sec: typing.Union[int, float]
) -> None
```

###### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putBanThreshold.parameter.count"></a>

- *Type:* typing.Union[int, float]

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#count ComputeSecurityPolicy#count}

---

###### `interval_sec`<sup>Required</sup> <a name="interval_sec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putBanThreshold.parameter.intervalSec"></a>

- *Type:* typing.Union[int, float]

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#interval_sec ComputeSecurityPolicy#interval_sec}

---

##### `put_enforce_on_key_configs` <a name="put_enforce_on_key_configs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putEnforceOnKeyConfigs"></a>

```python
def put_enforce_on_key_configs(
  value: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putEnforceOnKeyConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]]

---

##### `put_exceed_redirect_options` <a name="put_exceed_redirect_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putExceedRedirectOptions"></a>

```python
def put_exceed_redirect_options(
  type: str,
  target: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putExceedRedirectOptions.parameter.type"></a>

- *Type:* str

Type of the redirect action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#type ComputeSecurityPolicy#type}

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putExceedRedirectOptions.parameter.target"></a>

- *Type:* str

Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#target ComputeSecurityPolicy#target}

---

##### `put_rate_limit_threshold` <a name="put_rate_limit_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putRateLimitThreshold"></a>

```python
def put_rate_limit_threshold(
  count: typing.Union[int, float],
  interval_sec: typing.Union[int, float]
) -> None
```

###### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putRateLimitThreshold.parameter.count"></a>

- *Type:* typing.Union[int, float]

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#count ComputeSecurityPolicy#count}

---

###### `interval_sec`<sup>Required</sup> <a name="interval_sec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.putRateLimitThreshold.parameter.intervalSec"></a>

- *Type:* typing.Union[int, float]

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_security_policy#interval_sec ComputeSecurityPolicy#interval_sec}

---

##### `reset_ban_duration_sec` <a name="reset_ban_duration_sec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanDurationSec"></a>

```python
def reset_ban_duration_sec() -> None
```

##### `reset_ban_threshold` <a name="reset_ban_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanThreshold"></a>

```python
def reset_ban_threshold() -> None
```

##### `reset_enforce_on_key` <a name="reset_enforce_on_key" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKey"></a>

```python
def reset_enforce_on_key() -> None
```

##### `reset_enforce_on_key_configs` <a name="reset_enforce_on_key_configs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs"></a>

```python
def reset_enforce_on_key_configs() -> None
```

##### `reset_enforce_on_key_name` <a name="reset_enforce_on_key_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyName"></a>

```python
def reset_enforce_on_key_name() -> None
```

##### `reset_exceed_redirect_options` <a name="reset_exceed_redirect_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resetExceedRedirectOptions"></a>

```python
def reset_exceed_redirect_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThreshold">ban_threshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigs">enforce_on_key_configs</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptions">exceed_redirect_options</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThreshold">rate_limit_threshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSecInput">ban_duration_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThresholdInput">ban_threshold_input</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformActionInput">conform_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput">enforce_on_key_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyInput">enforce_on_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyNameInput">enforce_on_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedActionInput">exceed_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptionsInput">exceed_redirect_options_input</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThresholdInput">rate_limit_threshold_input</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSec">ban_duration_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformAction">conform_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKey">enforce_on_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyName">enforce_on_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedAction">exceed_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ban_threshold`<sup>Required</sup> <a name="ban_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThreshold"></a>

```python
ban_threshold: ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference</a>

---

##### `enforce_on_key_configs`<sup>Required</sup> <a name="enforce_on_key_configs" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigs"></a>

```python
enforce_on_key_configs: ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList</a>

---

##### `exceed_redirect_options`<sup>Required</sup> <a name="exceed_redirect_options" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptions"></a>

```python
exceed_redirect_options: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference</a>

---

##### `rate_limit_threshold`<sup>Required</sup> <a name="rate_limit_threshold" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThreshold"></a>

```python
rate_limit_threshold: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference</a>

---

##### `ban_duration_sec_input`<sup>Optional</sup> <a name="ban_duration_sec_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSecInput"></a>

```python
ban_duration_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ban_threshold_input`<sup>Optional</sup> <a name="ban_threshold_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThresholdInput"></a>

```python
ban_threshold_input: ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

---

##### `conform_action_input`<sup>Optional</sup> <a name="conform_action_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformActionInput"></a>

```python
conform_action_input: str
```

- *Type:* str

---

##### `enforce_on_key_configs_input`<sup>Optional</sup> <a name="enforce_on_key_configs_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput"></a>

```python
enforce_on_key_configs_input: typing.Union[IResolvable, typing.List[ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>]]

---

##### `enforce_on_key_input`<sup>Optional</sup> <a name="enforce_on_key_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyInput"></a>

```python
enforce_on_key_input: str
```

- *Type:* str

---

##### `enforce_on_key_name_input`<sup>Optional</sup> <a name="enforce_on_key_name_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyNameInput"></a>

```python
enforce_on_key_name_input: str
```

- *Type:* str

---

##### `exceed_action_input`<sup>Optional</sup> <a name="exceed_action_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedActionInput"></a>

```python
exceed_action_input: str
```

- *Type:* str

---

##### `exceed_redirect_options_input`<sup>Optional</sup> <a name="exceed_redirect_options_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptionsInput"></a>

```python
exceed_redirect_options_input: ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a>

---

##### `rate_limit_threshold_input`<sup>Optional</sup> <a name="rate_limit_threshold_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThresholdInput"></a>

```python
rate_limit_threshold_input: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

---

##### `ban_duration_sec`<sup>Required</sup> <a name="ban_duration_sec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSec"></a>

```python
ban_duration_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `conform_action`<sup>Required</sup> <a name="conform_action" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformAction"></a>

```python
conform_action: str
```

- *Type:* str

---

##### `enforce_on_key`<sup>Required</sup> <a name="enforce_on_key" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKey"></a>

```python
enforce_on_key: str
```

- *Type:* str

---

##### `enforce_on_key_name`<sup>Required</sup> <a name="enforce_on_key_name" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyName"></a>

```python
enforce_on_key_name: str
```

- *Type:* str

---

##### `exceed_action`<sup>Required</sup> <a name="exceed_action" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedAction"></a>

```python
exceed_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSecurityPolicyRuleRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptions">ComputeSecurityPolicyRuleRateLimitOptions</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput">interval_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec">interval_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_sec_input`<sup>Optional</sup> <a name="interval_sec_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput"></a>

```python
interval_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_sec`<sup>Required</sup> <a name="interval_sec" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec"></a>

```python
interval_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

---


### ComputeSecurityPolicyRuleRedirectOptionsOutputReference <a name="ComputeSecurityPolicyRuleRedirectOptionsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target` <a name="reset_target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSecurityPolicyRuleRedirectOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyRuleRedirectOptions">ComputeSecurityPolicyRuleRedirectOptions</a>

---


### ComputeSecurityPolicyTimeoutsOutputReference <a name="ComputeSecurityPolicyTimeoutsOutputReference" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_security_policy

computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeSecurityPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSecurityPolicy.ComputeSecurityPolicyTimeouts">ComputeSecurityPolicyTimeouts</a>]

---




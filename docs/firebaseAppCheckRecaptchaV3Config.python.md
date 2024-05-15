# `firebaseAppCheckRecaptchaV3Config` Submodule <a name="`firebaseAppCheckRecaptchaV3Config` Submodule" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppCheckRecaptchaV3Config <a name="FirebaseAppCheckRecaptchaV3Config" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config google_firebase_app_check_recaptcha_v3_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_check_recaptcha_v3_config

firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  site_secret: str,
  id: str = None,
  project: str = None,
  timeouts: FirebaseAppCheckRecaptchaV3ConfigTimeouts = None,
  token_ttl: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | The ID of an [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.siteSecret">site_secret</a></code> | <code>str</code> | The site secret used to identify your service for reCAPTCHA v3 verification. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#id FirebaseAppCheckRecaptchaV3Config#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#project FirebaseAppCheckRecaptchaV3Config#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.tokenTtl">token_ttl</a></code> | <code>str</code> | Specifies the duration for which App Check tokens exchanged from reCAPTCHA V3 artifacts will be valid. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.appId"></a>

- *Type:* str

The ID of an [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#app_id FirebaseAppCheckRecaptchaV3Config#app_id}

---

##### `site_secret`<sup>Required</sup> <a name="site_secret" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.siteSecret"></a>

- *Type:* str

The site secret used to identify your service for reCAPTCHA v3 verification.

For security reasons, this field will never be populated in any response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#site_secret FirebaseAppCheckRecaptchaV3Config#site_secret}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#id FirebaseAppCheckRecaptchaV3Config#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#project FirebaseAppCheckRecaptchaV3Config#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#timeouts FirebaseAppCheckRecaptchaV3Config#timeouts}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.tokenTtl"></a>

- *Type:* str

Specifies the duration for which App Check tokens exchanged from reCAPTCHA V3 artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#token_ttl FirebaseAppCheckRecaptchaV3Config#token_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetTokenTtl">reset_token_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#create FirebaseAppCheckRecaptchaV3Config#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#delete FirebaseAppCheckRecaptchaV3Config#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#update FirebaseAppCheckRecaptchaV3Config#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_token_ttl` <a name="reset_token_ttl" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetTokenTtl"></a>

```python
def reset_token_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FirebaseAppCheckRecaptchaV3Config resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_check_recaptcha_v3_config

firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_check_recaptcha_v3_config

firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_check_recaptcha_v3_config

firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_check_recaptcha_v3_config

firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FirebaseAppCheckRecaptchaV3Config resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FirebaseAppCheckRecaptchaV3Config to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FirebaseAppCheckRecaptchaV3Config that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppCheckRecaptchaV3Config to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecretSet">site_secret_set</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference">FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecretInput">site_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tokenTtlInput">token_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecret">site_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tokenTtl">token_ttl</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `site_secret_set`<sup>Required</sup> <a name="site_secret_set" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecretSet"></a>

```python
site_secret_set: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.timeouts"></a>

```python
timeouts: FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference">FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference</a>

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `site_secret_input`<sup>Optional</sup> <a name="site_secret_input" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecretInput"></a>

```python
site_secret_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FirebaseAppCheckRecaptchaV3ConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a>]

---

##### `token_ttl_input`<sup>Optional</sup> <a name="token_ttl_input" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tokenTtlInput"></a>

```python
token_ttl_input: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `site_secret`<sup>Required</sup> <a name="site_secret" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecret"></a>

```python
site_secret: str
```

- *Type:* str

---

##### `token_ttl`<sup>Required</sup> <a name="token_ttl" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tokenTtl"></a>

```python
token_ttl: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppCheckRecaptchaV3ConfigConfig <a name="FirebaseAppCheckRecaptchaV3ConfigConfig" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_check_recaptcha_v3_config

firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  site_secret: str,
  id: str = None,
  project: str = None,
  timeouts: FirebaseAppCheckRecaptchaV3ConfigTimeouts = None,
  token_ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.appId">app_id</a></code> | <code>str</code> | The ID of an [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.siteSecret">site_secret</a></code> | <code>str</code> | The site secret used to identify your service for reCAPTCHA v3 verification. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#id FirebaseAppCheckRecaptchaV3Config#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#project FirebaseAppCheckRecaptchaV3Config#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.tokenTtl">token_ttl</a></code> | <code>str</code> | Specifies the duration for which App Check tokens exchanged from reCAPTCHA V3 artifacts will be valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

The ID of an [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#app_id FirebaseAppCheckRecaptchaV3Config#app_id}

---

##### `site_secret`<sup>Required</sup> <a name="site_secret" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.siteSecret"></a>

```python
site_secret: str
```

- *Type:* str

The site secret used to identify your service for reCAPTCHA v3 verification.

For security reasons, this field will never be populated in any response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#site_secret FirebaseAppCheckRecaptchaV3Config#site_secret}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#id FirebaseAppCheckRecaptchaV3Config#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#project FirebaseAppCheckRecaptchaV3Config#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.timeouts"></a>

```python
timeouts: FirebaseAppCheckRecaptchaV3ConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#timeouts FirebaseAppCheckRecaptchaV3Config#timeouts}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.tokenTtl"></a>

```python
token_ttl: str
```

- *Type:* str

Specifies the duration for which App Check tokens exchanged from reCAPTCHA V3 artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#token_ttl FirebaseAppCheckRecaptchaV3Config#token_ttl}

---

### FirebaseAppCheckRecaptchaV3ConfigTimeouts <a name="FirebaseAppCheckRecaptchaV3ConfigTimeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_check_recaptcha_v3_config

firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#create FirebaseAppCheckRecaptchaV3Config#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#delete FirebaseAppCheckRecaptchaV3Config#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#update FirebaseAppCheckRecaptchaV3Config#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#create FirebaseAppCheckRecaptchaV3Config#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#delete FirebaseAppCheckRecaptchaV3Config#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/firebase_app_check_recaptcha_v3_config#update FirebaseAppCheckRecaptchaV3Config#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference <a name="FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_check_recaptcha_v3_config

firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FirebaseAppCheckRecaptchaV3ConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a>]

---




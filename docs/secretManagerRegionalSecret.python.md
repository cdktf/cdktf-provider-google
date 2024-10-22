# `secretManagerRegionalSecret` Submodule <a name="`secretManagerRegionalSecret` Submodule" id="@cdktf/provider-google.secretManagerRegionalSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretManagerRegionalSecret <a name="SecretManagerRegionalSecret" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret google_secret_manager_regional_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_regional_secret

secretManagerRegionalSecret.SecretManagerRegionalSecret(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  secret_id: str,
  annotations: typing.Mapping[str] = None,
  customer_managed_encryption: SecretManagerRegionalSecretCustomerManagedEncryption = None,
  expire_time: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  rotation: SecretManagerRegionalSecretRotation = None,
  timeouts: SecretManagerRegionalSecretTimeouts = None,
  topics: typing.Union[IResolvable, typing.List[SecretManagerRegionalSecretTopics]] = None,
  ttl: str = None,
  version_aliases: typing.Mapping[str] = None,
  version_destroy_ttl: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.secretId">secret_id</a></code> | <code>str</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Custom metadata about the regional secret. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.customerManagedEncryption">customer_managed_encryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption">SecretManagerRegionalSecretCustomerManagedEncryption</a></code> | customer_managed_encryption block. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.expireTime">expire_time</a></code> | <code>str</code> | Timestamp in UTC when the regional secret is scheduled to expire. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#id SecretManagerRegionalSecret#id}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels assigned to this regional secret. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#project SecretManagerRegionalSecret#project}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation">SecretManagerRegionalSecretRotation</a></code> | rotation block. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts">SecretManagerRegionalSecretTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.topics">topics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>]]</code> | topics block. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | The TTL for the regional secret. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.versionAliases">version_aliases</a></code> | <code>typing.Mapping[str]</code> | Mapping from version alias to version name. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.versionDestroyTtl">version_destroy_ttl</a></code> | <code>str</code> | Secret Version TTL after destruction request. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.location"></a>

- *Type:* str

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#location SecretManagerRegionalSecret#location}

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.secretId"></a>

- *Type:* str

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#secret_id SecretManagerRegionalSecret#secret_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Custom metadata about the regional secret.

Annotations are distinct from various forms of labels. Annotations exist to allow
client tools to store their own state information without requiring a database.

Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and
may have dashes (-), underscores (_), dots (.), and alphanumerics in between these
symbols.

The total size of annotation keys and values must be less than 16KiB.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#annotations SecretManagerRegionalSecret#annotations}

---

##### `customer_managed_encryption`<sup>Optional</sup> <a name="customer_managed_encryption" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.customerManagedEncryption"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption">SecretManagerRegionalSecretCustomerManagedEncryption</a>

customer_managed_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#customer_managed_encryption SecretManagerRegionalSecret#customer_managed_encryption}

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.expireTime"></a>

- *Type:* str

Timestamp in UTC when the regional secret is scheduled to expire.

This is always provided on
output, regardless of what was sent on input. A timestamp in RFC3339 UTC "Zulu" format, with
nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z". Only one of 'expire_time' or 'ttl' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#expire_time SecretManagerRegionalSecret#expire_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#id SecretManagerRegionalSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels assigned to this regional secret.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#labels SecretManagerRegionalSecret#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#project SecretManagerRegionalSecret#project}.

---

##### `rotation`<sup>Optional</sup> <a name="rotation" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.rotation"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation">SecretManagerRegionalSecretRotation</a>

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#rotation SecretManagerRegionalSecret#rotation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts">SecretManagerRegionalSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#timeouts SecretManagerRegionalSecret#timeouts}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.topics"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>]]

topics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#topics SecretManagerRegionalSecret#topics}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.ttl"></a>

- *Type:* str

The TTL for the regional secret.

A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s". Only one of 'ttl' or 'expire_time' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#ttl SecretManagerRegionalSecret#ttl}

---

##### `version_aliases`<sup>Optional</sup> <a name="version_aliases" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.versionAliases"></a>

- *Type:* typing.Mapping[str]

Mapping from version alias to version name.

A version alias is a string with a maximum length of 63 characters and can contain
uppercase and lowercase letters, numerals, and the hyphen (-) and underscore ('_')
characters. An alias string must start with a letter and cannot be the string
'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#version_aliases SecretManagerRegionalSecret#version_aliases}

---

##### `version_destroy_ttl`<sup>Optional</sup> <a name="version_destroy_ttl" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.versionDestroyTtl"></a>

- *Type:* str

Secret Version TTL after destruction request.

This is a part of the delayed delete feature on Secret Version.
For secret with versionDestroyTtl>0, version destruction doesn't happen immediately
on calling destroy instead the version goes to a disabled state and
the actual destruction happens after this TTL expires. It must be atleast 24h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#version_destroy_ttl SecretManagerRegionalSecret#version_destroy_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putCustomerManagedEncryption">put_customer_managed_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putRotation">put_rotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putTopics">put_topics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetCustomerManagedEncryption">reset_customer_managed_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetExpireTime">reset_expire_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetRotation">reset_rotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetTopics">reset_topics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetVersionAliases">reset_version_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetVersionDestroyTtl">reset_version_destroy_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_customer_managed_encryption` <a name="put_customer_managed_encryption" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putCustomerManagedEncryption"></a>

```python
def put_customer_managed_encryption(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putCustomerManagedEncryption.parameter.kmsKeyName"></a>

- *Type:* str

The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#kms_key_name SecretManagerRegionalSecret#kms_key_name}

---

##### `put_rotation` <a name="put_rotation" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putRotation"></a>

```python
def put_rotation(
  next_rotation_time: str = None,
  rotation_period: str = None
) -> None
```

###### `next_rotation_time`<sup>Optional</sup> <a name="next_rotation_time" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putRotation.parameter.nextRotationTime"></a>

- *Type:* str

Timestamp in UTC at which the Secret is scheduled to rotate.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#next_rotation_time SecretManagerRegionalSecret#next_rotation_time}

---

###### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putRotation.parameter.rotationPeriod"></a>

- *Type:* str

The Duration between rotation notifications.

Must be in seconds and at least 3600s (1h)
and at most 3153600000s (100 years). If rotationPeriod is set, 'next_rotation_time' must
be set. 'next_rotation_time' will be advanced by this period when the service
automatically sends rotation notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#rotation_period SecretManagerRegionalSecret#rotation_period}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#create SecretManagerRegionalSecret#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#delete SecretManagerRegionalSecret#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#update SecretManagerRegionalSecret#update}.

---

##### `put_topics` <a name="put_topics" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putTopics"></a>

```python
def put_topics(
  value: typing.Union[IResolvable, typing.List[SecretManagerRegionalSecretTopics]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putTopics.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>]]

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_customer_managed_encryption` <a name="reset_customer_managed_encryption" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetCustomerManagedEncryption"></a>

```python
def reset_customer_managed_encryption() -> None
```

##### `reset_expire_time` <a name="reset_expire_time" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetExpireTime"></a>

```python
def reset_expire_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_rotation` <a name="reset_rotation" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetRotation"></a>

```python
def reset_rotation() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_topics` <a name="reset_topics" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetTopics"></a>

```python
def reset_topics() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_version_aliases` <a name="reset_version_aliases" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetVersionAliases"></a>

```python
def reset_version_aliases() -> None
```

##### `reset_version_destroy_ttl` <a name="reset_version_destroy_ttl" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetVersionDestroyTtl"></a>

```python
def reset_version_destroy_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecretManagerRegionalSecret resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_regional_secret

secretManagerRegionalSecret.SecretManagerRegionalSecret.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_regional_secret

secretManagerRegionalSecret.SecretManagerRegionalSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_regional_secret

secretManagerRegionalSecret.SecretManagerRegionalSecret.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_regional_secret

secretManagerRegionalSecret.SecretManagerRegionalSecret.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecretManagerRegionalSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecretManagerRegionalSecret to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecretManagerRegionalSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretManagerRegionalSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.customerManagedEncryption">customer_managed_encryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference">SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference">SecretManagerRegionalSecretRotationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference">SecretManagerRegionalSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.topics">topics</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList">SecretManagerRegionalSecretTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.customerManagedEncryptionInput">customer_managed_encryption_input</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption">SecretManagerRegionalSecretCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.expireTimeInput">expire_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.rotationInput">rotation_input</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation">SecretManagerRegionalSecretRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts">SecretManagerRegionalSecretTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.topicsInput">topics_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.versionAliasesInput">version_aliases_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.versionDestroyTtlInput">version_destroy_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.versionAliases">version_aliases</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.versionDestroyTtl">version_destroy_ttl</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `customer_managed_encryption`<sup>Required</sup> <a name="customer_managed_encryption" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.customerManagedEncryption"></a>

```python
customer_managed_encryption: SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference">SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference</a>

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.rotation"></a>

```python
rotation: SecretManagerRegionalSecretRotationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference">SecretManagerRegionalSecretRotationOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.timeouts"></a>

```python
timeouts: SecretManagerRegionalSecretTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference">SecretManagerRegionalSecretTimeoutsOutputReference</a>

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.topics"></a>

```python
topics: SecretManagerRegionalSecretTopicsList
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList">SecretManagerRegionalSecretTopicsList</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `customer_managed_encryption_input`<sup>Optional</sup> <a name="customer_managed_encryption_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.customerManagedEncryptionInput"></a>

```python
customer_managed_encryption_input: SecretManagerRegionalSecretCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption">SecretManagerRegionalSecretCustomerManagedEncryption</a>

---

##### `expire_time_input`<sup>Optional</sup> <a name="expire_time_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.expireTimeInput"></a>

```python
expire_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rotation_input`<sup>Optional</sup> <a name="rotation_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.rotationInput"></a>

```python
rotation_input: SecretManagerRegionalSecretRotation
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation">SecretManagerRegionalSecretRotation</a>

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SecretManagerRegionalSecretTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts">SecretManagerRegionalSecretTimeouts</a>]

---

##### `topics_input`<sup>Optional</sup> <a name="topics_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.topicsInput"></a>

```python
topics_input: typing.Union[IResolvable, typing.List[SecretManagerRegionalSecretTopics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>]]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `version_aliases_input`<sup>Optional</sup> <a name="version_aliases_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.versionAliasesInput"></a>

```python
version_aliases_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_destroy_ttl_input`<sup>Optional</sup> <a name="version_destroy_ttl_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.versionDestroyTtlInput"></a>

```python
version_destroy_ttl_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `version_aliases`<sup>Required</sup> <a name="version_aliases" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.versionAliases"></a>

```python
version_aliases: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_destroy_ttl`<sup>Required</sup> <a name="version_destroy_ttl" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.versionDestroyTtl"></a>

```python
version_destroy_ttl: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecretManagerRegionalSecretConfig <a name="SecretManagerRegionalSecretConfig" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_regional_secret

secretManagerRegionalSecret.SecretManagerRegionalSecretConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  secret_id: str,
  annotations: typing.Mapping[str] = None,
  customer_managed_encryption: SecretManagerRegionalSecretCustomerManagedEncryption = None,
  expire_time: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  rotation: SecretManagerRegionalSecretRotation = None,
  timeouts: SecretManagerRegionalSecretTimeouts = None,
  topics: typing.Union[IResolvable, typing.List[SecretManagerRegionalSecretTopics]] = None,
  ttl: str = None,
  version_aliases: typing.Mapping[str] = None,
  version_destroy_ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.location">location</a></code> | <code>str</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.secretId">secret_id</a></code> | <code>str</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Custom metadata about the regional secret. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.customerManagedEncryption">customer_managed_encryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption">SecretManagerRegionalSecretCustomerManagedEncryption</a></code> | customer_managed_encryption block. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.expireTime">expire_time</a></code> | <code>str</code> | Timestamp in UTC when the regional secret is scheduled to expire. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#id SecretManagerRegionalSecret#id}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels assigned to this regional secret. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#project SecretManagerRegionalSecret#project}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation">SecretManagerRegionalSecretRotation</a></code> | rotation block. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts">SecretManagerRegionalSecretTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.topics">topics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>]]</code> | topics block. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.ttl">ttl</a></code> | <code>str</code> | The TTL for the regional secret. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.versionAliases">version_aliases</a></code> | <code>typing.Mapping[str]</code> | Mapping from version alias to version name. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.versionDestroyTtl">version_destroy_ttl</a></code> | <code>str</code> | Secret Version TTL after destruction request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#location SecretManagerRegionalSecret#location}

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#secret_id SecretManagerRegionalSecret#secret_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Custom metadata about the regional secret.

Annotations are distinct from various forms of labels. Annotations exist to allow
client tools to store their own state information without requiring a database.

Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and
may have dashes (-), underscores (_), dots (.), and alphanumerics in between these
symbols.

The total size of annotation keys and values must be less than 16KiB.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#annotations SecretManagerRegionalSecret#annotations}

---

##### `customer_managed_encryption`<sup>Optional</sup> <a name="customer_managed_encryption" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.customerManagedEncryption"></a>

```python
customer_managed_encryption: SecretManagerRegionalSecretCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption">SecretManagerRegionalSecretCustomerManagedEncryption</a>

customer_managed_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#customer_managed_encryption SecretManagerRegionalSecret#customer_managed_encryption}

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

Timestamp in UTC when the regional secret is scheduled to expire.

This is always provided on
output, regardless of what was sent on input. A timestamp in RFC3339 UTC "Zulu" format, with
nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z". Only one of 'expire_time' or 'ttl' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#expire_time SecretManagerRegionalSecret#expire_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#id SecretManagerRegionalSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels assigned to this regional secret.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#labels SecretManagerRegionalSecret#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#project SecretManagerRegionalSecret#project}.

---

##### `rotation`<sup>Optional</sup> <a name="rotation" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.rotation"></a>

```python
rotation: SecretManagerRegionalSecretRotation
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation">SecretManagerRegionalSecretRotation</a>

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#rotation SecretManagerRegionalSecret#rotation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.timeouts"></a>

```python
timeouts: SecretManagerRegionalSecretTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts">SecretManagerRegionalSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#timeouts SecretManagerRegionalSecret#timeouts}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.topics"></a>

```python
topics: typing.Union[IResolvable, typing.List[SecretManagerRegionalSecretTopics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>]]

topics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#topics SecretManagerRegionalSecret#topics}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

The TTL for the regional secret.

A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s". Only one of 'ttl' or 'expire_time' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#ttl SecretManagerRegionalSecret#ttl}

---

##### `version_aliases`<sup>Optional</sup> <a name="version_aliases" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.versionAliases"></a>

```python
version_aliases: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping from version alias to version name.

A version alias is a string with a maximum length of 63 characters and can contain
uppercase and lowercase letters, numerals, and the hyphen (-) and underscore ('_')
characters. An alias string must start with a letter and cannot be the string
'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#version_aliases SecretManagerRegionalSecret#version_aliases}

---

##### `version_destroy_ttl`<sup>Optional</sup> <a name="version_destroy_ttl" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.versionDestroyTtl"></a>

```python
version_destroy_ttl: str
```

- *Type:* str

Secret Version TTL after destruction request.

This is a part of the delayed delete feature on Secret Version.
For secret with versionDestroyTtl>0, version destruction doesn't happen immediately
on calling destroy instead the version goes to a disabled state and
the actual destruction happens after this TTL expires. It must be atleast 24h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#version_destroy_ttl SecretManagerRegionalSecret#version_destroy_ttl}

---

### SecretManagerRegionalSecretCustomerManagedEncryption <a name="SecretManagerRegionalSecretCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_regional_secret

secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#kms_key_name SecretManagerRegionalSecret#kms_key_name}

---

### SecretManagerRegionalSecretRotation <a name="SecretManagerRegionalSecretRotation" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_regional_secret

secretManagerRegionalSecret.SecretManagerRegionalSecretRotation(
  next_rotation_time: str = None,
  rotation_period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation.property.nextRotationTime">next_rotation_time</a></code> | <code>str</code> | Timestamp in UTC at which the Secret is scheduled to rotate. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation.property.rotationPeriod">rotation_period</a></code> | <code>str</code> | The Duration between rotation notifications. |

---

##### `next_rotation_time`<sup>Optional</sup> <a name="next_rotation_time" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation.property.nextRotationTime"></a>

```python
next_rotation_time: str
```

- *Type:* str

Timestamp in UTC at which the Secret is scheduled to rotate.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#next_rotation_time SecretManagerRegionalSecret#next_rotation_time}

---

##### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation.property.rotationPeriod"></a>

```python
rotation_period: str
```

- *Type:* str

The Duration between rotation notifications.

Must be in seconds and at least 3600s (1h)
and at most 3153600000s (100 years). If rotationPeriod is set, 'next_rotation_time' must
be set. 'next_rotation_time' will be advanced by this period when the service
automatically sends rotation notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#rotation_period SecretManagerRegionalSecret#rotation_period}

---

### SecretManagerRegionalSecretTimeouts <a name="SecretManagerRegionalSecretTimeouts" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_regional_secret

secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#create SecretManagerRegionalSecret#create}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#delete SecretManagerRegionalSecret#delete}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#update SecretManagerRegionalSecret#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#create SecretManagerRegionalSecret#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#delete SecretManagerRegionalSecret#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#update SecretManagerRegionalSecret#update}.

---

### SecretManagerRegionalSecretTopics <a name="SecretManagerRegionalSecretTopics" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_regional_secret

secretManagerRegionalSecret.SecretManagerRegionalSecretTopics(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics.property.name">name</a></code> | <code>str</code> | The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*.

For publication to succeed, the Secret Manager Service
Agent service account must have pubsub.publisher permissions on the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/secret_manager_regional_secret#name SecretManagerRegionalSecret#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference <a name="SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_regional_secret

secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption">SecretManagerRegionalSecretCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: SecretManagerRegionalSecretCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption">SecretManagerRegionalSecretCustomerManagedEncryption</a>

---


### SecretManagerRegionalSecretRotationOutputReference <a name="SecretManagerRegionalSecretRotationOutputReference" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_regional_secret

secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.resetNextRotationTime">reset_next_rotation_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.resetRotationPeriod">reset_rotation_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_next_rotation_time` <a name="reset_next_rotation_time" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.resetNextRotationTime"></a>

```python
def reset_next_rotation_time() -> None
```

##### `reset_rotation_period` <a name="reset_rotation_period" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.resetRotationPeriod"></a>

```python
def reset_rotation_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.nextRotationTimeInput">next_rotation_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.rotationPeriodInput">rotation_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.nextRotationTime">next_rotation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.rotationPeriod">rotation_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation">SecretManagerRegionalSecretRotation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `next_rotation_time_input`<sup>Optional</sup> <a name="next_rotation_time_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.nextRotationTimeInput"></a>

```python
next_rotation_time_input: str
```

- *Type:* str

---

##### `rotation_period_input`<sup>Optional</sup> <a name="rotation_period_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.rotationPeriodInput"></a>

```python
rotation_period_input: str
```

- *Type:* str

---

##### `next_rotation_time`<sup>Required</sup> <a name="next_rotation_time" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.nextRotationTime"></a>

```python
next_rotation_time: str
```

- *Type:* str

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.rotationPeriod"></a>

```python
rotation_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.internalValue"></a>

```python
internal_value: SecretManagerRegionalSecretRotation
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation">SecretManagerRegionalSecretRotation</a>

---


### SecretManagerRegionalSecretTimeoutsOutputReference <a name="SecretManagerRegionalSecretTimeoutsOutputReference" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_regional_secret

secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts">SecretManagerRegionalSecretTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecretManagerRegionalSecretTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts">SecretManagerRegionalSecretTimeouts</a>]

---


### SecretManagerRegionalSecretTopicsList <a name="SecretManagerRegionalSecretTopicsList" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_regional_secret

secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecretManagerRegionalSecretTopicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SecretManagerRegionalSecretTopics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>]]

---


### SecretManagerRegionalSecretTopicsOutputReference <a name="SecretManagerRegionalSecretTopicsOutputReference" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_regional_secret

secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecretManagerRegionalSecretTopics]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>]

---




# `google_active_directory_domain_trust`

Refer to the Terraform Registory for docs: [`google_active_directory_domain_trust`](https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust).

# `activeDirectoryDomainTrust` Submodule <a name="`activeDirectoryDomainTrust` Submodule" id="@cdktf/provider-google.activeDirectoryDomainTrust"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveDirectoryDomainTrust <a name="ActiveDirectoryDomainTrust" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust google_active_directory_domain_trust}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer"></a>

```python
from cdktf_cdktf_provider_google import active_directory_domain_trust

activeDirectoryDomainTrust.ActiveDirectoryDomainTrust(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain: str,
  target_dns_ip_addresses: typing.List[str],
  target_domain_name: str,
  trust_direction: str,
  trust_handshake_secret: str,
  trust_type: str,
  id: str = None,
  project: str = None,
  selective_authentication: typing.Union[bool, IResolvable] = None,
  timeouts: ActiveDirectoryDomainTrustTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.domain">domain</a></code> | <code>str</code> | The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,  https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.targetDnsIpAddresses">target_dns_ip_addresses</a></code> | <code>typing.List[str]</code> | The target DNS server IP addresses which can resolve the remote domain involved in the trust. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.targetDomainName">target_domain_name</a></code> | <code>str</code> | The fully qualified target domain name which will be in trust with the current domain. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.trustDirection">trust_direction</a></code> | <code>str</code> | The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"]. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.trustHandshakeSecret">trust_handshake_secret</a></code> | <code>str</code> | The trust secret used for the handshake with the target domain. This will not be stored. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.trustType">trust_type</a></code> | <code>str</code> | The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"]. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#id ActiveDirectoryDomainTrust#id}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#project ActiveDirectoryDomainTrust#project}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.selectiveAuthentication">selective_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the trusted side has forest/domain wide access or selective access to an approved set of resources. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.domain"></a>

- *Type:* str

The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,  https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#domain ActiveDirectoryDomainTrust#domain}

---

##### `target_dns_ip_addresses`<sup>Required</sup> <a name="target_dns_ip_addresses" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.targetDnsIpAddresses"></a>

- *Type:* typing.List[str]

The target DNS server IP addresses which can resolve the remote domain involved in the trust.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#target_dns_ip_addresses ActiveDirectoryDomainTrust#target_dns_ip_addresses}

---

##### `target_domain_name`<sup>Required</sup> <a name="target_domain_name" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.targetDomainName"></a>

- *Type:* str

The fully qualified target domain name which will be in trust with the current domain.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#target_domain_name ActiveDirectoryDomainTrust#target_domain_name}

---

##### `trust_direction`<sup>Required</sup> <a name="trust_direction" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.trustDirection"></a>

- *Type:* str

The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#trust_direction ActiveDirectoryDomainTrust#trust_direction}

---

##### `trust_handshake_secret`<sup>Required</sup> <a name="trust_handshake_secret" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.trustHandshakeSecret"></a>

- *Type:* str

The trust secret used for the handshake with the target domain. This will not be stored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#trust_handshake_secret ActiveDirectoryDomainTrust#trust_handshake_secret}

---

##### `trust_type`<sup>Required</sup> <a name="trust_type" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.trustType"></a>

- *Type:* str

The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#trust_type ActiveDirectoryDomainTrust#trust_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#id ActiveDirectoryDomainTrust#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#project ActiveDirectoryDomainTrust#project}.

---

##### `selective_authentication`<sup>Optional</sup> <a name="selective_authentication" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.selectiveAuthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the trusted side has forest/domain wide access or selective access to an approved set of resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#selective_authentication ActiveDirectoryDomainTrust#selective_authentication}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#timeouts ActiveDirectoryDomainTrust#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetSelectiveAuthentication">reset_selective_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#create ActiveDirectoryDomainTrust#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#delete ActiveDirectoryDomainTrust#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#update ActiveDirectoryDomainTrust#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_selective_authentication` <a name="reset_selective_authentication" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetSelectiveAuthentication"></a>

```python
def reset_selective_authentication() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import active_directory_domain_trust

activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import active_directory_domain_trust

activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import active_directory_domain_trust

activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference">ActiveDirectoryDomainTrustTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.selectiveAuthenticationInput">selective_authentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDnsIpAddressesInput">target_dns_ip_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDomainNameInput">target_domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustDirectionInput">trust_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustHandshakeSecretInput">trust_handshake_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustTypeInput">trust_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.selectiveAuthentication">selective_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDnsIpAddresses">target_dns_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDomainName">target_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustDirection">trust_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustHandshakeSecret">trust_handshake_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustType">trust_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.timeouts"></a>

```python
timeouts: ActiveDirectoryDomainTrustTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference">ActiveDirectoryDomainTrustTimeoutsOutputReference</a>

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `selective_authentication_input`<sup>Optional</sup> <a name="selective_authentication_input" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.selectiveAuthenticationInput"></a>

```python
selective_authentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_dns_ip_addresses_input`<sup>Optional</sup> <a name="target_dns_ip_addresses_input" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDnsIpAddressesInput"></a>

```python
target_dns_ip_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_domain_name_input`<sup>Optional</sup> <a name="target_domain_name_input" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDomainNameInput"></a>

```python
target_domain_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ActiveDirectoryDomainTrustTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a>, cdktf.IResolvable]

---

##### `trust_direction_input`<sup>Optional</sup> <a name="trust_direction_input" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustDirectionInput"></a>

```python
trust_direction_input: str
```

- *Type:* str

---

##### `trust_handshake_secret_input`<sup>Optional</sup> <a name="trust_handshake_secret_input" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustHandshakeSecretInput"></a>

```python
trust_handshake_secret_input: str
```

- *Type:* str

---

##### `trust_type_input`<sup>Optional</sup> <a name="trust_type_input" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustTypeInput"></a>

```python
trust_type_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `selective_authentication`<sup>Required</sup> <a name="selective_authentication" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.selectiveAuthentication"></a>

```python
selective_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_dns_ip_addresses`<sup>Required</sup> <a name="target_dns_ip_addresses" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDnsIpAddresses"></a>

```python
target_dns_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_domain_name`<sup>Required</sup> <a name="target_domain_name" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDomainName"></a>

```python
target_domain_name: str
```

- *Type:* str

---

##### `trust_direction`<sup>Required</sup> <a name="trust_direction" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustDirection"></a>

```python
trust_direction: str
```

- *Type:* str

---

##### `trust_handshake_secret`<sup>Required</sup> <a name="trust_handshake_secret" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustHandshakeSecret"></a>

```python
trust_handshake_secret: str
```

- *Type:* str

---

##### `trust_type`<sup>Required</sup> <a name="trust_type" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustType"></a>

```python
trust_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ActiveDirectoryDomainTrustConfig <a name="ActiveDirectoryDomainTrustConfig" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import active_directory_domain_trust

activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain: str,
  target_dns_ip_addresses: typing.List[str],
  target_domain_name: str,
  trust_direction: str,
  trust_handshake_secret: str,
  trust_type: str,
  id: str = None,
  project: str = None,
  selective_authentication: typing.Union[bool, IResolvable] = None,
  timeouts: ActiveDirectoryDomainTrustTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.domain">domain</a></code> | <code>str</code> | The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,  https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.targetDnsIpAddresses">target_dns_ip_addresses</a></code> | <code>typing.List[str]</code> | The target DNS server IP addresses which can resolve the remote domain involved in the trust. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.targetDomainName">target_domain_name</a></code> | <code>str</code> | The fully qualified target domain name which will be in trust with the current domain. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustDirection">trust_direction</a></code> | <code>str</code> | The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"]. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustHandshakeSecret">trust_handshake_secret</a></code> | <code>str</code> | The trust secret used for the handshake with the target domain. This will not be stored. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustType">trust_type</a></code> | <code>str</code> | The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"]. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#id ActiveDirectoryDomainTrust#id}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#project ActiveDirectoryDomainTrust#project}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.selectiveAuthentication">selective_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the trusted side has forest/domain wide access or selective access to an approved set of resources. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,  https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#domain ActiveDirectoryDomainTrust#domain}

---

##### `target_dns_ip_addresses`<sup>Required</sup> <a name="target_dns_ip_addresses" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.targetDnsIpAddresses"></a>

```python
target_dns_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

The target DNS server IP addresses which can resolve the remote domain involved in the trust.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#target_dns_ip_addresses ActiveDirectoryDomainTrust#target_dns_ip_addresses}

---

##### `target_domain_name`<sup>Required</sup> <a name="target_domain_name" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.targetDomainName"></a>

```python
target_domain_name: str
```

- *Type:* str

The fully qualified target domain name which will be in trust with the current domain.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#target_domain_name ActiveDirectoryDomainTrust#target_domain_name}

---

##### `trust_direction`<sup>Required</sup> <a name="trust_direction" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustDirection"></a>

```python
trust_direction: str
```

- *Type:* str

The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#trust_direction ActiveDirectoryDomainTrust#trust_direction}

---

##### `trust_handshake_secret`<sup>Required</sup> <a name="trust_handshake_secret" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustHandshakeSecret"></a>

```python
trust_handshake_secret: str
```

- *Type:* str

The trust secret used for the handshake with the target domain. This will not be stored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#trust_handshake_secret ActiveDirectoryDomainTrust#trust_handshake_secret}

---

##### `trust_type`<sup>Required</sup> <a name="trust_type" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustType"></a>

```python
trust_type: str
```

- *Type:* str

The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#trust_type ActiveDirectoryDomainTrust#trust_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#id ActiveDirectoryDomainTrust#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#project ActiveDirectoryDomainTrust#project}.

---

##### `selective_authentication`<sup>Optional</sup> <a name="selective_authentication" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.selectiveAuthentication"></a>

```python
selective_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the trusted side has forest/domain wide access or selective access to an approved set of resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#selective_authentication ActiveDirectoryDomainTrust#selective_authentication}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.timeouts"></a>

```python
timeouts: ActiveDirectoryDomainTrustTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#timeouts ActiveDirectoryDomainTrust#timeouts}

---

### ActiveDirectoryDomainTrustTimeouts <a name="ActiveDirectoryDomainTrustTimeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import active_directory_domain_trust

activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#create ActiveDirectoryDomainTrust#create}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#delete ActiveDirectoryDomainTrust#delete}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#update ActiveDirectoryDomainTrust#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#create ActiveDirectoryDomainTrust#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#delete ActiveDirectoryDomainTrust#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#update ActiveDirectoryDomainTrust#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActiveDirectoryDomainTrustTimeoutsOutputReference <a name="ActiveDirectoryDomainTrustTimeoutsOutputReference" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import active_directory_domain_trust

activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ActiveDirectoryDomainTrustTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a>, cdktf.IResolvable]

---




# `google_active_directory_domain_trust`

Refer to the Terraform Registory for docs: [`google_active_directory_domain_trust`](https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust).

# `activeDirectoryDomainTrust` Submodule <a name="`activeDirectoryDomainTrust` Submodule" id="@cdktf/provider-google.activeDirectoryDomainTrust"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveDirectoryDomainTrust <a name="ActiveDirectoryDomainTrust" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust google_active_directory_domain_trust}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.active_directory_domain_trust.ActiveDirectoryDomainTrust;

ActiveDirectoryDomainTrust.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .domain(java.lang.String)
    .targetDnsIpAddresses(java.util.List<java.lang.String>)
    .targetDomainName(java.lang.String)
    .trustDirection(java.lang.String)
    .trustHandshakeSecret(java.lang.String)
    .trustType(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .selectiveAuthentication(java.lang.Boolean)
//  .selectiveAuthentication(IResolvable)
//  .timeouts(ActiveDirectoryDomainTrustTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions, https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.targetDnsIpAddresses">targetDnsIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | The target DNS server IP addresses which can resolve the remote domain involved in the trust. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.targetDomainName">targetDomainName</a></code> | <code>java.lang.String</code> | The fully qualified target domain name which will be in trust with the current domain. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.trustDirection">trustDirection</a></code> | <code>java.lang.String</code> | The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"]. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.trustHandshakeSecret">trustHandshakeSecret</a></code> | <code>java.lang.String</code> | The trust secret used for the handshake with the target domain. This will not be stored. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.trustType">trustType</a></code> | <code>java.lang.String</code> | The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"]. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#id ActiveDirectoryDomainTrust#id}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#project ActiveDirectoryDomainTrust#project}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.selectiveAuthentication">selectiveAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the trusted side has forest/domain wide access or selective access to an approved set of resources. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions, https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#domain ActiveDirectoryDomainTrust#domain}

---

##### `targetDnsIpAddresses`<sup>Required</sup> <a name="targetDnsIpAddresses" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.targetDnsIpAddresses"></a>

- *Type:* java.util.List<java.lang.String>

The target DNS server IP addresses which can resolve the remote domain involved in the trust.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#target_dns_ip_addresses ActiveDirectoryDomainTrust#target_dns_ip_addresses}

---

##### `targetDomainName`<sup>Required</sup> <a name="targetDomainName" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.targetDomainName"></a>

- *Type:* java.lang.String

The fully qualified target domain name which will be in trust with the current domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#target_domain_name ActiveDirectoryDomainTrust#target_domain_name}

---

##### `trustDirection`<sup>Required</sup> <a name="trustDirection" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.trustDirection"></a>

- *Type:* java.lang.String

The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#trust_direction ActiveDirectoryDomainTrust#trust_direction}

---

##### `trustHandshakeSecret`<sup>Required</sup> <a name="trustHandshakeSecret" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.trustHandshakeSecret"></a>

- *Type:* java.lang.String

The trust secret used for the handshake with the target domain. This will not be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#trust_handshake_secret ActiveDirectoryDomainTrust#trust_handshake_secret}

---

##### `trustType`<sup>Required</sup> <a name="trustType" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.trustType"></a>

- *Type:* java.lang.String

The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#trust_type ActiveDirectoryDomainTrust#trust_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#id ActiveDirectoryDomainTrust#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#project ActiveDirectoryDomainTrust#project}.

---

##### `selectiveAuthentication`<sup>Optional</sup> <a name="selectiveAuthentication" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.selectiveAuthentication"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the trusted side has forest/domain wide access or selective access to an approved set of resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#selective_authentication ActiveDirectoryDomainTrust#selective_authentication}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#timeouts ActiveDirectoryDomainTrust#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetSelectiveAuthentication">resetSelectiveAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.putTimeouts"></a>

```java
public void putTimeouts(ActiveDirectoryDomainTrustTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetProject"></a>

```java
public void resetProject()
```

##### `resetSelectiveAuthentication` <a name="resetSelectiveAuthentication" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetSelectiveAuthentication"></a>

```java
public void resetSelectiveAuthentication()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.active_directory_domain_trust.ActiveDirectoryDomainTrust;

ActiveDirectoryDomainTrust.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.active_directory_domain_trust.ActiveDirectoryDomainTrust;

ActiveDirectoryDomainTrust.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.active_directory_domain_trust.ActiveDirectoryDomainTrust;

ActiveDirectoryDomainTrust.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference">ActiveDirectoryDomainTrustTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.selectiveAuthenticationInput">selectiveAuthenticationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDnsIpAddressesInput">targetDnsIpAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDomainNameInput">targetDomainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustDirectionInput">trustDirectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustHandshakeSecretInput">trustHandshakeSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustTypeInput">trustTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.selectiveAuthentication">selectiveAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDnsIpAddresses">targetDnsIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDomainName">targetDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustDirection">trustDirection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustHandshakeSecret">trustHandshakeSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustType">trustType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.timeouts"></a>

```java
public ActiveDirectoryDomainTrustTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference">ActiveDirectoryDomainTrustTimeoutsOutputReference</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `selectiveAuthenticationInput`<sup>Optional</sup> <a name="selectiveAuthenticationInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.selectiveAuthenticationInput"></a>

```java
public java.lang.Object getSelectiveAuthenticationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetDnsIpAddressesInput`<sup>Optional</sup> <a name="targetDnsIpAddressesInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDnsIpAddressesInput"></a>

```java
public java.util.List<java.lang.String> getTargetDnsIpAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetDomainNameInput`<sup>Optional</sup> <a name="targetDomainNameInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDomainNameInput"></a>

```java
public java.lang.String getTargetDomainNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a>

---

##### `trustDirectionInput`<sup>Optional</sup> <a name="trustDirectionInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustDirectionInput"></a>

```java
public java.lang.String getTrustDirectionInput();
```

- *Type:* java.lang.String

---

##### `trustHandshakeSecretInput`<sup>Optional</sup> <a name="trustHandshakeSecretInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustHandshakeSecretInput"></a>

```java
public java.lang.String getTrustHandshakeSecretInput();
```

- *Type:* java.lang.String

---

##### `trustTypeInput`<sup>Optional</sup> <a name="trustTypeInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustTypeInput"></a>

```java
public java.lang.String getTrustTypeInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `selectiveAuthentication`<sup>Required</sup> <a name="selectiveAuthentication" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.selectiveAuthentication"></a>

```java
public java.lang.Object getSelectiveAuthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetDnsIpAddresses`<sup>Required</sup> <a name="targetDnsIpAddresses" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDnsIpAddresses"></a>

```java
public java.util.List<java.lang.String> getTargetDnsIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetDomainName`<sup>Required</sup> <a name="targetDomainName" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDomainName"></a>

```java
public java.lang.String getTargetDomainName();
```

- *Type:* java.lang.String

---

##### `trustDirection`<sup>Required</sup> <a name="trustDirection" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustDirection"></a>

```java
public java.lang.String getTrustDirection();
```

- *Type:* java.lang.String

---

##### `trustHandshakeSecret`<sup>Required</sup> <a name="trustHandshakeSecret" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustHandshakeSecret"></a>

```java
public java.lang.String getTrustHandshakeSecret();
```

- *Type:* java.lang.String

---

##### `trustType`<sup>Required</sup> <a name="trustType" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustType"></a>

```java
public java.lang.String getTrustType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ActiveDirectoryDomainTrustConfig <a name="ActiveDirectoryDomainTrustConfig" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.active_directory_domain_trust.ActiveDirectoryDomainTrustConfig;

ActiveDirectoryDomainTrustConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .domain(java.lang.String)
    .targetDnsIpAddresses(java.util.List<java.lang.String>)
    .targetDomainName(java.lang.String)
    .trustDirection(java.lang.String)
    .trustHandshakeSecret(java.lang.String)
    .trustType(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .selectiveAuthentication(java.lang.Boolean)
//  .selectiveAuthentication(IResolvable)
//  .timeouts(ActiveDirectoryDomainTrustTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions, https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.targetDnsIpAddresses">targetDnsIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | The target DNS server IP addresses which can resolve the remote domain involved in the trust. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.targetDomainName">targetDomainName</a></code> | <code>java.lang.String</code> | The fully qualified target domain name which will be in trust with the current domain. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustDirection">trustDirection</a></code> | <code>java.lang.String</code> | The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"]. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustHandshakeSecret">trustHandshakeSecret</a></code> | <code>java.lang.String</code> | The trust secret used for the handshake with the target domain. This will not be stored. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustType">trustType</a></code> | <code>java.lang.String</code> | The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"]. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#id ActiveDirectoryDomainTrust#id}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#project ActiveDirectoryDomainTrust#project}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.selectiveAuthentication">selectiveAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the trusted side has forest/domain wide access or selective access to an approved set of resources. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions, https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#domain ActiveDirectoryDomainTrust#domain}

---

##### `targetDnsIpAddresses`<sup>Required</sup> <a name="targetDnsIpAddresses" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.targetDnsIpAddresses"></a>

```java
public java.util.List<java.lang.String> getTargetDnsIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

The target DNS server IP addresses which can resolve the remote domain involved in the trust.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#target_dns_ip_addresses ActiveDirectoryDomainTrust#target_dns_ip_addresses}

---

##### `targetDomainName`<sup>Required</sup> <a name="targetDomainName" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.targetDomainName"></a>

```java
public java.lang.String getTargetDomainName();
```

- *Type:* java.lang.String

The fully qualified target domain name which will be in trust with the current domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#target_domain_name ActiveDirectoryDomainTrust#target_domain_name}

---

##### `trustDirection`<sup>Required</sup> <a name="trustDirection" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustDirection"></a>

```java
public java.lang.String getTrustDirection();
```

- *Type:* java.lang.String

The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#trust_direction ActiveDirectoryDomainTrust#trust_direction}

---

##### `trustHandshakeSecret`<sup>Required</sup> <a name="trustHandshakeSecret" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustHandshakeSecret"></a>

```java
public java.lang.String getTrustHandshakeSecret();
```

- *Type:* java.lang.String

The trust secret used for the handshake with the target domain. This will not be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#trust_handshake_secret ActiveDirectoryDomainTrust#trust_handshake_secret}

---

##### `trustType`<sup>Required</sup> <a name="trustType" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustType"></a>

```java
public java.lang.String getTrustType();
```

- *Type:* java.lang.String

The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#trust_type ActiveDirectoryDomainTrust#trust_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#id ActiveDirectoryDomainTrust#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#project ActiveDirectoryDomainTrust#project}.

---

##### `selectiveAuthentication`<sup>Optional</sup> <a name="selectiveAuthentication" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.selectiveAuthentication"></a>

```java
public java.lang.Object getSelectiveAuthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the trusted side has forest/domain wide access or selective access to an approved set of resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#selective_authentication ActiveDirectoryDomainTrust#selective_authentication}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.timeouts"></a>

```java
public ActiveDirectoryDomainTrustTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#timeouts ActiveDirectoryDomainTrust#timeouts}

---

### ActiveDirectoryDomainTrustTimeouts <a name="ActiveDirectoryDomainTrustTimeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.active_directory_domain_trust.ActiveDirectoryDomainTrustTimeouts;

ActiveDirectoryDomainTrustTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#create ActiveDirectoryDomainTrust#create}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#delete ActiveDirectoryDomainTrust#delete}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#update ActiveDirectoryDomainTrust#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#create ActiveDirectoryDomainTrust#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#delete ActiveDirectoryDomainTrust#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/active_directory_domain_trust#update ActiveDirectoryDomainTrust#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActiveDirectoryDomainTrustTimeoutsOutputReference <a name="ActiveDirectoryDomainTrustTimeoutsOutputReference" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.active_directory_domain_trust.ActiveDirectoryDomainTrustTimeoutsOutputReference;

new ActiveDirectoryDomainTrustTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a>

---




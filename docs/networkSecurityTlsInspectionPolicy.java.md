# `networkSecurityTlsInspectionPolicy` Submodule <a name="`networkSecurityTlsInspectionPolicy` Submodule" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityTlsInspectionPolicy <a name="NetworkSecurityTlsInspectionPolicy" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy google_network_security_tls_inspection_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_tls_inspection_policy.NetworkSecurityTlsInspectionPolicy;

NetworkSecurityTlsInspectionPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .caPool(java.lang.String)
    .name(java.lang.String)
//  .customTlsFeatures(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .excludePublicCaSet(java.lang.Boolean)
//  .excludePublicCaSet(IResolvable)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .minTlsVersion(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(NetworkSecurityTlsInspectionPolicyTimeouts)
//  .tlsFeatureProfile(java.lang.String)
//  .trustConfig(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.caPool">caPool</a></code> | <code>java.lang.String</code> | A CA pool resource used to issue interception certificates. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Short name of the TlsInspectionPolicy resource to be created. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.customTlsFeatures">customTlsFeatures</a></code> | <code>java.util.List<java.lang.String></code> | List of custom TLS cipher suites selected. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.excludePublicCaSet">excludePublicCaSet</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#id NetworkSecurityTlsInspectionPolicy#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the tls inspection policy. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | Minimum TLS version that the firewall should use when negotiating connections with both clients and servers. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#project NetworkSecurityTlsInspectionPolicy#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts">NetworkSecurityTlsInspectionPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.tlsFeatureProfile">tlsFeatureProfile</a></code> | <code>java.lang.String</code> | The selected Profile. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.trustConfig">trustConfig</a></code> | <code>java.lang.String</code> | A TrustConfig resource used when making a connection to the TLS server. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.caPool"></a>

- *Type:* java.lang.String

A CA pool resource used to issue interception certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#ca_pool NetworkSecurityTlsInspectionPolicy#ca_pool}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Short name of the TlsInspectionPolicy resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#name NetworkSecurityTlsInspectionPolicy#name}

---

##### `customTlsFeatures`<sup>Optional</sup> <a name="customTlsFeatures" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.customTlsFeatures"></a>

- *Type:* java.util.List<java.lang.String>

List of custom TLS cipher suites selected.

This field is valid only if the selected tls_feature_profile is CUSTOM. The compute.SslPoliciesService.ListAvailableFeatures method returns the set of features that can be specified in this list. Note that Secure Web Proxy does not yet honor this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#custom_tls_features NetworkSecurityTlsInspectionPolicy#custom_tls_features}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#description NetworkSecurityTlsInspectionPolicy#description}

---

##### `excludePublicCaSet`<sup>Optional</sup> <a name="excludePublicCaSet" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.excludePublicCaSet"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig.

These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trustConfig will be accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#exclude_public_ca_set NetworkSecurityTlsInspectionPolicy#exclude_public_ca_set}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#id NetworkSecurityTlsInspectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the tls inspection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#location NetworkSecurityTlsInspectionPolicy#location}

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.minTlsVersion"></a>

- *Type:* java.lang.String

Minimum TLS version that the firewall should use when negotiating connections with both clients and servers.

If this is not set, then the default value is to allow the broadest set of clients and servers (TLS 1.0 or higher). Setting this to more restrictive values may improve security, but may also prevent the firewall from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. Default value: "TLS_VERSION_UNSPECIFIED" Possible values: ["TLS_VERSION_UNSPECIFIED", "TLS_1_0", "TLS_1_1", "TLS_1_2", "TLS_1_3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#min_tls_version NetworkSecurityTlsInspectionPolicy#min_tls_version}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#project NetworkSecurityTlsInspectionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts">NetworkSecurityTlsInspectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#timeouts NetworkSecurityTlsInspectionPolicy#timeouts}

---

##### `tlsFeatureProfile`<sup>Optional</sup> <a name="tlsFeatureProfile" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.tlsFeatureProfile"></a>

- *Type:* java.lang.String

The selected Profile.

If this is not set, then the default value is to allow the broadest set of clients and servers ("PROFILE_COMPATIBLE"). Setting this to more restrictive values may improve security, but may also prevent the TLS inspection proxy from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. Default value: "PROFILE_UNSPECIFIED" Possible values: ["PROFILE_UNSPECIFIED", "PROFILE_COMPATIBLE", "PROFILE_MODERN", "PROFILE_RESTRICTED", "PROFILE_CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#tls_feature_profile NetworkSecurityTlsInspectionPolicy#tls_feature_profile}

---

##### `trustConfig`<sup>Optional</sup> <a name="trustConfig" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.trustConfig"></a>

- *Type:* java.lang.String

A TrustConfig resource used when making a connection to the TLS server.

This is a relative resource path following the form "projects/{project}/locations/{location}/trustConfigs/{trust_config}". This is necessary to intercept TLS connections to servers with certificates signed by a private CA or self-signed certificates. Trust config and the TLS inspection policy must be in the same region. Note that Secure Web Proxy does not yet honor this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#trust_config NetworkSecurityTlsInspectionPolicy#trust_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetCustomTlsFeatures">resetCustomTlsFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetExcludePublicCaSet">resetExcludePublicCaSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetTlsFeatureProfile">resetTlsFeatureProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetTrustConfig">resetTrustConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.putTimeouts"></a>

```java
public void putTimeouts(NetworkSecurityTlsInspectionPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts">NetworkSecurityTlsInspectionPolicyTimeouts</a>

---

##### `resetCustomTlsFeatures` <a name="resetCustomTlsFeatures" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetCustomTlsFeatures"></a>

```java
public void resetCustomTlsFeatures()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExcludePublicCaSet` <a name="resetExcludePublicCaSet" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetExcludePublicCaSet"></a>

```java
public void resetExcludePublicCaSet()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetMinTlsVersion"></a>

```java
public void resetMinTlsVersion()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTlsFeatureProfile` <a name="resetTlsFeatureProfile" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetTlsFeatureProfile"></a>

```java
public void resetTlsFeatureProfile()
```

##### `resetTrustConfig` <a name="resetTrustConfig" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetTrustConfig"></a>

```java
public void resetTrustConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityTlsInspectionPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_tls_inspection_policy.NetworkSecurityTlsInspectionPolicy;

NetworkSecurityTlsInspectionPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_tls_inspection_policy.NetworkSecurityTlsInspectionPolicy;

NetworkSecurityTlsInspectionPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_tls_inspection_policy.NetworkSecurityTlsInspectionPolicy;

NetworkSecurityTlsInspectionPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_tls_inspection_policy.NetworkSecurityTlsInspectionPolicy;

NetworkSecurityTlsInspectionPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkSecurityTlsInspectionPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkSecurityTlsInspectionPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkSecurityTlsInspectionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkSecurityTlsInspectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityTlsInspectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference">NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.caPoolInput">caPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.customTlsFeaturesInput">customTlsFeaturesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.excludePublicCaSetInput">excludePublicCaSetInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts">NetworkSecurityTlsInspectionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfileInput">tlsFeatureProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.trustConfigInput">trustConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.caPool">caPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.customTlsFeatures">customTlsFeatures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.excludePublicCaSet">excludePublicCaSet</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfile">tlsFeatureProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.trustConfig">trustConfig</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.timeouts"></a>

```java
public NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference">NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `caPoolInput`<sup>Optional</sup> <a name="caPoolInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.caPoolInput"></a>

```java
public java.lang.String getCaPoolInput();
```

- *Type:* java.lang.String

---

##### `customTlsFeaturesInput`<sup>Optional</sup> <a name="customTlsFeaturesInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.customTlsFeaturesInput"></a>

```java
public java.util.List<java.lang.String> getCustomTlsFeaturesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `excludePublicCaSetInput`<sup>Optional</sup> <a name="excludePublicCaSetInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.excludePublicCaSetInput"></a>

```java
public java.lang.Object getExcludePublicCaSetInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.minTlsVersionInput"></a>

```java
public java.lang.String getMinTlsVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts">NetworkSecurityTlsInspectionPolicyTimeouts</a>

---

##### `tlsFeatureProfileInput`<sup>Optional</sup> <a name="tlsFeatureProfileInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfileInput"></a>

```java
public java.lang.String getTlsFeatureProfileInput();
```

- *Type:* java.lang.String

---

##### `trustConfigInput`<sup>Optional</sup> <a name="trustConfigInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.trustConfigInput"></a>

```java
public java.lang.String getTrustConfigInput();
```

- *Type:* java.lang.String

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.caPool"></a>

```java
public java.lang.String getCaPool();
```

- *Type:* java.lang.String

---

##### `customTlsFeatures`<sup>Required</sup> <a name="customTlsFeatures" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.customTlsFeatures"></a>

```java
public java.util.List<java.lang.String> getCustomTlsFeatures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `excludePublicCaSet`<sup>Required</sup> <a name="excludePublicCaSet" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.excludePublicCaSet"></a>

```java
public java.lang.Object getExcludePublicCaSet();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.minTlsVersion"></a>

```java
public java.lang.String getMinTlsVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `tlsFeatureProfile`<sup>Required</sup> <a name="tlsFeatureProfile" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfile"></a>

```java
public java.lang.String getTlsFeatureProfile();
```

- *Type:* java.lang.String

---

##### `trustConfig`<sup>Required</sup> <a name="trustConfig" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.trustConfig"></a>

```java
public java.lang.String getTrustConfig();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityTlsInspectionPolicyConfig <a name="NetworkSecurityTlsInspectionPolicyConfig" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_tls_inspection_policy.NetworkSecurityTlsInspectionPolicyConfig;

NetworkSecurityTlsInspectionPolicyConfig.builder()
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
    .caPool(java.lang.String)
    .name(java.lang.String)
//  .customTlsFeatures(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .excludePublicCaSet(java.lang.Boolean)
//  .excludePublicCaSet(IResolvable)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .minTlsVersion(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(NetworkSecurityTlsInspectionPolicyTimeouts)
//  .tlsFeatureProfile(java.lang.String)
//  .trustConfig(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.caPool">caPool</a></code> | <code>java.lang.String</code> | A CA pool resource used to issue interception certificates. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Short name of the TlsInspectionPolicy resource to be created. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.customTlsFeatures">customTlsFeatures</a></code> | <code>java.util.List<java.lang.String></code> | List of custom TLS cipher suites selected. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.excludePublicCaSet">excludePublicCaSet</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#id NetworkSecurityTlsInspectionPolicy#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the tls inspection policy. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | Minimum TLS version that the firewall should use when negotiating connections with both clients and servers. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#project NetworkSecurityTlsInspectionPolicy#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts">NetworkSecurityTlsInspectionPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.tlsFeatureProfile">tlsFeatureProfile</a></code> | <code>java.lang.String</code> | The selected Profile. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.trustConfig">trustConfig</a></code> | <code>java.lang.String</code> | A TrustConfig resource used when making a connection to the TLS server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.caPool"></a>

```java
public java.lang.String getCaPool();
```

- *Type:* java.lang.String

A CA pool resource used to issue interception certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#ca_pool NetworkSecurityTlsInspectionPolicy#ca_pool}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Short name of the TlsInspectionPolicy resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#name NetworkSecurityTlsInspectionPolicy#name}

---

##### `customTlsFeatures`<sup>Optional</sup> <a name="customTlsFeatures" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.customTlsFeatures"></a>

```java
public java.util.List<java.lang.String> getCustomTlsFeatures();
```

- *Type:* java.util.List<java.lang.String>

List of custom TLS cipher suites selected.

This field is valid only if the selected tls_feature_profile is CUSTOM. The compute.SslPoliciesService.ListAvailableFeatures method returns the set of features that can be specified in this list. Note that Secure Web Proxy does not yet honor this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#custom_tls_features NetworkSecurityTlsInspectionPolicy#custom_tls_features}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#description NetworkSecurityTlsInspectionPolicy#description}

---

##### `excludePublicCaSet`<sup>Optional</sup> <a name="excludePublicCaSet" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.excludePublicCaSet"></a>

```java
public java.lang.Object getExcludePublicCaSet();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig.

These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trustConfig will be accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#exclude_public_ca_set NetworkSecurityTlsInspectionPolicy#exclude_public_ca_set}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#id NetworkSecurityTlsInspectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the tls inspection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#location NetworkSecurityTlsInspectionPolicy#location}

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.minTlsVersion"></a>

```java
public java.lang.String getMinTlsVersion();
```

- *Type:* java.lang.String

Minimum TLS version that the firewall should use when negotiating connections with both clients and servers.

If this is not set, then the default value is to allow the broadest set of clients and servers (TLS 1.0 or higher). Setting this to more restrictive values may improve security, but may also prevent the firewall from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. Default value: "TLS_VERSION_UNSPECIFIED" Possible values: ["TLS_VERSION_UNSPECIFIED", "TLS_1_0", "TLS_1_1", "TLS_1_2", "TLS_1_3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#min_tls_version NetworkSecurityTlsInspectionPolicy#min_tls_version}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#project NetworkSecurityTlsInspectionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.timeouts"></a>

```java
public NetworkSecurityTlsInspectionPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts">NetworkSecurityTlsInspectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#timeouts NetworkSecurityTlsInspectionPolicy#timeouts}

---

##### `tlsFeatureProfile`<sup>Optional</sup> <a name="tlsFeatureProfile" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.tlsFeatureProfile"></a>

```java
public java.lang.String getTlsFeatureProfile();
```

- *Type:* java.lang.String

The selected Profile.

If this is not set, then the default value is to allow the broadest set of clients and servers ("PROFILE_COMPATIBLE"). Setting this to more restrictive values may improve security, but may also prevent the TLS inspection proxy from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. Default value: "PROFILE_UNSPECIFIED" Possible values: ["PROFILE_UNSPECIFIED", "PROFILE_COMPATIBLE", "PROFILE_MODERN", "PROFILE_RESTRICTED", "PROFILE_CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#tls_feature_profile NetworkSecurityTlsInspectionPolicy#tls_feature_profile}

---

##### `trustConfig`<sup>Optional</sup> <a name="trustConfig" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.trustConfig"></a>

```java
public java.lang.String getTrustConfig();
```

- *Type:* java.lang.String

A TrustConfig resource used when making a connection to the TLS server.

This is a relative resource path following the form "projects/{project}/locations/{location}/trustConfigs/{trust_config}". This is necessary to intercept TLS connections to servers with certificates signed by a private CA or self-signed certificates. Trust config and the TLS inspection policy must be in the same region. Note that Secure Web Proxy does not yet honor this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#trust_config NetworkSecurityTlsInspectionPolicy#trust_config}

---

### NetworkSecurityTlsInspectionPolicyTimeouts <a name="NetworkSecurityTlsInspectionPolicyTimeouts" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_tls_inspection_policy.NetworkSecurityTlsInspectionPolicyTimeouts;

NetworkSecurityTlsInspectionPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#create NetworkSecurityTlsInspectionPolicy#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#delete NetworkSecurityTlsInspectionPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#update NetworkSecurityTlsInspectionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#create NetworkSecurityTlsInspectionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#delete NetworkSecurityTlsInspectionPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_security_tls_inspection_policy#update NetworkSecurityTlsInspectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference <a name="NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_tls_inspection_policy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference;

new NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts">NetworkSecurityTlsInspectionPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts">NetworkSecurityTlsInspectionPolicyTimeouts</a>

---




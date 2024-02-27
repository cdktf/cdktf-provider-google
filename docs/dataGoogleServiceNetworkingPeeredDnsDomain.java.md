# `dataGoogleServiceNetworkingPeeredDnsDomain` Submodule <a name="`dataGoogleServiceNetworkingPeeredDnsDomain` Submodule" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleServiceNetworkingPeeredDnsDomain <a name="DataGoogleServiceNetworkingPeeredDnsDomain" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain google_service_networking_peered_dns_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_service_networking_peered_dns_domain.DataGoogleServiceNetworkingPeeredDnsDomain;

DataGoogleServiceNetworkingPeeredDnsDomain.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .network(java.lang.String)
    .project(java.lang.String)
    .service(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#name DataGoogleServiceNetworkingPeeredDnsDomain#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#network DataGoogleServiceNetworkingPeeredDnsDomain#network}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#project DataGoogleServiceNetworkingPeeredDnsDomain#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#service DataGoogleServiceNetworkingPeeredDnsDomain#service}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#id DataGoogleServiceNetworkingPeeredDnsDomain#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#name DataGoogleServiceNetworkingPeeredDnsDomain#name}.

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.network"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#network DataGoogleServiceNetworkingPeeredDnsDomain#network}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#project DataGoogleServiceNetworkingPeeredDnsDomain#project}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.service"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#service DataGoogleServiceNetworkingPeeredDnsDomain#service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#id DataGoogleServiceNetworkingPeeredDnsDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleServiceNetworkingPeeredDnsDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_service_networking_peered_dns_domain.DataGoogleServiceNetworkingPeeredDnsDomain;

DataGoogleServiceNetworkingPeeredDnsDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_service_networking_peered_dns_domain.DataGoogleServiceNetworkingPeeredDnsDomain;

DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_service_networking_peered_dns_domain.DataGoogleServiceNetworkingPeeredDnsDomain;

DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_service_networking_peered_dns_domain.DataGoogleServiceNetworkingPeeredDnsDomain;

DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleServiceNetworkingPeeredDnsDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleServiceNetworkingPeeredDnsDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleServiceNetworkingPeeredDnsDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleServiceNetworkingPeeredDnsDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.dnsSuffix">dnsSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dnsSuffix`<sup>Required</sup> <a name="dnsSuffix" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.dnsSuffix"></a>

```java
public java.lang.String getDnsSuffix();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleServiceNetworkingPeeredDnsDomainConfig <a name="DataGoogleServiceNetworkingPeeredDnsDomainConfig" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_service_networking_peered_dns_domain.DataGoogleServiceNetworkingPeeredDnsDomainConfig;

DataGoogleServiceNetworkingPeeredDnsDomainConfig.builder()
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
    .name(java.lang.String)
    .network(java.lang.String)
    .project(java.lang.String)
    .service(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#name DataGoogleServiceNetworkingPeeredDnsDomain#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.network">network</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#network DataGoogleServiceNetworkingPeeredDnsDomain#network}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#project DataGoogleServiceNetworkingPeeredDnsDomain#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#service DataGoogleServiceNetworkingPeeredDnsDomain#service}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#id DataGoogleServiceNetworkingPeeredDnsDomain#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#name DataGoogleServiceNetworkingPeeredDnsDomain#name}.

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#network DataGoogleServiceNetworkingPeeredDnsDomain#network}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#project DataGoogleServiceNetworkingPeeredDnsDomain#project}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#service DataGoogleServiceNetworkingPeeredDnsDomain#service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/service_networking_peered_dns_domain#id DataGoogleServiceNetworkingPeeredDnsDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




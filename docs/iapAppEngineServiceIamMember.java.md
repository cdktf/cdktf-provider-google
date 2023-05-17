# `google_iap_app_engine_service_iam_member`

Refer to the Terraform Registory for docs: [`google_iap_app_engine_service_iam_member`](https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member).

# `iapAppEngineServiceIamMember` Submodule <a name="`iapAppEngineServiceIamMember` Submodule" id="@cdktf/provider-google.iapAppEngineServiceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapAppEngineServiceIamMember <a name="IapAppEngineServiceIamMember" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member google_iap_app_engine_service_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_app_engine_service_iam_member.IapAppEngineServiceIamMember;

IapAppEngineServiceIamMember.Builder.create(Construct scope, java.lang.String id)
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
    .appId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
    .service(java.lang.String)
//  .condition(IapAppEngineServiceIamMemberCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#app_id IapAppEngineServiceIamMember#app_id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#member IapAppEngineServiceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#role IapAppEngineServiceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#service IapAppEngineServiceIamMember#service}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#id IapAppEngineServiceIamMember#id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#project IapAppEngineServiceIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#app_id IapAppEngineServiceIamMember#app_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#member IapAppEngineServiceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#role IapAppEngineServiceIamMember#role}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.service"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#service IapAppEngineServiceIamMember#service}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#condition IapAppEngineServiceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#id IapAppEngineServiceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#project IapAppEngineServiceIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.putCondition"></a>

```java
public void putCondition(IapAppEngineServiceIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_app_engine_service_iam_member.IapAppEngineServiceIamMember;

IapAppEngineServiceIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_app_engine_service_iam_member.IapAppEngineServiceIamMember;

IapAppEngineServiceIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_app_engine_service_iam_member.IapAppEngineServiceIamMember;

IapAppEngineServiceIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference">IapAppEngineServiceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.condition"></a>

```java
public IapAppEngineServiceIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference">IapAppEngineServiceIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.conditionInput"></a>

```java
public IapAppEngineServiceIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IapAppEngineServiceIamMemberCondition <a name="IapAppEngineServiceIamMemberCondition" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_app_engine_service_iam_member.IapAppEngineServiceIamMemberCondition;

IapAppEngineServiceIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#expression IapAppEngineServiceIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#title IapAppEngineServiceIamMember#title}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#description IapAppEngineServiceIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#expression IapAppEngineServiceIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#title IapAppEngineServiceIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#description IapAppEngineServiceIamMember#description}.

---

### IapAppEngineServiceIamMemberConfig <a name="IapAppEngineServiceIamMemberConfig" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_app_engine_service_iam_member.IapAppEngineServiceIamMemberConfig;

IapAppEngineServiceIamMemberConfig.builder()
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
    .appId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
    .service(java.lang.String)
//  .condition(IapAppEngineServiceIamMemberCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#app_id IapAppEngineServiceIamMember#app_id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#member IapAppEngineServiceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#role IapAppEngineServiceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#service IapAppEngineServiceIamMember#service}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#id IapAppEngineServiceIamMember#id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#project IapAppEngineServiceIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#app_id IapAppEngineServiceIamMember#app_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#member IapAppEngineServiceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#role IapAppEngineServiceIamMember#role}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#service IapAppEngineServiceIamMember#service}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.condition"></a>

```java
public IapAppEngineServiceIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#condition IapAppEngineServiceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#id IapAppEngineServiceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/iap_app_engine_service_iam_member#project IapAppEngineServiceIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapAppEngineServiceIamMemberConditionOutputReference <a name="IapAppEngineServiceIamMemberConditionOutputReference" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_app_engine_service_iam_member.IapAppEngineServiceIamMemberConditionOutputReference;

new IapAppEngineServiceIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.internalValue"></a>

```java
public IapAppEngineServiceIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a>

---




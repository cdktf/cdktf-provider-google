# `google_endpoints_service_consumers_iam_member`

Refer to the Terraform Registory for docs: [`google_endpoints_service_consumers_iam_member`](https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member).

# `endpointsServiceConsumersIamMember` Submodule <a name="`endpointsServiceConsumersIamMember` Submodule" id="@cdktf/provider-google.endpointsServiceConsumersIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EndpointsServiceConsumersIamMember <a name="EndpointsServiceConsumersIamMember" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member google_endpoints_service_consumers_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.endpoints_service_consumers_iam_member.EndpointsServiceConsumersIamMember;

EndpointsServiceConsumersIamMember.Builder.create(Construct scope, java.lang.String id)
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
    .consumerProject(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
    .serviceName(java.lang.String)
//  .condition(EndpointsServiceConsumersIamMemberCondition)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.consumerProject">consumerProject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#consumer_project EndpointsServiceConsumersIamMember#consumer_project}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#member EndpointsServiceConsumersIamMember#member}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#role EndpointsServiceConsumersIamMember#role}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#service_name EndpointsServiceConsumersIamMember#service_name}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition">EndpointsServiceConsumersIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#id EndpointsServiceConsumersIamMember#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `consumerProject`<sup>Required</sup> <a name="consumerProject" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.consumerProject"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#consumer_project EndpointsServiceConsumersIamMember#consumer_project}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#member EndpointsServiceConsumersIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#role EndpointsServiceConsumersIamMember#role}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#service_name EndpointsServiceConsumersIamMember#service_name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition">EndpointsServiceConsumersIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#condition EndpointsServiceConsumersIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#id EndpointsServiceConsumersIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.putCondition"></a>

```java
public void putCondition(EndpointsServiceConsumersIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition">EndpointsServiceConsumersIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.endpoints_service_consumers_iam_member.EndpointsServiceConsumersIamMember;

EndpointsServiceConsumersIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.endpoints_service_consumers_iam_member.EndpointsServiceConsumersIamMember;

EndpointsServiceConsumersIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.endpoints_service_consumers_iam_member.EndpointsServiceConsumersIamMember;

EndpointsServiceConsumersIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference">EndpointsServiceConsumersIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition">EndpointsServiceConsumersIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.consumerProjectInput">consumerProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.consumerProject">consumerProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.condition"></a>

```java
public EndpointsServiceConsumersIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference">EndpointsServiceConsumersIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.conditionInput"></a>

```java
public EndpointsServiceConsumersIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition">EndpointsServiceConsumersIamMemberCondition</a>

---

##### `consumerProjectInput`<sup>Optional</sup> <a name="consumerProjectInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.consumerProjectInput"></a>

```java
public java.lang.String getConsumerProjectInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `consumerProject`<sup>Required</sup> <a name="consumerProject" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.consumerProject"></a>

```java
public java.lang.String getConsumerProject();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EndpointsServiceConsumersIamMemberCondition <a name="EndpointsServiceConsumersIamMemberCondition" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.endpoints_service_consumers_iam_member.EndpointsServiceConsumersIamMemberCondition;

EndpointsServiceConsumersIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#expression EndpointsServiceConsumersIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#title EndpointsServiceConsumersIamMember#title}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#description EndpointsServiceConsumersIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#expression EndpointsServiceConsumersIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#title EndpointsServiceConsumersIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#description EndpointsServiceConsumersIamMember#description}.

---

### EndpointsServiceConsumersIamMemberConfig <a name="EndpointsServiceConsumersIamMemberConfig" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.endpoints_service_consumers_iam_member.EndpointsServiceConsumersIamMemberConfig;

EndpointsServiceConsumersIamMemberConfig.builder()
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
    .consumerProject(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
    .serviceName(java.lang.String)
//  .condition(EndpointsServiceConsumersIamMemberCondition)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.consumerProject">consumerProject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#consumer_project EndpointsServiceConsumersIamMember#consumer_project}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#member EndpointsServiceConsumersIamMember#member}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#role EndpointsServiceConsumersIamMember#role}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#service_name EndpointsServiceConsumersIamMember#service_name}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition">EndpointsServiceConsumersIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#id EndpointsServiceConsumersIamMember#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `consumerProject`<sup>Required</sup> <a name="consumerProject" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.consumerProject"></a>

```java
public java.lang.String getConsumerProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#consumer_project EndpointsServiceConsumersIamMember#consumer_project}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#member EndpointsServiceConsumersIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#role EndpointsServiceConsumersIamMember#role}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#service_name EndpointsServiceConsumersIamMember#service_name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.condition"></a>

```java
public EndpointsServiceConsumersIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition">EndpointsServiceConsumersIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#condition EndpointsServiceConsumersIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/endpoints_service_consumers_iam_member#id EndpointsServiceConsumersIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### EndpointsServiceConsumersIamMemberConditionOutputReference <a name="EndpointsServiceConsumersIamMemberConditionOutputReference" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.endpoints_service_consumers_iam_member.EndpointsServiceConsumersIamMemberConditionOutputReference;

new EndpointsServiceConsumersIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition">EndpointsServiceConsumersIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.internalValue"></a>

```java
public EndpointsServiceConsumersIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition">EndpointsServiceConsumersIamMemberCondition</a>

---




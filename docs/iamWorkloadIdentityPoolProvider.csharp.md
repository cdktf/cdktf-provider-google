# `google_iam_workload_identity_pool_provider`

Refer to the Terraform Registory for docs: [`google_iam_workload_identity_pool_provider`](https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider).

# `iamWorkloadIdentityPoolProvider` Submodule <a name="`iamWorkloadIdentityPoolProvider` Submodule" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityPoolProvider <a name="IamWorkloadIdentityPoolProvider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider google_iam_workload_identity_pool_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkloadIdentityPoolProvider(Construct Scope, string Id, IamWorkloadIdentityPoolProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig">IamWorkloadIdentityPoolProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig">IamWorkloadIdentityPoolProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putAws">PutAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putOidc">PutOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAttributeCondition">ResetAttributeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAttributeMapping">ResetAttributeMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAws">ResetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetOidc">ResetOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAws` <a name="PutAws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putAws"></a>

```csharp
private void PutAws(IamWorkloadIdentityPoolProviderAws Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a>

---

##### `PutOidc` <a name="PutOidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putOidc"></a>

```csharp
private void PutOidc(IamWorkloadIdentityPoolProviderOidc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putTimeouts"></a>

```csharp
private void PutTimeouts(IamWorkloadIdentityPoolProviderTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a>

---

##### `ResetAttributeCondition` <a name="ResetAttributeCondition" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAttributeCondition"></a>

```csharp
private void ResetAttributeCondition()
```

##### `ResetAttributeMapping` <a name="ResetAttributeMapping" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAttributeMapping"></a>

```csharp
private void ResetAttributeMapping()
```

##### `ResetAws` <a name="ResetAws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetAws"></a>

```csharp
private void ResetAws()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOidc` <a name="ResetOidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetOidc"></a>

```csharp
private void ResetOidc()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkloadIdentityPoolProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkloadIdentityPoolProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkloadIdentityPoolProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference">IamWorkloadIdentityPoolProviderAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.oidc">Oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference">IamWorkloadIdentityPoolProviderOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference">IamWorkloadIdentityPoolProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeConditionInput">AttributeConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeMappingInput">AttributeMappingInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.awsInput">AwsInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.oidcInput">OidcInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput">WorkloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput">WorkloadIdentityPoolProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeCondition">AttributeCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeMapping">AttributeMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId">WorkloadIdentityPoolProviderId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.aws"></a>

```csharp
public IamWorkloadIdentityPoolProviderAwsOutputReference Aws { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference">IamWorkloadIdentityPoolProviderAwsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Oidc`<sup>Required</sup> <a name="Oidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.oidc"></a>

```csharp
public IamWorkloadIdentityPoolProviderOidcOutputReference Oidc { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference">IamWorkloadIdentityPoolProviderOidcOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.timeouts"></a>

```csharp
public IamWorkloadIdentityPoolProviderTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference">IamWorkloadIdentityPoolProviderTimeoutsOutputReference</a>

---

##### `AttributeConditionInput`<sup>Optional</sup> <a name="AttributeConditionInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeConditionInput"></a>

```csharp
public string AttributeConditionInput { get; }
```

- *Type:* string

---

##### `AttributeMappingInput`<sup>Optional</sup> <a name="AttributeMappingInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeMappingInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributeMappingInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AwsInput`<sup>Optional</sup> <a name="AwsInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.awsInput"></a>

```csharp
public IamWorkloadIdentityPoolProviderAws AwsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OidcInput`<sup>Optional</sup> <a name="OidcInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.oidcInput"></a>

```csharp
public IamWorkloadIdentityPoolProviderOidc OidcInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkloadIdentityPoolIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolIdInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput"></a>

```csharp
public string WorkloadIdentityPoolIdInput { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolProviderIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolProviderIdInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput"></a>

```csharp
public string WorkloadIdentityPoolProviderIdInput { get; }
```

- *Type:* string

---

##### `AttributeCondition`<sup>Required</sup> <a name="AttributeCondition" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeCondition"></a>

```csharp
public string AttributeCondition { get; }
```

- *Type:* string

---

##### `AttributeMapping`<sup>Required</sup> <a name="AttributeMapping" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.attributeMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributeMapping { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId"></a>

```csharp
public string WorkloadIdentityPoolId { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolProviderId`<sup>Required</sup> <a name="WorkloadIdentityPoolProviderId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId"></a>

```csharp
public string WorkloadIdentityPoolProviderId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityPoolProviderAws <a name="IamWorkloadIdentityPoolProviderAws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkloadIdentityPoolProviderAws {
    string AccountId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws.property.accountId">AccountId</a></code> | <code>string</code> | The AWS account ID. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#account_id IamWorkloadIdentityPoolProvider#account_id}

---

### IamWorkloadIdentityPoolProviderConfig <a name="IamWorkloadIdentityPoolProviderConfig" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkloadIdentityPoolProviderConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string WorkloadIdentityPoolId,
    string WorkloadIdentityPoolProviderId,
    string AttributeCondition = null,
    System.Collections.Generic.IDictionary<string, string> AttributeMapping = null,
    IamWorkloadIdentityPoolProviderAws Aws = null,
    string Description = null,
    object Disabled = null,
    string DisplayName = null,
    string Id = null,
    IamWorkloadIdentityPoolProviderOidc Oidc = null,
    string Project = null,
    IamWorkloadIdentityPoolProviderTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>string</code> | The ID used for the pool, which is the final component of the pool resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId">WorkloadIdentityPoolProviderId</a></code> | <code>string</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.attributeCondition">AttributeCondition</a></code> | <code>string</code> | [A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.attributeMapping">AttributeMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.description">Description</a></code> | <code>string</code> | A description for the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.disabled">Disabled</a></code> | <code>object</code> | Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A display name for the provider. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#id IamWorkloadIdentityPoolProvider#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.oidc">Oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#project IamWorkloadIdentityPoolProvider#project}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId"></a>

```csharp
public string WorkloadIdentityPoolId { get; set; }
```

- *Type:* string

The ID used for the pool, which is the final component of the pool resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#workload_identity_pool_id IamWorkloadIdentityPoolProvider#workload_identity_pool_id}

---

##### `WorkloadIdentityPoolProviderId`<sup>Required</sup> <a name="WorkloadIdentityPoolProviderId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId"></a>

```csharp
public string WorkloadIdentityPoolProviderId { get; set; }
```

- *Type:* string

The ID for the provider, which becomes the final component of the resource name.

This
value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#workload_identity_pool_provider_id IamWorkloadIdentityPoolProvider#workload_identity_pool_provider_id}

---

##### `AttributeCondition`<sup>Optional</sup> <a name="AttributeCondition" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.attributeCondition"></a>

```csharp
public string AttributeCondition { get; set; }
```

- *Type:* string

[A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted.

The expression must output a boolean representing whether to allow the federation.

The following keywords may be referenced in the expressions:
'assertion': JSON representing the authentication credential issued by the provider.
'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.

The maximum length of the attribute condition expression is 4096 characters. If
unspecified, all valid authentication credential are accepted.

The following example shows how to only allow credentials with a mapped 'google.groups'
value of 'admins':

```
"'admins' in google.groups"
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#attribute_condition IamWorkloadIdentityPoolProvider#attribute_condition}

---

##### `AttributeMapping`<sup>Optional</sup> <a name="AttributeMapping" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.attributeMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributeMapping { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'.

Each key must be a string specifying the Google Cloud IAM attribute to map to.

The following keys are supported:
'google.subject': The principal IAM is authenticating. You can reference this value
in IAM bindings. This is also the subject that appears in Cloud Logging logs.
Cannot exceed 127 characters.
'google.groups': Groups the external identity belongs to. You can grant groups
access to resources using an IAM 'principalSet' binding; access applies to all
members of the group.

You can also provide custom attributes by specifying 'attribute.{custom_attribute}',
where '{custom_attribute}' is the name of the custom attribute to be mapped. You can
define a maximum of 50 custom attributes. The maximum length of a mapped attribute key
is 100 characters, and the key may only contain the characters [a-z0-9_].

You can reference these attributes in IAM policies to define fine-grained access for a
workload to Google Cloud resources. For example:
'google.subject':
'principal://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/subject/{value}'
'google.groups':
'principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/group/{value}'
'attribute.{custom_attribute}':
'principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/attribute.{custom_attribute}/{value}'

Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.

You can use the 'assertion' keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.

The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.

For AWS providers, the following rules apply:

* If no attribute mapping is defined, the following default mapping applies:

```
{
   "google.subject":"assertion.arn",
   "attribute.aws_role":
     "assertion.arn.contains('assumed-role')"
     " ? assertion.arn.extract('{account_arn}assumed-role/')"
     "   + 'assumed-role/'"
     "   + assertion.arn.extract('assumed-role/{role_name}/')"
     " : assertion.arn",
}
```

* If any custom attribute mappings are defined, they must include a mapping to the
  'google.subject' attribute.

For OIDC providers, the following rules apply:

* Custom attribute mappings must be defined, and must include a mapping to the
  'google.subject' attribute. For example, the following maps the 'sub' claim of the
  incoming credential to the 'subject' attribute on a Google token.

```
{"google.subject": "assertion.sub"}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#attribute_mapping IamWorkloadIdentityPoolProvider#attribute_mapping}

---

##### `Aws`<sup>Optional</sup> <a name="Aws" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.aws"></a>

```csharp
public IamWorkloadIdentityPoolProviderAws Aws { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#aws IamWorkloadIdentityPoolProvider#aws}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#description IamWorkloadIdentityPoolProvider#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#disabled IamWorkloadIdentityPoolProvider#disabled}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A display name for the provider. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#display_name IamWorkloadIdentityPoolProvider#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#id IamWorkloadIdentityPoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Oidc`<sup>Optional</sup> <a name="Oidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.oidc"></a>

```csharp
public IamWorkloadIdentityPoolProviderOidc Oidc { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#oidc IamWorkloadIdentityPoolProvider#oidc}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#project IamWorkloadIdentityPoolProvider#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderConfig.property.timeouts"></a>

```csharp
public IamWorkloadIdentityPoolProviderTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts">IamWorkloadIdentityPoolProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#timeouts IamWorkloadIdentityPoolProvider#timeouts}

---

### IamWorkloadIdentityPoolProviderOidc <a name="IamWorkloadIdentityPoolProviderOidc" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkloadIdentityPoolProviderOidc {
    string IssuerUri,
    string[] AllowedAudiences = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.issuerUri">IssuerUri</a></code> | <code>string</code> | The OIDC issuer URL. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.allowedAudiences">AllowedAudiences</a></code> | <code>string[]</code> | Acceptable values for the 'aud' field (audience) in the OIDC token. |

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.issuerUri"></a>

```csharp
public string IssuerUri { get; set; }
```

- *Type:* string

The OIDC issuer URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#issuer_uri IamWorkloadIdentityPoolProvider#issuer_uri}

---

##### `AllowedAudiences`<sup>Optional</sup> <a name="AllowedAudiences" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc.property.allowedAudiences"></a>

```csharp
public string[] AllowedAudiences { get; set; }
```

- *Type:* string[]

Acceptable values for the 'aud' field (audience) in the OIDC token.

Token exchange
requests are rejected if the token audience does not match one of the configured
values. Each audience may be at most 256 characters. A maximum of 10 audiences may
be configured.

If this list is empty, the OIDC token audience must be equal to the full canonical
resource name of the WorkloadIdentityPoolProvider, with or without the HTTPS prefix.
For example:

```
//iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
https://iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#allowed_audiences IamWorkloadIdentityPoolProvider#allowed_audiences}

---

### IamWorkloadIdentityPoolProviderTimeouts <a name="IamWorkloadIdentityPoolProviderTimeouts" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkloadIdentityPoolProviderTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#create IamWorkloadIdentityPoolProvider#create}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#delete IamWorkloadIdentityPoolProvider#delete}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#update IamWorkloadIdentityPoolProvider#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#create IamWorkloadIdentityPoolProvider#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#delete IamWorkloadIdentityPoolProvider#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/iam_workload_identity_pool_provider#update IamWorkloadIdentityPoolProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityPoolProviderAwsOutputReference <a name="IamWorkloadIdentityPoolProviderAwsOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkloadIdentityPoolProviderAwsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue"></a>

```csharp
public IamWorkloadIdentityPoolProviderAws InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderAws">IamWorkloadIdentityPoolProviderAws</a>

---


### IamWorkloadIdentityPoolProviderOidcOutputReference <a name="IamWorkloadIdentityPoolProviderOidcOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkloadIdentityPoolProviderOidcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resetAllowedAudiences">ResetAllowedAudiences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAudiences` <a name="ResetAllowedAudiences" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.resetAllowedAudiences"></a>

```csharp
private void ResetAllowedAudiences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiencesInput">AllowedAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUriInput">IssuerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences">AllowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri">IssuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAudiencesInput`<sup>Optional</sup> <a name="AllowedAudiencesInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiencesInput"></a>

```csharp
public string[] AllowedAudiencesInput { get; }
```

- *Type:* string[]

---

##### `IssuerUriInput`<sup>Optional</sup> <a name="IssuerUriInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUriInput"></a>

```csharp
public string IssuerUriInput { get; }
```

- *Type:* string

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences"></a>

```csharp
public string[] AllowedAudiences { get; }
```

- *Type:* string[]

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri"></a>

```csharp
public string IssuerUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue"></a>

```csharp
public IamWorkloadIdentityPoolProviderOidc InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderOidc">IamWorkloadIdentityPoolProviderOidc</a>

---


### IamWorkloadIdentityPoolProviderTimeoutsOutputReference <a name="IamWorkloadIdentityPoolProviderTimeoutsOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkloadIdentityPoolProviderTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkloadIdentityPoolProvider.IamWorkloadIdentityPoolProviderTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




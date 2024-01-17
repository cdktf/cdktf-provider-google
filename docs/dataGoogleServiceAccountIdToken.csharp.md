# `dataGoogleServiceAccountIdToken` Submodule <a name="`dataGoogleServiceAccountIdToken` Submodule" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleServiceAccountIdToken <a name="DataGoogleServiceAccountIdToken" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/service_account_id_token google_service_account_id_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleServiceAccountIdToken(Construct Scope, string Id, DataGoogleServiceAccountIdTokenConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig">DataGoogleServiceAccountIdTokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig">DataGoogleServiceAccountIdTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetDelegates">ResetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetIncludeEmail">ResetIncludeEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetTargetServiceAccount">ResetTargetServiceAccount</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDelegates` <a name="ResetDelegates" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetDelegates"></a>

```csharp
private void ResetDelegates()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeEmail` <a name="ResetIncludeEmail" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetIncludeEmail"></a>

```csharp
private void ResetIncludeEmail()
```

##### `ResetTargetServiceAccount` <a name="ResetTargetServiceAccount" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetTargetServiceAccount"></a>

```csharp
private void ResetTargetServiceAccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleServiceAccountIdToken resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleServiceAccountIdToken.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleServiceAccountIdToken.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleServiceAccountIdToken.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleServiceAccountIdToken.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleServiceAccountIdToken resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleServiceAccountIdToken to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleServiceAccountIdToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/service_account_id_token#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleServiceAccountIdToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.idToken">IdToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.delegatesInput">DelegatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.includeEmailInput">IncludeEmailInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetAudienceInput">TargetAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetServiceAccountInput">TargetServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.delegates">Delegates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.includeEmail">IncludeEmail</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetAudience">TargetAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.idToken"></a>

```csharp
public string IdToken { get; }
```

- *Type:* string

---

##### `DelegatesInput`<sup>Optional</sup> <a name="DelegatesInput" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.delegatesInput"></a>

```csharp
public string[] DelegatesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeEmailInput`<sup>Optional</sup> <a name="IncludeEmailInput" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.includeEmailInput"></a>

```csharp
public object IncludeEmailInput { get; }
```

- *Type:* object

---

##### `TargetAudienceInput`<sup>Optional</sup> <a name="TargetAudienceInput" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetAudienceInput"></a>

```csharp
public string TargetAudienceInput { get; }
```

- *Type:* string

---

##### `TargetServiceAccountInput`<sup>Optional</sup> <a name="TargetServiceAccountInput" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetServiceAccountInput"></a>

```csharp
public string TargetServiceAccountInput { get; }
```

- *Type:* string

---

##### `Delegates`<sup>Required</sup> <a name="Delegates" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.delegates"></a>

```csharp
public string[] Delegates { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeEmail`<sup>Required</sup> <a name="IncludeEmail" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.includeEmail"></a>

```csharp
public object IncludeEmail { get; }
```

- *Type:* object

---

##### `TargetAudience`<sup>Required</sup> <a name="TargetAudience" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetAudience"></a>

```csharp
public string TargetAudience { get; }
```

- *Type:* string

---

##### `TargetServiceAccount`<sup>Required</sup> <a name="TargetServiceAccount" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetServiceAccount"></a>

```csharp
public string TargetServiceAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleServiceAccountIdTokenConfig <a name="DataGoogleServiceAccountIdTokenConfig" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleServiceAccountIdTokenConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string TargetAudience,
    string[] Delegates = null,
    string Id = null,
    object IncludeEmail = null,
    string TargetServiceAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.targetAudience">TargetAudience</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/service_account_id_token#target_audience DataGoogleServiceAccountIdToken#target_audience}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.delegates">Delegates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/service_account_id_token#delegates DataGoogleServiceAccountIdToken#delegates}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/service_account_id_token#id DataGoogleServiceAccountIdToken#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.includeEmail">IncludeEmail</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/service_account_id_token#include_email DataGoogleServiceAccountIdToken#include_email}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/service_account_id_token#target_service_account DataGoogleServiceAccountIdToken#target_service_account}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `TargetAudience`<sup>Required</sup> <a name="TargetAudience" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.targetAudience"></a>

```csharp
public string TargetAudience { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/service_account_id_token#target_audience DataGoogleServiceAccountIdToken#target_audience}.

---

##### `Delegates`<sup>Optional</sup> <a name="Delegates" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.delegates"></a>

```csharp
public string[] Delegates { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/service_account_id_token#delegates DataGoogleServiceAccountIdToken#delegates}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/service_account_id_token#id DataGoogleServiceAccountIdToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeEmail`<sup>Optional</sup> <a name="IncludeEmail" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.includeEmail"></a>

```csharp
public object IncludeEmail { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/service_account_id_token#include_email DataGoogleServiceAccountIdToken#include_email}.

---

##### `TargetServiceAccount`<sup>Optional</sup> <a name="TargetServiceAccount" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.targetServiceAccount"></a>

```csharp
public string TargetServiceAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/data-sources/service_account_id_token#target_service_account DataGoogleServiceAccountIdToken#target_service_account}.

---




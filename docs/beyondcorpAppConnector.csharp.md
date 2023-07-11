# `google_beyondcorp_app_connector`

Refer to the Terraform Registory for docs: [`google_beyondcorp_app_connector`](https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector).

# `beyondcorpAppConnector` Submodule <a name="`beyondcorpAppConnector` Submodule" id="@cdktf/provider-google.beyondcorpAppConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpAppConnector <a name="BeyondcorpAppConnector" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector google_beyondcorp_app_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpAppConnector(Construct Scope, string Id, BeyondcorpAppConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig">BeyondcorpAppConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig">BeyondcorpAppConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putPrincipalInfo">PutPrincipalInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPrincipalInfo` <a name="PutPrincipalInfo" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putPrincipalInfo"></a>

```csharp
private void PutPrincipalInfo(BeyondcorpAppConnectorPrincipalInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putPrincipalInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putTimeouts"></a>

```csharp
private void PutTimeouts(BeyondcorpAppConnectorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts">BeyondcorpAppConnectorTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BeyondcorpAppConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BeyondcorpAppConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BeyondcorpAppConnector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.principalInfo">PrincipalInfo</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference">BeyondcorpAppConnectorPrincipalInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference">BeyondcorpAppConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.principalInfoInput">PrincipalInfoInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PrincipalInfo`<sup>Required</sup> <a name="PrincipalInfo" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.principalInfo"></a>

```csharp
public BeyondcorpAppConnectorPrincipalInfoOutputReference PrincipalInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference">BeyondcorpAppConnectorPrincipalInfoOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.timeouts"></a>

```csharp
public BeyondcorpAppConnectorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference">BeyondcorpAppConnectorTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrincipalInfoInput`<sup>Optional</sup> <a name="PrincipalInfoInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.principalInfoInput"></a>

```csharp
public BeyondcorpAppConnectorPrincipalInfo PrincipalInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpAppConnectorConfig <a name="BeyondcorpAppConnectorConfig" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpAppConnectorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    BeyondcorpAppConnectorPrincipalInfo PrincipalInfo,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    string Region = null,
    BeyondcorpAppConnectorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.name">Name</a></code> | <code>string</code> | ID of the AppConnector. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.principalInfo">PrincipalInfo</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a></code> | principal_info block. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.displayName">DisplayName</a></code> | <code>string</code> | An arbitrary user-provided name for the AppConnector. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#id BeyondcorpAppConnector#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#project BeyondcorpAppConnector#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.region">Region</a></code> | <code>string</code> | The region of the AppConnector. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts">BeyondcorpAppConnectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

ID of the AppConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#name BeyondcorpAppConnector#name}

---

##### `PrincipalInfo`<sup>Required</sup> <a name="PrincipalInfo" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.principalInfo"></a>

```csharp
public BeyondcorpAppConnectorPrincipalInfo PrincipalInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a>

principal_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#principal_info BeyondcorpAppConnector#principal_info}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

An arbitrary user-provided name for the AppConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#display_name BeyondcorpAppConnector#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#id BeyondcorpAppConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource labels to represent user provided metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#labels BeyondcorpAppConnector#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#project BeyondcorpAppConnector#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the AppConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#region BeyondcorpAppConnector#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorConfig.property.timeouts"></a>

```csharp
public BeyondcorpAppConnectorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts">BeyondcorpAppConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#timeouts BeyondcorpAppConnector#timeouts}

---

### BeyondcorpAppConnectorPrincipalInfo <a name="BeyondcorpAppConnectorPrincipalInfo" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpAppConnectorPrincipalInfo {
    BeyondcorpAppConnectorPrincipalInfoServiceAccount ServiceAccount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a></code> | service_account block. |

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo.property.serviceAccount"></a>

```csharp
public BeyondcorpAppConnectorPrincipalInfoServiceAccount ServiceAccount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#service_account BeyondcorpAppConnector#service_account}

---

### BeyondcorpAppConnectorPrincipalInfoServiceAccount <a name="BeyondcorpAppConnectorPrincipalInfoServiceAccount" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpAppConnectorPrincipalInfoServiceAccount {
    string Email
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount.property.email">Email</a></code> | <code>string</code> | Email address of the service account. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Email address of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#email BeyondcorpAppConnector#email}

---

### BeyondcorpAppConnectorTimeouts <a name="BeyondcorpAppConnectorTimeouts" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpAppConnectorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#create BeyondcorpAppConnector#create}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#delete BeyondcorpAppConnector#delete}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#update BeyondcorpAppConnector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#create BeyondcorpAppConnector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#delete BeyondcorpAppConnector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/beyondcorp_app_connector#update BeyondcorpAppConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpAppConnectorPrincipalInfoOutputReference <a name="BeyondcorpAppConnectorPrincipalInfoOutputReference" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpAppConnectorPrincipalInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.putServiceAccount">PutServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceAccount` <a name="PutServiceAccount" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.putServiceAccount"></a>

```csharp
private void PutServiceAccount(BeyondcorpAppConnectorPrincipalInfoServiceAccount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference">BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccount"></a>

```csharp
public BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference ServiceAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference">BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccountInput"></a>

```csharp
public BeyondcorpAppConnectorPrincipalInfoServiceAccount ServiceAccountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoOutputReference.property.internalValue"></a>

```csharp
public BeyondcorpAppConnectorPrincipalInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfo">BeyondcorpAppConnectorPrincipalInfo</a>

---


### BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference <a name="BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.internalValue"></a>

```csharp
public BeyondcorpAppConnectorPrincipalInfoServiceAccount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorPrincipalInfoServiceAccount">BeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

---


### BeyondcorpAppConnectorTimeoutsOutputReference <a name="BeyondcorpAppConnectorTimeoutsOutputReference" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpAppConnectorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpAppConnector.BeyondcorpAppConnectorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




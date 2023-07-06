# `google_bigquery_connection`

Refer to the Terraform Registory for docs: [`google_bigquery_connection`](https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection).

# `bigqueryConnection` Submodule <a name="`bigqueryConnection` Submodule" id="@cdktf/provider-google.bigqueryConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryConnection <a name="BigqueryConnection" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection google_bigquery_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnection(Construct Scope, string Id, BigqueryConnectionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig">BigqueryConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig">BigqueryConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAws">PutAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudResource">PutCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner">PutCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSql">PutCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAws">ResetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudResource">ResetCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSpanner">ResetCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSql">ResetCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetConnectionId">ResetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAws` <a name="PutAws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAws"></a>

```csharp
private void PutAws(BigqueryConnectionAws Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

---

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAzure"></a>

```csharp
private void PutAzure(BigqueryConnectionAzure Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

---

##### `PutCloudResource` <a name="PutCloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudResource"></a>

```csharp
private void PutCloudResource(BigqueryConnectionCloudResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

---

##### `PutCloudSpanner` <a name="PutCloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner"></a>

```csharp
private void PutCloudSpanner(BigqueryConnectionCloudSpanner Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

---

##### `PutCloudSql` <a name="PutCloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSql"></a>

```csharp
private void PutCloudSql(BigqueryConnectionCloudSql Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(BigqueryConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>

---

##### `ResetAws` <a name="ResetAws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAws"></a>

```csharp
private void ResetAws()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAzure"></a>

```csharp
private void ResetAzure()
```

##### `ResetCloudResource` <a name="ResetCloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudResource"></a>

```csharp
private void ResetCloudResource()
```

##### `ResetCloudSpanner` <a name="ResetCloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSpanner"></a>

```csharp
private void ResetCloudSpanner()
```

##### `ResetCloudSql` <a name="ResetCloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSql"></a>

```csharp
private void ResetCloudSql()
```

##### `ResetConnectionId` <a name="ResetConnectionId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetConnectionId"></a>

```csharp
private void ResetConnectionId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetFriendlyName"></a>

```csharp
private void ResetFriendlyName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference">BigqueryConnectionAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference">BigqueryConnectionAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResource">CloudResource</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference">BigqueryConnectionCloudResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpanner">CloudSpanner</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference">BigqueryConnectionCloudSpannerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSql">CloudSql</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference">BigqueryConnectionCloudSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.hasCredential">HasCredential</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference">BigqueryConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.awsInput">AwsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azureInput">AzureInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResourceInput">CloudResourceInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpannerInput">CloudSpannerInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSqlInput">CloudSqlInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyName">FriendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.aws"></a>

```csharp
public BigqueryConnectionAwsOutputReference Aws { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference">BigqueryConnectionAwsOutputReference</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azure"></a>

```csharp
public BigqueryConnectionAzureOutputReference Azure { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference">BigqueryConnectionAzureOutputReference</a>

---

##### `CloudResource`<sup>Required</sup> <a name="CloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResource"></a>

```csharp
public BigqueryConnectionCloudResourceOutputReference CloudResource { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference">BigqueryConnectionCloudResourceOutputReference</a>

---

##### `CloudSpanner`<sup>Required</sup> <a name="CloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpanner"></a>

```csharp
public BigqueryConnectionCloudSpannerOutputReference CloudSpanner { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference">BigqueryConnectionCloudSpannerOutputReference</a>

---

##### `CloudSql`<sup>Required</sup> <a name="CloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSql"></a>

```csharp
public BigqueryConnectionCloudSqlOutputReference CloudSql { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference">BigqueryConnectionCloudSqlOutputReference</a>

---

##### `HasCredential`<sup>Required</sup> <a name="HasCredential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.hasCredential"></a>

```csharp
public IResolvable HasCredential { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeouts"></a>

```csharp
public BigqueryConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference">BigqueryConnectionTimeoutsOutputReference</a>

---

##### `AwsInput`<sup>Optional</sup> <a name="AwsInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.awsInput"></a>

```csharp
public BigqueryConnectionAws AwsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azureInput"></a>

```csharp
public BigqueryConnectionAzure AzureInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

---

##### `CloudResourceInput`<sup>Optional</sup> <a name="CloudResourceInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResourceInput"></a>

```csharp
public BigqueryConnectionCloudResource CloudResourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

---

##### `CloudSpannerInput`<sup>Optional</sup> <a name="CloudSpannerInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpannerInput"></a>

```csharp
public BigqueryConnectionCloudSpanner CloudSpannerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

---

##### `CloudSqlInput`<sup>Optional</sup> <a name="CloudSqlInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSqlInput"></a>

```csharp
public BigqueryConnectionCloudSql CloudSqlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyNameInput"></a>

```csharp
public string FriendlyNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyName"></a>

```csharp
public string FriendlyName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryConnectionAws <a name="BigqueryConnectionAws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnectionAws {
    BigqueryConnectionAwsAccessRole AccessRole
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws.property.accessRole">AccessRole</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a></code> | access_role block. |

---

##### `AccessRole`<sup>Required</sup> <a name="AccessRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws.property.accessRole"></a>

```csharp
public BigqueryConnectionAwsAccessRole AccessRole { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

access_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#access_role BigqueryConnection#access_role}

---

### BigqueryConnectionAwsAccessRole <a name="BigqueryConnectionAwsAccessRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnectionAwsAccessRole {
    string IamRoleId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole.property.iamRoleId">IamRoleId</a></code> | <code>string</code> | The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection. |

---

##### `IamRoleId`<sup>Required</sup> <a name="IamRoleId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole.property.iamRoleId"></a>

```csharp
public string IamRoleId { get; set; }
```

- *Type:* string

The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#iam_role_id BigqueryConnection#iam_role_id}

---

### BigqueryConnectionAzure <a name="BigqueryConnectionAzure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnectionAzure {
    string CustomerTenantId,
    string FederatedApplicationClientId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.customerTenantId">CustomerTenantId</a></code> | <code>string</code> | The id of customer's directory that host the data. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.federatedApplicationClientId">FederatedApplicationClientId</a></code> | <code>string</code> | The Azure Application (client) ID where the federated credentials will be hosted. |

---

##### `CustomerTenantId`<sup>Required</sup> <a name="CustomerTenantId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.customerTenantId"></a>

```csharp
public string CustomerTenantId { get; set; }
```

- *Type:* string

The id of customer's directory that host the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#customer_tenant_id BigqueryConnection#customer_tenant_id}

---

##### `FederatedApplicationClientId`<sup>Optional</sup> <a name="FederatedApplicationClientId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.federatedApplicationClientId"></a>

```csharp
public string FederatedApplicationClientId { get; set; }
```

- *Type:* string

The Azure Application (client) ID where the federated credentials will be hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#federated_application_client_id BigqueryConnection#federated_application_client_id}

---

### BigqueryConnectionCloudResource <a name="BigqueryConnectionCloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnectionCloudResource {

};
```


### BigqueryConnectionCloudSpanner <a name="BigqueryConnectionCloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnectionCloudSpanner {
    string Database,
    object UseParallelism = null,
    object UseServerlessAnalytics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.database">Database</a></code> | <code>string</code> | Cloud Spanner database in the form 'project/instance/database'. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useParallelism">UseParallelism</a></code> | <code>object</code> | If parallelism should be used when reading from Cloud Spanner. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useServerlessAnalytics">UseServerlessAnalytics</a></code> | <code>object</code> | If the serverless analytics service should be used to read data from Cloud Spanner. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Cloud Spanner database in the form 'project/instance/database'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#database BigqueryConnection#database}

---

##### `UseParallelism`<sup>Optional</sup> <a name="UseParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useParallelism"></a>

```csharp
public object UseParallelism { get; set; }
```

- *Type:* object

If parallelism should be used when reading from Cloud Spanner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#use_parallelism BigqueryConnection#use_parallelism}

---

##### `UseServerlessAnalytics`<sup>Optional</sup> <a name="UseServerlessAnalytics" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useServerlessAnalytics"></a>

```csharp
public object UseServerlessAnalytics { get; set; }
```

- *Type:* object

If the serverless analytics service should be used to read data from Cloud Spanner.

useParallelism must be set when using serverless analytics

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#use_serverless_analytics BigqueryConnection#use_serverless_analytics}

---

### BigqueryConnectionCloudSql <a name="BigqueryConnectionCloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnectionCloudSql {
    BigqueryConnectionCloudSqlCredential Credential,
    string Database,
    string InstanceId,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.credential">Credential</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a></code> | credential block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.database">Database</a></code> | <code>string</code> | Database name. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.instanceId">InstanceId</a></code> | <code>string</code> | Cloud SQL instance ID in the form project:location:instance. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.type">Type</a></code> | <code>string</code> | Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"]. |

---

##### `Credential`<sup>Required</sup> <a name="Credential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.credential"></a>

```csharp
public BigqueryConnectionCloudSqlCredential Credential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#credential BigqueryConnection#credential}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#database BigqueryConnection#database}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Cloud SQL instance ID in the form project:location:instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#instance_id BigqueryConnection#instance_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#type BigqueryConnection#type}

---

### BigqueryConnectionCloudSqlCredential <a name="BigqueryConnectionCloudSqlCredential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnectionCloudSqlCredential {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.password">Password</a></code> | <code>string</code> | Password for database. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.username">Username</a></code> | <code>string</code> | Username for database. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#password BigqueryConnection#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#username BigqueryConnection#username}

---

### BigqueryConnectionConfig <a name="BigqueryConnectionConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    BigqueryConnectionAws Aws = null,
    BigqueryConnectionAzure Azure = null,
    BigqueryConnectionCloudResource CloudResource = null,
    BigqueryConnectionCloudSpanner CloudSpanner = null,
    BigqueryConnectionCloudSql CloudSql = null,
    string ConnectionId = null,
    string Description = null,
    string FriendlyName = null,
    string Id = null,
    string Location = null,
    string Project = null,
    BigqueryConnectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a></code> | azure block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudResource">CloudResource</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a></code> | cloud_resource block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSpanner">CloudSpanner</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a></code> | cloud_spanner block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSql">CloudSql</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a></code> | cloud_sql block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connectionId">ConnectionId</a></code> | <code>string</code> | Optional connection id that should be assigned to the created connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.description">Description</a></code> | <code>string</code> | A descriptive description for the connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.friendlyName">FriendlyName</a></code> | <code>string</code> | A descriptive name for the connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#id BigqueryConnection#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the connection should reside. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#project BigqueryConnection#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Aws`<sup>Optional</sup> <a name="Aws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.aws"></a>

```csharp
public BigqueryConnectionAws Aws { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#aws BigqueryConnection#aws}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.azure"></a>

```csharp
public BigqueryConnectionAzure Azure { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#azure BigqueryConnection#azure}

---

##### `CloudResource`<sup>Optional</sup> <a name="CloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudResource"></a>

```csharp
public BigqueryConnectionCloudResource CloudResource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

cloud_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#cloud_resource BigqueryConnection#cloud_resource}

---

##### `CloudSpanner`<sup>Optional</sup> <a name="CloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSpanner"></a>

```csharp
public BigqueryConnectionCloudSpanner CloudSpanner { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

cloud_spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#cloud_spanner BigqueryConnection#cloud_spanner}

---

##### `CloudSql`<sup>Optional</sup> <a name="CloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSql"></a>

```csharp
public BigqueryConnectionCloudSql CloudSql { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

cloud_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#cloud_sql BigqueryConnection#cloud_sql}

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

Optional connection id that should be assigned to the created connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#connection_id BigqueryConnection#connection_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A descriptive description for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#description BigqueryConnection#description}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.friendlyName"></a>

```csharp
public string FriendlyName { get; set; }
```

- *Type:* string

A descriptive name for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#friendly_name BigqueryConnection#friendly_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#id BigqueryConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the connection should reside.

Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#location BigqueryConnection#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#project BigqueryConnection#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.timeouts"></a>

```csharp
public BigqueryConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#timeouts BigqueryConnection#timeouts}

---

### BigqueryConnectionTimeouts <a name="BigqueryConnectionTimeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#create BigqueryConnection#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#delete BigqueryConnection#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#update BigqueryConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#create BigqueryConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#delete BigqueryConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/bigquery_connection#update BigqueryConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryConnectionAwsAccessRoleOutputReference <a name="BigqueryConnectionAwsAccessRoleOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnectionAwsAccessRoleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.identity">Identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput">IamRoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId">IamRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.identity"></a>

```csharp
public string Identity { get; }
```

- *Type:* string

---

##### `IamRoleIdInput`<sup>Optional</sup> <a name="IamRoleIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput"></a>

```csharp
public string IamRoleIdInput { get; }
```

- *Type:* string

---

##### `IamRoleId`<sup>Required</sup> <a name="IamRoleId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId"></a>

```csharp
public string IamRoleId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.internalValue"></a>

```csharp
public BigqueryConnectionAwsAccessRole InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

---


### BigqueryConnectionAwsOutputReference <a name="BigqueryConnectionAwsOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnectionAwsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.putAccessRole">PutAccessRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessRole` <a name="PutAccessRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.putAccessRole"></a>

```csharp
private void PutAccessRole(BigqueryConnectionAwsAccessRole Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.putAccessRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRole">AccessRole</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference">BigqueryConnectionAwsAccessRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRoleInput">AccessRoleInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessRole`<sup>Required</sup> <a name="AccessRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRole"></a>

```csharp
public BigqueryConnectionAwsAccessRoleOutputReference AccessRole { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference">BigqueryConnectionAwsAccessRoleOutputReference</a>

---

##### `AccessRoleInput`<sup>Optional</sup> <a name="AccessRoleInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRoleInput"></a>

```csharp
public BigqueryConnectionAwsAccessRole AccessRoleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.internalValue"></a>

```csharp
public BigqueryConnectionAws InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

---


### BigqueryConnectionAzureOutputReference <a name="BigqueryConnectionAzureOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnectionAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resetFederatedApplicationClientId">ResetFederatedApplicationClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFederatedApplicationClientId` <a name="ResetFederatedApplicationClientId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resetFederatedApplicationClientId"></a>

```csharp
private void ResetFederatedApplicationClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.application">Application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.identity">Identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.redirectUri">RedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantIdInput">CustomerTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput">FederatedApplicationClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantId">CustomerTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientId">FederatedApplicationClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.application"></a>

```csharp
public string Application { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.identity"></a>

```csharp
public string Identity { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.redirectUri"></a>

```csharp
public string RedirectUri { get; }
```

- *Type:* string

---

##### `CustomerTenantIdInput`<sup>Optional</sup> <a name="CustomerTenantIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantIdInput"></a>

```csharp
public string CustomerTenantIdInput { get; }
```

- *Type:* string

---

##### `FederatedApplicationClientIdInput`<sup>Optional</sup> <a name="FederatedApplicationClientIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput"></a>

```csharp
public string FederatedApplicationClientIdInput { get; }
```

- *Type:* string

---

##### `CustomerTenantId`<sup>Required</sup> <a name="CustomerTenantId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantId"></a>

```csharp
public string CustomerTenantId { get; }
```

- *Type:* string

---

##### `FederatedApplicationClientId`<sup>Required</sup> <a name="FederatedApplicationClientId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientId"></a>

```csharp
public string FederatedApplicationClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.internalValue"></a>

```csharp
public BigqueryConnectionAzure InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

---


### BigqueryConnectionCloudResourceOutputReference <a name="BigqueryConnectionCloudResourceOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnectionCloudResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.serviceAccountId">ServiceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.serviceAccountId"></a>

```csharp
public string ServiceAccountId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.internalValue"></a>

```csharp
public BigqueryConnectionCloudResource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

---


### BigqueryConnectionCloudSpannerOutputReference <a name="BigqueryConnectionCloudSpannerOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnectionCloudSpannerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseParallelism">ResetUseParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseServerlessAnalytics">ResetUseServerlessAnalytics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseParallelism` <a name="ResetUseParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseParallelism"></a>

```csharp
private void ResetUseParallelism()
```

##### `ResetUseServerlessAnalytics` <a name="ResetUseServerlessAnalytics" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseServerlessAnalytics"></a>

```csharp
private void ResetUseServerlessAnalytics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput">UseParallelismInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput">UseServerlessAnalyticsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelism">UseParallelism</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics">UseServerlessAnalytics</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `UseParallelismInput`<sup>Optional</sup> <a name="UseParallelismInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput"></a>

```csharp
public object UseParallelismInput { get; }
```

- *Type:* object

---

##### `UseServerlessAnalyticsInput`<sup>Optional</sup> <a name="UseServerlessAnalyticsInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput"></a>

```csharp
public object UseServerlessAnalyticsInput { get; }
```

- *Type:* object

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `UseParallelism`<sup>Required</sup> <a name="UseParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelism"></a>

```csharp
public object UseParallelism { get; }
```

- *Type:* object

---

##### `UseServerlessAnalytics`<sup>Required</sup> <a name="UseServerlessAnalytics" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics"></a>

```csharp
public object UseServerlessAnalytics { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.internalValue"></a>

```csharp
public BigqueryConnectionCloudSpanner InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

---


### BigqueryConnectionCloudSqlCredentialOutputReference <a name="BigqueryConnectionCloudSqlCredentialOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnectionCloudSqlCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue"></a>

```csharp
public BigqueryConnectionCloudSqlCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

---


### BigqueryConnectionCloudSqlOutputReference <a name="BigqueryConnectionCloudSqlOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnectionCloudSqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.putCredential">PutCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCredential` <a name="PutCredential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.putCredential"></a>

```csharp
private void PutCredential(BigqueryConnectionCloudSqlCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.putCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credential">Credential</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference">BigqueryConnectionCloudSqlCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.serviceAccountId">ServiceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credentialInput">CredentialInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Credential`<sup>Required</sup> <a name="Credential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credential"></a>

```csharp
public BigqueryConnectionCloudSqlCredentialOutputReference Credential { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference">BigqueryConnectionCloudSqlCredentialOutputReference</a>

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.serviceAccountId"></a>

```csharp
public string ServiceAccountId { get; }
```

- *Type:* string

---

##### `CredentialInput`<sup>Optional</sup> <a name="CredentialInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credentialInput"></a>

```csharp
public BigqueryConnectionCloudSqlCredential CredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.internalValue"></a>

```csharp
public BigqueryConnectionCloudSql InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

---


### BigqueryConnectionTimeoutsOutputReference <a name="BigqueryConnectionTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




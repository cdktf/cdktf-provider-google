# `bigqueryConnection` Submodule <a name="`bigqueryConnection` Submodule" id="@cdktf/provider-google.bigqueryConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryConnection <a name="BigqueryConnection" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection google_bigquery_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

bigqueryconnection.NewBigqueryConnection(scope Construct, id *string, config BigqueryConnectionConfig) BigqueryConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig">BigqueryConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAws` <a name="PutAws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAws"></a>

```go
func PutAws(value BigqueryConnectionAws)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

---

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAzure"></a>

```go
func PutAzure(value BigqueryConnectionAzure)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

---

##### `PutCloudResource` <a name="PutCloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudResource"></a>

```go
func PutCloudResource(value BigqueryConnectionCloudResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

---

##### `PutCloudSpanner` <a name="PutCloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner"></a>

```go
func PutCloudSpanner(value BigqueryConnectionCloudSpanner)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

---

##### `PutCloudSql` <a name="PutCloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSql"></a>

```go
func PutCloudSql(value BigqueryConnectionCloudSql)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putTimeouts"></a>

```go
func PutTimeouts(value BigqueryConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>

---

##### `ResetAws` <a name="ResetAws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAws"></a>

```go
func ResetAws()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAzure"></a>

```go
func ResetAzure()
```

##### `ResetCloudResource` <a name="ResetCloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudResource"></a>

```go
func ResetCloudResource()
```

##### `ResetCloudSpanner` <a name="ResetCloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSpanner"></a>

```go
func ResetCloudSpanner()
```

##### `ResetCloudSql` <a name="ResetCloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSql"></a>

```go
func ResetCloudSql()
```

##### `ResetConnectionId` <a name="ResetConnectionId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetConnectionId"></a>

```go
func ResetConnectionId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetFriendlyName"></a>

```go
func ResetFriendlyName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

bigqueryconnection.BigqueryConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

bigqueryconnection.BigqueryConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

bigqueryconnection.BigqueryConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference">BigqueryConnectionAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference">BigqueryConnectionAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResource">CloudResource</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference">BigqueryConnectionCloudResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpanner">CloudSpanner</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference">BigqueryConnectionCloudSpannerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSql">CloudSql</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference">BigqueryConnectionCloudSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.hasCredential">HasCredential</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference">BigqueryConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.awsInput">AwsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azureInput">AzureInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResourceInput">CloudResourceInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpannerInput">CloudSpannerInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSqlInput">CloudSqlInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.aws"></a>

```go
func Aws() BigqueryConnectionAwsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference">BigqueryConnectionAwsOutputReference</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azure"></a>

```go
func Azure() BigqueryConnectionAzureOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference">BigqueryConnectionAzureOutputReference</a>

---

##### `CloudResource`<sup>Required</sup> <a name="CloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResource"></a>

```go
func CloudResource() BigqueryConnectionCloudResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference">BigqueryConnectionCloudResourceOutputReference</a>

---

##### `CloudSpanner`<sup>Required</sup> <a name="CloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpanner"></a>

```go
func CloudSpanner() BigqueryConnectionCloudSpannerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference">BigqueryConnectionCloudSpannerOutputReference</a>

---

##### `CloudSql`<sup>Required</sup> <a name="CloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSql"></a>

```go
func CloudSql() BigqueryConnectionCloudSqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference">BigqueryConnectionCloudSqlOutputReference</a>

---

##### `HasCredential`<sup>Required</sup> <a name="HasCredential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.hasCredential"></a>

```go
func HasCredential() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeouts"></a>

```go
func Timeouts() BigqueryConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference">BigqueryConnectionTimeoutsOutputReference</a>

---

##### `AwsInput`<sup>Optional</sup> <a name="AwsInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.awsInput"></a>

```go
func AwsInput() BigqueryConnectionAws
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azureInput"></a>

```go
func AzureInput() BigqueryConnectionAzure
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

---

##### `CloudResourceInput`<sup>Optional</sup> <a name="CloudResourceInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResourceInput"></a>

```go
func CloudResourceInput() BigqueryConnectionCloudResource
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

---

##### `CloudSpannerInput`<sup>Optional</sup> <a name="CloudSpannerInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpannerInput"></a>

```go
func CloudSpannerInput() BigqueryConnectionCloudSpanner
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

---

##### `CloudSqlInput`<sup>Optional</sup> <a name="CloudSqlInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSqlInput"></a>

```go
func CloudSqlInput() BigqueryConnectionCloudSql
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyNameInput"></a>

```go
func FriendlyNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyName"></a>

```go
func FriendlyName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryConnectionAws <a name="BigqueryConnectionAws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

&bigqueryconnection.BigqueryConnectionAws {
	AccessRole: github.com/cdktf/cdktf-provider-google-go/google.bigqueryConnection.BigqueryConnectionAwsAccessRole,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws.property.accessRole">AccessRole</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a></code> | access_role block. |

---

##### `AccessRole`<sup>Required</sup> <a name="AccessRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws.property.accessRole"></a>

```go
AccessRole BigqueryConnectionAwsAccessRole
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

access_role block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#access_role BigqueryConnection#access_role}

---

### BigqueryConnectionAwsAccessRole <a name="BigqueryConnectionAwsAccessRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

&bigqueryconnection.BigqueryConnectionAwsAccessRole {
	IamRoleId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole.property.iamRoleId">IamRoleId</a></code> | <code>*string</code> | The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection. |

---

##### `IamRoleId`<sup>Required</sup> <a name="IamRoleId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole.property.iamRoleId"></a>

```go
IamRoleId *string
```

- *Type:* *string

The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#iam_role_id BigqueryConnection#iam_role_id}

---

### BigqueryConnectionAzure <a name="BigqueryConnectionAzure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

&bigqueryconnection.BigqueryConnectionAzure {
	CustomerTenantId: *string,
	FederatedApplicationClientId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.customerTenantId">CustomerTenantId</a></code> | <code>*string</code> | The id of customer's directory that host the data. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.federatedApplicationClientId">FederatedApplicationClientId</a></code> | <code>*string</code> | The Azure Application (client) ID where the federated credentials will be hosted. |

---

##### `CustomerTenantId`<sup>Required</sup> <a name="CustomerTenantId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.customerTenantId"></a>

```go
CustomerTenantId *string
```

- *Type:* *string

The id of customer's directory that host the data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#customer_tenant_id BigqueryConnection#customer_tenant_id}

---

##### `FederatedApplicationClientId`<sup>Optional</sup> <a name="FederatedApplicationClientId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.federatedApplicationClientId"></a>

```go
FederatedApplicationClientId *string
```

- *Type:* *string

The Azure Application (client) ID where the federated credentials will be hosted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#federated_application_client_id BigqueryConnection#federated_application_client_id}

---

### BigqueryConnectionCloudResource <a name="BigqueryConnectionCloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

&bigqueryconnection.BigqueryConnectionCloudResource {

}
```


### BigqueryConnectionCloudSpanner <a name="BigqueryConnectionCloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

&bigqueryconnection.BigqueryConnectionCloudSpanner {
	Database: *string,
	UseParallelism: interface{},
	UseServerlessAnalytics: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.database">Database</a></code> | <code>*string</code> | Cloud Spanner database in the form 'project/instance/database'. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useParallelism">UseParallelism</a></code> | <code>interface{}</code> | If parallelism should be used when reading from Cloud Spanner. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useServerlessAnalytics">UseServerlessAnalytics</a></code> | <code>interface{}</code> | If the serverless analytics service should be used to read data from Cloud Spanner. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.database"></a>

```go
Database *string
```

- *Type:* *string

Cloud Spanner database in the form 'project/instance/database'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#database BigqueryConnection#database}

---

##### `UseParallelism`<sup>Optional</sup> <a name="UseParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useParallelism"></a>

```go
UseParallelism interface{}
```

- *Type:* interface{}

If parallelism should be used when reading from Cloud Spanner.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#use_parallelism BigqueryConnection#use_parallelism}

---

##### `UseServerlessAnalytics`<sup>Optional</sup> <a name="UseServerlessAnalytics" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useServerlessAnalytics"></a>

```go
UseServerlessAnalytics interface{}
```

- *Type:* interface{}

If the serverless analytics service should be used to read data from Cloud Spanner.

useParallelism must be set when using serverless analytics

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#use_serverless_analytics BigqueryConnection#use_serverless_analytics}

---

### BigqueryConnectionCloudSql <a name="BigqueryConnectionCloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

&bigqueryconnection.BigqueryConnectionCloudSql {
	Credential: github.com/cdktf/cdktf-provider-google-go/google.bigqueryConnection.BigqueryConnectionCloudSqlCredential,
	Database: *string,
	InstanceId: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.credential">Credential</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a></code> | credential block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.database">Database</a></code> | <code>*string</code> | Database name. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.instanceId">InstanceId</a></code> | <code>*string</code> | Cloud SQL instance ID in the form project:location:instance. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.type">Type</a></code> | <code>*string</code> | Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"]. |

---

##### `Credential`<sup>Required</sup> <a name="Credential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.credential"></a>

```go
Credential BigqueryConnectionCloudSqlCredential
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

credential block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#credential BigqueryConnection#credential}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.database"></a>

```go
Database *string
```

- *Type:* *string

Database name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#database BigqueryConnection#database}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Cloud SQL instance ID in the form project:location:instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#instance_id BigqueryConnection#instance_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#type BigqueryConnection#type}

---

### BigqueryConnectionCloudSqlCredential <a name="BigqueryConnectionCloudSqlCredential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

&bigqueryconnection.BigqueryConnectionCloudSqlCredential {
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.password">Password</a></code> | <code>*string</code> | Password for database. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.username">Username</a></code> | <code>*string</code> | Username for database. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#password BigqueryConnection#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#username BigqueryConnection#username}

---

### BigqueryConnectionConfig <a name="BigqueryConnectionConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

&bigqueryconnection.BigqueryConnectionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Aws: github.com/cdktf/cdktf-provider-google-go/google.bigqueryConnection.BigqueryConnectionAws,
	Azure: github.com/cdktf/cdktf-provider-google-go/google.bigqueryConnection.BigqueryConnectionAzure,
	CloudResource: github.com/cdktf/cdktf-provider-google-go/google.bigqueryConnection.BigqueryConnectionCloudResource,
	CloudSpanner: github.com/cdktf/cdktf-provider-google-go/google.bigqueryConnection.BigqueryConnectionCloudSpanner,
	CloudSql: github.com/cdktf/cdktf-provider-google-go/google.bigqueryConnection.BigqueryConnectionCloudSql,
	ConnectionId: *string,
	Description: *string,
	FriendlyName: *string,
	Id: *string,
	Location: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.bigqueryConnection.BigqueryConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a></code> | azure block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudResource">CloudResource</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a></code> | cloud_resource block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSpanner">CloudSpanner</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a></code> | cloud_spanner block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSql">CloudSql</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a></code> | cloud_sql block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connectionId">ConnectionId</a></code> | <code>*string</code> | Optional connection id that should be assigned to the created connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.description">Description</a></code> | <code>*string</code> | A descriptive description for the connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | A descriptive name for the connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#id BigqueryConnection#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location where the connection should reside. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#project BigqueryConnection#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Aws`<sup>Optional</sup> <a name="Aws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.aws"></a>

```go
Aws BigqueryConnectionAws
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

aws block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#aws BigqueryConnection#aws}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.azure"></a>

```go
Azure BigqueryConnectionAzure
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

azure block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#azure BigqueryConnection#azure}

---

##### `CloudResource`<sup>Optional</sup> <a name="CloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudResource"></a>

```go
CloudResource BigqueryConnectionCloudResource
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

cloud_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#cloud_resource BigqueryConnection#cloud_resource}

---

##### `CloudSpanner`<sup>Optional</sup> <a name="CloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSpanner"></a>

```go
CloudSpanner BigqueryConnectionCloudSpanner
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

cloud_spanner block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#cloud_spanner BigqueryConnection#cloud_spanner}

---

##### `CloudSql`<sup>Optional</sup> <a name="CloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSql"></a>

```go
CloudSql BigqueryConnectionCloudSql
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

cloud_sql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#cloud_sql BigqueryConnection#cloud_sql}

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

Optional connection id that should be assigned to the created connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#connection_id BigqueryConnection#connection_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A descriptive description for the connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#description BigqueryConnection#description}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.friendlyName"></a>

```go
FriendlyName *string
```

- *Type:* *string

A descriptive name for the connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#friendly_name BigqueryConnection#friendly_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#id BigqueryConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the connection should reside.

Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#location BigqueryConnection#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#project BigqueryConnection#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.timeouts"></a>

```go
Timeouts BigqueryConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#timeouts BigqueryConnection#timeouts}

---

### BigqueryConnectionTimeouts <a name="BigqueryConnectionTimeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

&bigqueryconnection.BigqueryConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#create BigqueryConnection#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#delete BigqueryConnection#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#update BigqueryConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#create BigqueryConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#delete BigqueryConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_connection#update BigqueryConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryConnectionAwsAccessRoleOutputReference <a name="BigqueryConnectionAwsAccessRoleOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

bigqueryconnection.NewBigqueryConnectionAwsAccessRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryConnectionAwsAccessRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.identity">Identity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput">IamRoleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId">IamRoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.identity"></a>

```go
func Identity() *string
```

- *Type:* *string

---

##### `IamRoleIdInput`<sup>Optional</sup> <a name="IamRoleIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput"></a>

```go
func IamRoleIdInput() *string
```

- *Type:* *string

---

##### `IamRoleId`<sup>Required</sup> <a name="IamRoleId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId"></a>

```go
func IamRoleId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryConnectionAwsAccessRole
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

---


### BigqueryConnectionAwsOutputReference <a name="BigqueryConnectionAwsOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

bigqueryconnection.NewBigqueryConnectionAwsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryConnectionAwsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessRole` <a name="PutAccessRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.putAccessRole"></a>

```go
func PutAccessRole(value BigqueryConnectionAwsAccessRole)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.putAccessRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRole">AccessRole</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference">BigqueryConnectionAwsAccessRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRoleInput">AccessRoleInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessRole`<sup>Required</sup> <a name="AccessRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRole"></a>

```go
func AccessRole() BigqueryConnectionAwsAccessRoleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference">BigqueryConnectionAwsAccessRoleOutputReference</a>

---

##### `AccessRoleInput`<sup>Optional</sup> <a name="AccessRoleInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRoleInput"></a>

```go
func AccessRoleInput() BigqueryConnectionAwsAccessRole
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryConnectionAws
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

---


### BigqueryConnectionAzureOutputReference <a name="BigqueryConnectionAzureOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

bigqueryconnection.NewBigqueryConnectionAzureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryConnectionAzureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFederatedApplicationClientId` <a name="ResetFederatedApplicationClientId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resetFederatedApplicationClientId"></a>

```go
func ResetFederatedApplicationClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.application">Application</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.identity">Identity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.redirectUri">RedirectUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantIdInput">CustomerTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput">FederatedApplicationClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantId">CustomerTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientId">FederatedApplicationClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.application"></a>

```go
func Application() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.identity"></a>

```go
func Identity() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.redirectUri"></a>

```go
func RedirectUri() *string
```

- *Type:* *string

---

##### `CustomerTenantIdInput`<sup>Optional</sup> <a name="CustomerTenantIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantIdInput"></a>

```go
func CustomerTenantIdInput() *string
```

- *Type:* *string

---

##### `FederatedApplicationClientIdInput`<sup>Optional</sup> <a name="FederatedApplicationClientIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput"></a>

```go
func FederatedApplicationClientIdInput() *string
```

- *Type:* *string

---

##### `CustomerTenantId`<sup>Required</sup> <a name="CustomerTenantId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantId"></a>

```go
func CustomerTenantId() *string
```

- *Type:* *string

---

##### `FederatedApplicationClientId`<sup>Required</sup> <a name="FederatedApplicationClientId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientId"></a>

```go
func FederatedApplicationClientId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryConnectionAzure
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

---


### BigqueryConnectionCloudResourceOutputReference <a name="BigqueryConnectionCloudResourceOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

bigqueryconnection.NewBigqueryConnectionCloudResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryConnectionCloudResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.serviceAccountId"></a>

```go
func ServiceAccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryConnectionCloudResource
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

---


### BigqueryConnectionCloudSpannerOutputReference <a name="BigqueryConnectionCloudSpannerOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

bigqueryconnection.NewBigqueryConnectionCloudSpannerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryConnectionCloudSpannerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseParallelism` <a name="ResetUseParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseParallelism"></a>

```go
func ResetUseParallelism()
```

##### `ResetUseServerlessAnalytics` <a name="ResetUseServerlessAnalytics" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseServerlessAnalytics"></a>

```go
func ResetUseServerlessAnalytics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput">UseParallelismInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput">UseServerlessAnalyticsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelism">UseParallelism</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics">UseServerlessAnalytics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `UseParallelismInput`<sup>Optional</sup> <a name="UseParallelismInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput"></a>

```go
func UseParallelismInput() interface{}
```

- *Type:* interface{}

---

##### `UseServerlessAnalyticsInput`<sup>Optional</sup> <a name="UseServerlessAnalyticsInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput"></a>

```go
func UseServerlessAnalyticsInput() interface{}
```

- *Type:* interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `UseParallelism`<sup>Required</sup> <a name="UseParallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelism"></a>

```go
func UseParallelism() interface{}
```

- *Type:* interface{}

---

##### `UseServerlessAnalytics`<sup>Required</sup> <a name="UseServerlessAnalytics" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics"></a>

```go
func UseServerlessAnalytics() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryConnectionCloudSpanner
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

---


### BigqueryConnectionCloudSqlCredentialOutputReference <a name="BigqueryConnectionCloudSqlCredentialOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

bigqueryconnection.NewBigqueryConnectionCloudSqlCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryConnectionCloudSqlCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryConnectionCloudSqlCredential
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

---


### BigqueryConnectionCloudSqlOutputReference <a name="BigqueryConnectionCloudSqlOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

bigqueryconnection.NewBigqueryConnectionCloudSqlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryConnectionCloudSqlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCredential` <a name="PutCredential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.putCredential"></a>

```go
func PutCredential(value BigqueryConnectionCloudSqlCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.putCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credential">Credential</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference">BigqueryConnectionCloudSqlCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credentialInput">CredentialInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Credential`<sup>Required</sup> <a name="Credential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credential"></a>

```go
func Credential() BigqueryConnectionCloudSqlCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference">BigqueryConnectionCloudSqlCredentialOutputReference</a>

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.serviceAccountId"></a>

```go
func ServiceAccountId() *string
```

- *Type:* *string

---

##### `CredentialInput`<sup>Optional</sup> <a name="CredentialInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credentialInput"></a>

```go
func CredentialInput() BigqueryConnectionCloudSqlCredential
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryConnectionCloudSql
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

---


### BigqueryConnectionTimeoutsOutputReference <a name="BigqueryConnectionTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryconnection"

bigqueryconnection.NewBigqueryConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




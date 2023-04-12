# `dataGoogleBeyondcorpAppConnection` Submodule <a name="`dataGoogleBeyondcorpAppConnection` Submodule" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBeyondcorpAppConnection <a name="DataGoogleBeyondcorpAppConnection" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connection google_beyondcorp_app_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnection"

datagooglebeyondcorpappconnection.NewDataGoogleBeyondcorpAppConnection(scope Construct, id *string, config DataGoogleBeyondcorpAppConnectionConfig) DataGoogleBeyondcorpAppConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig">DataGoogleBeyondcorpAppConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig">DataGoogleBeyondcorpAppConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnection"

datagooglebeyondcorpappconnection.DataGoogleBeyondcorpAppConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnection"

datagooglebeyondcorpappconnection.DataGoogleBeyondcorpAppConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnection"

datagooglebeyondcorpappconnection.DataGoogleBeyondcorpAppConnection_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.applicationEndpoint">ApplicationEndpoint</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList">DataGoogleBeyondcorpAppConnectionApplicationEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.connectors">Connectors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.gateway">Gateway</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList">DataGoogleBeyondcorpAppConnectionGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApplicationEndpoint`<sup>Required</sup> <a name="ApplicationEndpoint" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.applicationEndpoint"></a>

```go
func ApplicationEndpoint() DataGoogleBeyondcorpAppConnectionApplicationEndpointList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList">DataGoogleBeyondcorpAppConnectionApplicationEndpointList</a>

---

##### `Connectors`<sup>Required</sup> <a name="Connectors" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.connectors"></a>

```go
func Connectors() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.gateway"></a>

```go
func Gateway() DataGoogleBeyondcorpAppConnectionGatewayList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList">DataGoogleBeyondcorpAppConnectionGatewayList</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBeyondcorpAppConnectionApplicationEndpoint <a name="DataGoogleBeyondcorpAppConnectionApplicationEndpoint" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnection"

&datagooglebeyondcorpappconnection.DataGoogleBeyondcorpAppConnectionApplicationEndpoint {

}
```


### DataGoogleBeyondcorpAppConnectionConfig <a name="DataGoogleBeyondcorpAppConnectionConfig" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnection"

&datagooglebeyondcorpappconnection.DataGoogleBeyondcorpAppConnectionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.name">Name</a></code> | <code>*string</code> | ID of the AppConnection. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connection#id DataGoogleBeyondcorpAppConnection#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connection#project DataGoogleBeyondcorpAppConnection#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.region">Region</a></code> | <code>*string</code> | The region of the AppConnection. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

ID of the AppConnection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connection#name DataGoogleBeyondcorpAppConnection#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connection#id DataGoogleBeyondcorpAppConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connection#project DataGoogleBeyondcorpAppConnection#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the AppConnection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connection#region DataGoogleBeyondcorpAppConnection#region}

---

### DataGoogleBeyondcorpAppConnectionGateway <a name="DataGoogleBeyondcorpAppConnectionGateway" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGateway.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnection"

&datagooglebeyondcorpappconnection.DataGoogleBeyondcorpAppConnectionGateway {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBeyondcorpAppConnectionApplicationEndpointList <a name="DataGoogleBeyondcorpAppConnectionApplicationEndpointList" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnection"

datagooglebeyondcorpappconnection.NewDataGoogleBeyondcorpAppConnectionApplicationEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBeyondcorpAppConnectionApplicationEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.get"></a>

```go
func Get(index *f64) DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference <a name="DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnection"

datagooglebeyondcorpappconnection.NewDataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpoint">DataGoogleBeyondcorpAppConnectionApplicationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBeyondcorpAppConnectionApplicationEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpoint">DataGoogleBeyondcorpAppConnectionApplicationEndpoint</a>

---


### DataGoogleBeyondcorpAppConnectionGatewayList <a name="DataGoogleBeyondcorpAppConnectionGatewayList" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnection"

datagooglebeyondcorpappconnection.NewDataGoogleBeyondcorpAppConnectionGatewayList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBeyondcorpAppConnectionGatewayList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.get"></a>

```go
func Get(index *f64) DataGoogleBeyondcorpAppConnectionGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBeyondcorpAppConnectionGatewayOutputReference <a name="DataGoogleBeyondcorpAppConnectionGatewayOutputReference" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnection"

datagooglebeyondcorpappconnection.NewDataGoogleBeyondcorpAppConnectionGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBeyondcorpAppConnectionGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.appGateway">AppGateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.ingressPort">IngressPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGateway">DataGoogleBeyondcorpAppConnectionGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppGateway`<sup>Required</sup> <a name="AppGateway" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.appGateway"></a>

```go
func AppGateway() *string
```

- *Type:* *string

---

##### `IngressPort`<sup>Required</sup> <a name="IngressPort" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.ingressPort"></a>

```go
func IngressPort() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBeyondcorpAppConnectionGateway
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGateway">DataGoogleBeyondcorpAppConnectionGateway</a>

---




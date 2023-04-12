# `dataGoogleBeyondcorpAppConnector` Submodule <a name="`dataGoogleBeyondcorpAppConnector` Submodule" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBeyondcorpAppConnector <a name="DataGoogleBeyondcorpAppConnector" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connector google_beyondcorp_app_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnector"

datagooglebeyondcorpappconnector.NewDataGoogleBeyondcorpAppConnector(scope Construct, id *string, config DataGoogleBeyondcorpAppConnectorConfig) DataGoogleBeyondcorpAppConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig">DataGoogleBeyondcorpAppConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig">DataGoogleBeyondcorpAppConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnector"

datagooglebeyondcorpappconnector.DataGoogleBeyondcorpAppConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnector"

datagooglebeyondcorpappconnector.DataGoogleBeyondcorpAppConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnector"

datagooglebeyondcorpappconnector.DataGoogleBeyondcorpAppConnector_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.principalInfo">PrincipalInfo</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList">DataGoogleBeyondcorpAppConnectorPrincipalInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `PrincipalInfo`<sup>Required</sup> <a name="PrincipalInfo" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.principalInfo"></a>

```go
func PrincipalInfo() DataGoogleBeyondcorpAppConnectorPrincipalInfoList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList">DataGoogleBeyondcorpAppConnectorPrincipalInfoList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBeyondcorpAppConnectorConfig <a name="DataGoogleBeyondcorpAppConnectorConfig" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnector"

&datagooglebeyondcorpappconnector.DataGoogleBeyondcorpAppConnectorConfig {
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
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.name">Name</a></code> | <code>*string</code> | ID of the AppConnector. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connector#id DataGoogleBeyondcorpAppConnector#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connector#project DataGoogleBeyondcorpAppConnector#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.region">Region</a></code> | <code>*string</code> | The region of the AppConnector. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

ID of the AppConnector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connector#name DataGoogleBeyondcorpAppConnector#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connector#id DataGoogleBeyondcorpAppConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connector#project DataGoogleBeyondcorpAppConnector#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the AppConnector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/beyondcorp_app_connector#region DataGoogleBeyondcorpAppConnector#region}

---

### DataGoogleBeyondcorpAppConnectorPrincipalInfo <a name="DataGoogleBeyondcorpAppConnectorPrincipalInfo" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnector"

&datagooglebeyondcorpappconnector.DataGoogleBeyondcorpAppConnectorPrincipalInfo {

}
```


### DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount <a name="DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnector"

&datagooglebeyondcorpappconnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBeyondcorpAppConnectorPrincipalInfoList <a name="DataGoogleBeyondcorpAppConnectorPrincipalInfoList" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnector"

datagooglebeyondcorpappconnector.NewDataGoogleBeyondcorpAppConnectorPrincipalInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBeyondcorpAppConnectorPrincipalInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.get"></a>

```go
func Get(index *f64) DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference <a name="DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnector"

datagooglebeyondcorpappconnector.NewDataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList">DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfo">DataGoogleBeyondcorpAppConnectorPrincipalInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList">DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBeyondcorpAppConnectorPrincipalInfo
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfo">DataGoogleBeyondcorpAppConnectorPrincipalInfo</a>

---


### DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList <a name="DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnector"

datagooglebeyondcorpappconnector.NewDataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.get"></a>

```go
func Get(index *f64) DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference <a name="DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebeyondcorpappconnector"

datagooglebeyondcorpappconnector.NewDataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount">DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount">DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

---




# `dataGoogleSqlDatabaseInstances` Submodule <a name="`dataGoogleSqlDatabaseInstances` Submodule" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSqlDatabaseInstances <a name="DataGoogleSqlDatabaseInstances" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/sql_database_instances google_sql_database_instances}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstances(scope Construct, id *string, config DataGoogleSqlDatabaseInstancesConfig) DataGoogleSqlDatabaseInstances
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig">DataGoogleSqlDatabaseInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig">DataGoogleSqlDatabaseInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetDatabaseVersion">ResetDatabaseVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetTier">ResetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDatabaseVersion` <a name="ResetDatabaseVersion" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetDatabaseVersion"></a>

```go
func ResetDatabaseVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetState"></a>

```go
func ResetState()
```

##### `ResetTier` <a name="ResetTier" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetTier"></a>

```go
func ResetTier()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstances_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstances_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstances_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.instances">Instances</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList">DataGoogleSqlDatabaseInstancesInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.databaseVersionInput">DatabaseVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.instances"></a>

```go
func Instances() DataGoogleSqlDatabaseInstancesInstancesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList">DataGoogleSqlDatabaseInstancesInstancesList</a>

---

##### `DatabaseVersionInput`<sup>Optional</sup> <a name="DatabaseVersionInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.databaseVersionInput"></a>

```go
func DatabaseVersionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.databaseVersion"></a>

```go
func DatabaseVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstances.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSqlDatabaseInstancesConfig <a name="DataGoogleSqlDatabaseInstancesConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatabaseVersion: *string,
	Id: *string,
	Project: *string,
	Region: *string,
	State: *string,
	Tier: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | To filter out the database instances which are of the specified database version. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/sql_database_instances#id DataGoogleSqlDatabaseInstances#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.project">Project</a></code> | <code>*string</code> | Project ID of the project that contains the instances. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.region">Region</a></code> | <code>*string</code> | To filter out the database instances which are located in this specified region. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.state">State</a></code> | <code>*string</code> | To filter out the database instances based on the current state of the database instance, valid values include : "SQL_INSTANCE_STATE_UNSPECIFIED", "RUNNABLE", "SUSPENDED", "PENDING_DELETE", "PENDING_CREATE", "MAINTENANCE" and "FAILED". |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.tier">Tier</a></code> | <code>*string</code> | To filter out the database instances based on the machine type. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.zone">Zone</a></code> | <code>*string</code> | To filter out the database instances which are located in this specified zone. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseVersion`<sup>Optional</sup> <a name="DatabaseVersion" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.databaseVersion"></a>

```go
DatabaseVersion *string
```

- *Type:* *string

To filter out the database instances which are of the specified database version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/sql_database_instances#database_version DataGoogleSqlDatabaseInstances#database_version}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/sql_database_instances#id DataGoogleSqlDatabaseInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Project ID of the project that contains the instances.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/sql_database_instances#project DataGoogleSqlDatabaseInstances#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

To filter out the database instances which are located in this specified region.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/sql_database_instances#region DataGoogleSqlDatabaseInstances#region}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

To filter out the database instances based on the current state of the database instance, valid values include : "SQL_INSTANCE_STATE_UNSPECIFIED", "RUNNABLE", "SUSPENDED", "PENDING_DELETE", "PENDING_CREATE", "MAINTENANCE" and "FAILED".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/sql_database_instances#state DataGoogleSqlDatabaseInstances#state}

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

To filter out the database instances based on the machine type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/sql_database_instances#tier DataGoogleSqlDatabaseInstances#tier}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

To filter out the database instances which are located in this specified zone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/sql_database_instances#zone DataGoogleSqlDatabaseInstances#zone}

---

### DataGoogleSqlDatabaseInstancesInstances <a name="DataGoogleSqlDatabaseInstancesInstances" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstances.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstances {

}
```


### DataGoogleSqlDatabaseInstancesInstancesClone <a name="DataGoogleSqlDatabaseInstancesInstancesClone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesClone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesClone.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesClone {

}
```


### DataGoogleSqlDatabaseInstancesInstancesIpAddress <a name="DataGoogleSqlDatabaseInstancesInstancesIpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesIpAddress {

}
```


### DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration <a name="DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration {

}
```


### DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext <a name="DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext {

}
```


### DataGoogleSqlDatabaseInstancesInstancesServerCaCert <a name="DataGoogleSqlDatabaseInstancesInstancesServerCaCert" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCert.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCert {

}
```


### DataGoogleSqlDatabaseInstancesInstancesSettings <a name="DataGoogleSqlDatabaseInstancesInstancesSettings" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesSettings {

}
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig {

}
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration {

}
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings {

}
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags {

}
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod {

}
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig {

}
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration {

}
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks {

}
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference {

}
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow {

}
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy {

}
```


### DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

&datagooglesqldatabaseinstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSqlDatabaseInstancesInstancesCloneList <a name="DataGoogleSqlDatabaseInstancesInstancesCloneList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesCloneList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesCloneList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesCloneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.allocatedIpRange">AllocatedIpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.databaseNames">DatabaseNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.pointInTime">PointInTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.sourceInstanceName">SourceInstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesClone">DataGoogleSqlDatabaseInstancesInstancesClone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocatedIpRange`<sup>Required</sup> <a name="AllocatedIpRange" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.allocatedIpRange"></a>

```go
func AllocatedIpRange() *string
```

- *Type:* *string

---

##### `DatabaseNames`<sup>Required</sup> <a name="DatabaseNames" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.databaseNames"></a>

```go
func DatabaseNames() *[]*string
```

- *Type:* *[]*string

---

##### `PointInTime`<sup>Required</sup> <a name="PointInTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.pointInTime"></a>

```go
func PointInTime() *string
```

- *Type:* *string

---

##### `SourceInstanceName`<sup>Required</sup> <a name="SourceInstanceName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.sourceInstanceName"></a>

```go
func SourceInstanceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesClone
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesClone">DataGoogleSqlDatabaseInstancesInstancesClone</a>

---


### DataGoogleSqlDatabaseInstancesInstancesIpAddressList <a name="DataGoogleSqlDatabaseInstancesInstancesIpAddressList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesIpAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesIpAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.timeToRetire">TimeToRetire</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddress">DataGoogleSqlDatabaseInstancesInstancesIpAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `TimeToRetire`<sup>Required</sup> <a name="TimeToRetire" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.timeToRetire"></a>

```go
func TimeToRetire() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesIpAddress
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddress">DataGoogleSqlDatabaseInstancesInstancesIpAddress</a>

---


### DataGoogleSqlDatabaseInstancesInstancesList <a name="DataGoogleSqlDatabaseInstancesInstancesList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.availableMaintenanceVersions">AvailableMaintenanceVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.clone">Clone</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList">DataGoogleSqlDatabaseInstancesInstancesCloneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.deletionProtection">DeletionProtection</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.encryptionKeyName">EncryptionKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.firstIpAddress">FirstIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.ipAddress">IpAddress</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList">DataGoogleSqlDatabaseInstancesInstancesIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.maintenanceVersion">MaintenanceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.masterInstanceName">MasterInstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.publicIpAddress">PublicIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.replicaConfiguration">ReplicaConfiguration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList">DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.restoreBackupContext">RestoreBackupContext</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList">DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.rootPassword">RootPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.serverCaCert">ServerCaCert</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList">DataGoogleSqlDatabaseInstancesInstancesServerCaCertList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.serviceAccountEmailAddress">ServiceAccountEmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList">DataGoogleSqlDatabaseInstancesInstancesSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstances">DataGoogleSqlDatabaseInstancesInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailableMaintenanceVersions`<sup>Required</sup> <a name="AvailableMaintenanceVersions" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.availableMaintenanceVersions"></a>

```go
func AvailableMaintenanceVersions() *[]*string
```

- *Type:* *[]*string

---

##### `Clone`<sup>Required</sup> <a name="Clone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.clone"></a>

```go
func Clone() DataGoogleSqlDatabaseInstancesInstancesCloneList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesCloneList">DataGoogleSqlDatabaseInstancesInstancesCloneList</a>

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.databaseVersion"></a>

```go
func DatabaseVersion() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.deletionProtection"></a>

```go
func DeletionProtection() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EncryptionKeyName`<sup>Required</sup> <a name="EncryptionKeyName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.encryptionKeyName"></a>

```go
func EncryptionKeyName() *string
```

- *Type:* *string

---

##### `FirstIpAddress`<sup>Required</sup> <a name="FirstIpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.firstIpAddress"></a>

```go
func FirstIpAddress() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.ipAddress"></a>

```go
func IpAddress() DataGoogleSqlDatabaseInstancesInstancesIpAddressList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesIpAddressList">DataGoogleSqlDatabaseInstancesInstancesIpAddressList</a>

---

##### `MaintenanceVersion`<sup>Required</sup> <a name="MaintenanceVersion" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.maintenanceVersion"></a>

```go
func MaintenanceVersion() *string
```

- *Type:* *string

---

##### `MasterInstanceName`<sup>Required</sup> <a name="MasterInstanceName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.masterInstanceName"></a>

```go
func MasterInstanceName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.publicIpAddress"></a>

```go
func PublicIpAddress() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ReplicaConfiguration`<sup>Required</sup> <a name="ReplicaConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.replicaConfiguration"></a>

```go
func ReplicaConfiguration() DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList">DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList</a>

---

##### `RestoreBackupContext`<sup>Required</sup> <a name="RestoreBackupContext" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.restoreBackupContext"></a>

```go
func RestoreBackupContext() DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList">DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList</a>

---

##### `RootPassword`<sup>Required</sup> <a name="RootPassword" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.rootPassword"></a>

```go
func RootPassword() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ServerCaCert`<sup>Required</sup> <a name="ServerCaCert" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.serverCaCert"></a>

```go
func ServerCaCert() DataGoogleSqlDatabaseInstancesInstancesServerCaCertList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList">DataGoogleSqlDatabaseInstancesInstancesServerCaCertList</a>

---

##### `ServiceAccountEmailAddress`<sup>Required</sup> <a name="ServiceAccountEmailAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.serviceAccountEmailAddress"></a>

```go
func ServiceAccountEmailAddress() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.settings"></a>

```go
func Settings() DataGoogleSqlDatabaseInstancesInstancesSettingsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList">DataGoogleSqlDatabaseInstancesInstancesSettingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstances
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstances">DataGoogleSqlDatabaseInstancesInstances</a>

---


### DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList <a name="DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.connectRetryInterval">ConnectRetryInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.dumpFilePath">DumpFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.failoverTarget">FailoverTarget</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.masterHeartbeatPeriod">MasterHeartbeatPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.sslCipher">SslCipher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.verifyServerCertificate">VerifyServerCertificate</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration">DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.caCertificate"></a>

```go
func CaCertificate() *string
```

- *Type:* *string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `ConnectRetryInterval`<sup>Required</sup> <a name="ConnectRetryInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.connectRetryInterval"></a>

```go
func ConnectRetryInterval() *f64
```

- *Type:* *f64

---

##### `DumpFilePath`<sup>Required</sup> <a name="DumpFilePath" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.dumpFilePath"></a>

```go
func DumpFilePath() *string
```

- *Type:* *string

---

##### `FailoverTarget`<sup>Required</sup> <a name="FailoverTarget" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.failoverTarget"></a>

```go
func FailoverTarget() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MasterHeartbeatPeriod`<sup>Required</sup> <a name="MasterHeartbeatPeriod" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.masterHeartbeatPeriod"></a>

```go
func MasterHeartbeatPeriod() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `SslCipher`<sup>Required</sup> <a name="SslCipher" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.sslCipher"></a>

```go
func SslCipher() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `VerifyServerCertificate`<sup>Required</sup> <a name="VerifyServerCertificate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.verifyServerCertificate"></a>

```go
func VerifyServerCertificate() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration">DataGoogleSqlDatabaseInstancesInstancesReplicaConfiguration</a>

---


### DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList <a name="DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.backupRunId">BackupRunId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext">DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupRunId`<sup>Required</sup> <a name="BackupRunId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.backupRunId"></a>

```go
func BackupRunId() *f64
```

- *Type:* *f64

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext">DataGoogleSqlDatabaseInstancesInstancesRestoreBackupContext</a>

---


### DataGoogleSqlDatabaseInstancesInstancesServerCaCertList <a name="DataGoogleSqlDatabaseInstancesInstancesServerCaCertList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesServerCaCertList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesServerCaCertList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.cert">Cert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.expirationTime">ExpirationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.sha1Fingerprint">Sha1Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCert">DataGoogleSqlDatabaseInstancesInstancesServerCaCert</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.cert"></a>

```go
func Cert() *string
```

- *Type:* *string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.expirationTime"></a>

```go
func ExpirationTime() *string
```

- *Type:* *string

---

##### `Sha1Fingerprint`<sup>Required</sup> <a name="Sha1Fingerprint" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.sha1Fingerprint"></a>

```go
func Sha1Fingerprint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCertOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesServerCaCert
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesServerCaCert">DataGoogleSqlDatabaseInstancesInstancesServerCaCert</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfig</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups">RetainedBackups</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit">RetentionUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings">DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetainedBackups`<sup>Required</sup> <a name="RetainedBackups" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups"></a>

```go
func RetainedBackups() *f64
```

- *Type:* *f64

---

##### `RetentionUnit`<sup>Required</sup> <a name="RetentionUnit" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit"></a>

```go
func RetentionUnit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings">DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettings</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.backupRetentionSettings">BackupRetentionSettings</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList">DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.binaryLogEnabled">BinaryLogEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled">PointInTimeRecoveryEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays">TransactionLogRetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration">DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupRetentionSettings`<sup>Required</sup> <a name="BackupRetentionSettings" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.backupRetentionSettings"></a>

```go
func BackupRetentionSettings() DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList">DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationBackupRetentionSettingsList</a>

---

##### `BinaryLogEnabled`<sup>Required</sup> <a name="BinaryLogEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.binaryLogEnabled"></a>

```go
func BinaryLogEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PointInTimeRecoveryEnabled`<sup>Required</sup> <a name="PointInTimeRecoveryEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```go
func PointInTimeRecoveryEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `TransactionLogRetentionDays`<sup>Required</sup> <a name="TransactionLogRetentionDays" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays"></a>

```go
func TransactionLogRetentionDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration">DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfiguration</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags">DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags">DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlags</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod">DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod">DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriod</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.queryInsightsEnabled">QueryInsightsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.queryPlansPerMinute">QueryPlansPerMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.queryStringLength">QueryStringLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.recordApplicationTags">RecordApplicationTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.recordClientAddress">RecordClientAddress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryInsightsEnabled`<sup>Required</sup> <a name="QueryInsightsEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.queryInsightsEnabled"></a>

```go
func QueryInsightsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `QueryPlansPerMinute`<sup>Required</sup> <a name="QueryPlansPerMinute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```go
func QueryPlansPerMinute() *f64
```

- *Type:* *f64

---

##### `QueryStringLength`<sup>Required</sup> <a name="QueryStringLength" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.queryStringLength"></a>

```go
func QueryStringLength() *f64
```

- *Type:* *f64

---

##### `RecordApplicationTags`<sup>Required</sup> <a name="RecordApplicationTags" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.recordApplicationTags"></a>

```go
func RecordApplicationTags() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RecordClientAddress`<sup>Required</sup> <a name="RecordClientAddress" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.recordClientAddress"></a>

```go
func RecordClientAddress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfig</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime">ExpirationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime"></a>

```go
func ExpirationTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworks</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.allocatedIpRange">AllocatedIpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.authorizedNetworks">AuthorizedNetworks</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices">EnablePrivatePathForGoogleCloudServices</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.ipv4Enabled">Ipv4Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.privateNetwork">PrivateNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.requireSsl">RequireSsl</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocatedIpRange`<sup>Required</sup> <a name="AllocatedIpRange" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.allocatedIpRange"></a>

```go
func AllocatedIpRange() *string
```

- *Type:* *string

---

##### `AuthorizedNetworks`<sup>Required</sup> <a name="AuthorizedNetworks" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.authorizedNetworks"></a>

```go
func AuthorizedNetworks() DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationAuthorizedNetworksList</a>

---

##### `EnablePrivatePathForGoogleCloudServices`<sup>Required</sup> <a name="EnablePrivatePathForGoogleCloudServices" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices"></a>

```go
func EnablePrivatePathForGoogleCloudServices() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Ipv4Enabled`<sup>Required</sup> <a name="Ipv4Enabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.ipv4Enabled"></a>

```go
func Ipv4Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PrivateNetwork`<sup>Required</sup> <a name="PrivateNetwork" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.privateNetwork"></a>

```go
func PrivateNetwork() *string
```

- *Type:* *string

---

##### `RequireSsl`<sup>Required</sup> <a name="RequireSsl" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.requireSsl"></a>

```go
func RequireSsl() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfiguration</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.followGaeApplication">FollowGaeApplication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.secondaryZone">SecondaryZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference">DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FollowGaeApplication`<sup>Required</sup> <a name="FollowGaeApplication" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.followGaeApplication"></a>

```go
func FollowGaeApplication() *string
```

- *Type:* *string

---

##### `SecondaryZone`<sup>Required</sup> <a name="SecondaryZone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.secondaryZone"></a>

```go
func SecondaryZone() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference">DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreference</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.updateTrack">UpdateTrack</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow">DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `UpdateTrack`<sup>Required</sup> <a name="UpdateTrack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.updateTrack"></a>

```go
func UpdateTrack() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow">DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindow</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.activationPolicy">ActivationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.activeDirectoryConfig">ActiveDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.availabilityType">AvailabilityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.backupConfiguration">BackupConfiguration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList">DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.collation">Collation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.connectorEnforcement">ConnectorEnforcement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.databaseFlags">DatabaseFlags</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList">DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.denyMaintenancePeriod">DenyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList">DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.diskAutoresize">DiskAutoresize</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.diskAutoresizeLimit">DiskAutoresizeLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.diskSize">DiskSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.diskType">DiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.insightsConfig">InsightsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.locationPreference">LocationPreference</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList">DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList">DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.passwordValidationPolicy">PasswordValidationPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList">DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.pricingPlan">PricingPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.sqlServerAuditConfig">SqlServerAuditConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.userLabels">UserLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettings">DataGoogleSqlDatabaseInstancesInstancesSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActivationPolicy`<sup>Required</sup> <a name="ActivationPolicy" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.activationPolicy"></a>

```go
func ActivationPolicy() *string
```

- *Type:* *string

---

##### `ActiveDirectoryConfig`<sup>Required</sup> <a name="ActiveDirectoryConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.activeDirectoryConfig"></a>

```go
func ActiveDirectoryConfig() DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsActiveDirectoryConfigList</a>

---

##### `AvailabilityType`<sup>Required</sup> <a name="AvailabilityType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.availabilityType"></a>

```go
func AvailabilityType() *string
```

- *Type:* *string

---

##### `BackupConfiguration`<sup>Required</sup> <a name="BackupConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.backupConfiguration"></a>

```go
func BackupConfiguration() DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList">DataGoogleSqlDatabaseInstancesInstancesSettingsBackupConfigurationList</a>

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.collation"></a>

```go
func Collation() *string
```

- *Type:* *string

---

##### `ConnectorEnforcement`<sup>Required</sup> <a name="ConnectorEnforcement" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.connectorEnforcement"></a>

```go
func ConnectorEnforcement() *string
```

- *Type:* *string

---

##### `DatabaseFlags`<sup>Required</sup> <a name="DatabaseFlags" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.databaseFlags"></a>

```go
func DatabaseFlags() DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList">DataGoogleSqlDatabaseInstancesInstancesSettingsDatabaseFlagsList</a>

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.deletionProtectionEnabled"></a>

```go
func DeletionProtectionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DenyMaintenancePeriod`<sup>Required</sup> <a name="DenyMaintenancePeriod" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.denyMaintenancePeriod"></a>

```go
func DenyMaintenancePeriod() DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList">DataGoogleSqlDatabaseInstancesInstancesSettingsDenyMaintenancePeriodList</a>

---

##### `DiskAutoresize`<sup>Required</sup> <a name="DiskAutoresize" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.diskAutoresize"></a>

```go
func DiskAutoresize() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DiskAutoresizeLimit`<sup>Required</sup> <a name="DiskAutoresizeLimit" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.diskAutoresizeLimit"></a>

```go
func DiskAutoresizeLimit() *f64
```

- *Type:* *f64

---

##### `DiskSize`<sup>Required</sup> <a name="DiskSize" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.diskSize"></a>

```go
func DiskSize() *f64
```

- *Type:* *f64

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.diskType"></a>

```go
func DiskType() *string
```

- *Type:* *string

---

##### `InsightsConfig`<sup>Required</sup> <a name="InsightsConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.insightsConfig"></a>

```go
func InsightsConfig() DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsInsightsConfigList</a>

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.ipConfiguration"></a>

```go
func IpConfiguration() DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList">DataGoogleSqlDatabaseInstancesInstancesSettingsIpConfigurationList</a>

---

##### `LocationPreference`<sup>Required</sup> <a name="LocationPreference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.locationPreference"></a>

```go
func LocationPreference() DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList">DataGoogleSqlDatabaseInstancesInstancesSettingsLocationPreferenceList</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList">DataGoogleSqlDatabaseInstancesInstancesSettingsMaintenanceWindowList</a>

---

##### `PasswordValidationPolicy`<sup>Required</sup> <a name="PasswordValidationPolicy" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.passwordValidationPolicy"></a>

```go
func PasswordValidationPolicy() DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList">DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList</a>

---

##### `PricingPlan`<sup>Required</sup> <a name="PricingPlan" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.pricingPlan"></a>

```go
func PricingPlan() *string
```

- *Type:* *string

---

##### `SqlServerAuditConfig`<sup>Required</sup> <a name="SqlServerAuditConfig" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.sqlServerAuditConfig"></a>

```go
func SqlServerAuditConfig() DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList">DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList</a>

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.userLabels"></a>

```go
func UserLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesSettings
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettings">DataGoogleSqlDatabaseInstancesInstancesSettings</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.complexity">Complexity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring">DisallowUsernameSubstring</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy">EnablePasswordPolicy</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.minLength">MinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval">PasswordChangeInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.reuseInterval">ReuseInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy">DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Complexity`<sup>Required</sup> <a name="Complexity" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.complexity"></a>

```go
func Complexity() *string
```

- *Type:* *string

---

##### `DisallowUsernameSubstring`<sup>Required</sup> <a name="DisallowUsernameSubstring" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring"></a>

```go
func DisallowUsernameSubstring() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnablePasswordPolicy`<sup>Required</sup> <a name="EnablePasswordPolicy" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy"></a>

```go
func EnablePasswordPolicy() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.minLength"></a>

```go
func MinLength() *f64
```

- *Type:* *f64

---

##### `PasswordChangeInterval`<sup>Required</sup> <a name="PasswordChangeInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval"></a>

```go
func PasswordChangeInterval() *string
```

- *Type:* *string

---

##### `ReuseInterval`<sup>Required</sup> <a name="ReuseInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.reuseInterval"></a>

```go
func ReuseInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy">DataGoogleSqlDatabaseInstancesInstancesSettingsPasswordValidationPolicy</a>

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.get"></a>

```go
func Get(index *f64) DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference <a name="DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesqldatabaseinstances"

datagooglesqldatabaseinstances.NewDataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.retentionInterval">RetentionInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.uploadInterval">UploadInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `RetentionInterval`<sup>Required</sup> <a name="RetentionInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.retentionInterval"></a>

```go
func RetentionInterval() *string
```

- *Type:* *string

---

##### `UploadInterval`<sup>Required</sup> <a name="UploadInterval" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.uploadInterval"></a>

```go
func UploadInterval() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSqlDatabaseInstances.DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig">DataGoogleSqlDatabaseInstancesInstancesSettingsSqlServerAuditConfig</a>

---




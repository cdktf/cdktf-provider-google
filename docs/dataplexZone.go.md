# `dataplexZone` Submodule <a name="`dataplexZone` Submodule" id="@cdktf/provider-google.dataplexZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexZone <a name="DataplexZone" id="@cdktf/provider-google.dataplexZone.DataplexZone"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone google_dataplex_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexZone.DataplexZone.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

dataplexzone.NewDataplexZone(scope Construct, id *string, config DataplexZoneConfig) DataplexZone
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig">DataplexZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexZone.DataplexZone.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexZone.DataplexZone.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataplexZone.DataplexZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig">DataplexZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.putDiscoverySpec">PutDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.putResourceSpec">PutResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexZone.DataplexZone.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataplexZone.DataplexZone.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataplexZone.DataplexZone.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexZone.DataplexZone.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataplexZone.DataplexZone.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataplexZone.DataplexZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataplexZone.DataplexZone.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataplexZone.DataplexZone.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataplexZone.DataplexZone.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDiscoverySpec` <a name="PutDiscoverySpec" id="@cdktf/provider-google.dataplexZone.DataplexZone.putDiscoverySpec"></a>

```go
func PutDiscoverySpec(value DataplexZoneDiscoverySpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexZone.DataplexZone.putDiscoverySpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a>

---

##### `PutResourceSpec` <a name="PutResourceSpec" id="@cdktf/provider-google.dataplexZone.DataplexZone.putResourceSpec"></a>

```go
func PutResourceSpec(value DataplexZoneResourceSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexZone.DataplexZone.putResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataplexZone.DataplexZone.putTimeouts"></a>

```go
func PutTimeouts(value DataplexZoneTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexZone.DataplexZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataplexZone.DataplexZone.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataplexZone.DataplexZone.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataplexZone.DataplexZone.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataplexZone.DataplexZone.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataplexZone.DataplexZone.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataplexZone.DataplexZone.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataplexZone.DataplexZone.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

dataplexzone.DataplexZone_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexZone.DataplexZone.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataplexZone.DataplexZone.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

dataplexzone.DataplexZone_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexZone.DataplexZone.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataplexZone.DataplexZone.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

dataplexzone.DataplexZone_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexZone.DataplexZone.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.assetStatus">AssetStatus</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList">DataplexZoneAssetStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.discoverySpec">DiscoverySpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference">DataplexZoneDiscoverySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.resourceSpec">ResourceSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference">DataplexZoneResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference">DataplexZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.discoverySpecInput">DiscoverySpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.lakeInput">LakeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.resourceSpecInput">ResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.lake">Lake</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssetStatus`<sup>Required</sup> <a name="AssetStatus" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.assetStatus"></a>

```go
func AssetStatus() DataplexZoneAssetStatusList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList">DataplexZoneAssetStatusList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DiscoverySpec`<sup>Required</sup> <a name="DiscoverySpec" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.discoverySpec"></a>

```go
func DiscoverySpec() DataplexZoneDiscoverySpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference">DataplexZoneDiscoverySpecOutputReference</a>

---

##### `ResourceSpec`<sup>Required</sup> <a name="ResourceSpec" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.resourceSpec"></a>

```go
func ResourceSpec() DataplexZoneResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference">DataplexZoneResourceSpecOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.timeouts"></a>

```go
func Timeouts() DataplexZoneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference">DataplexZoneTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiscoverySpecInput`<sup>Optional</sup> <a name="DiscoverySpecInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.discoverySpecInput"></a>

```go
func DiscoverySpecInput() DataplexZoneDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LakeInput`<sup>Optional</sup> <a name="LakeInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.lakeInput"></a>

```go
func LakeInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ResourceSpecInput`<sup>Optional</sup> <a name="ResourceSpecInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.resourceSpecInput"></a>

```go
func ResourceSpecInput() DataplexZoneResourceSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Lake`<sup>Required</sup> <a name="Lake" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.lake"></a>

```go
func Lake() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZone.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataplexZone.DataplexZone.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexZoneAssetStatus <a name="DataplexZoneAssetStatus" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

&dataplexzone.DataplexZoneAssetStatus {

}
```


### DataplexZoneConfig <a name="DataplexZoneConfig" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

&dataplexzone.DataplexZoneConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DiscoverySpec: github.com/cdktf/cdktf-provider-google-go/google.dataplexZone.DataplexZoneDiscoverySpec,
	Lake: *string,
	Location: *string,
	Name: *string,
	ResourceSpec: github.com/cdktf/cdktf-provider-google-go/google.dataplexZone.DataplexZoneResourceSpec,
	Type: *string,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dataplexZone.DataplexZoneTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.discoverySpec">DiscoverySpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a></code> | discovery_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.lake">Lake</a></code> | <code>*string</code> | The lake for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.name">Name</a></code> | <code>*string</code> | The name of the zone. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.resourceSpec">ResourceSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a></code> | resource_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.type">Type</a></code> | <code>*string</code> | Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.description">Description</a></code> | <code>*string</code> | Optional. Description of the zone. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Optional. User friendly display name. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#id DataplexZone#id}. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. User defined labels for the zone. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.project">Project</a></code> | <code>*string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DiscoverySpec`<sup>Required</sup> <a name="DiscoverySpec" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.discoverySpec"></a>

```go
DiscoverySpec DataplexZoneDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a>

discovery_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#discovery_spec DataplexZone#discovery_spec}

---

##### `Lake`<sup>Required</sup> <a name="Lake" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.lake"></a>

```go
Lake *string
```

- *Type:* *string

The lake for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#lake DataplexZone#lake}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#location DataplexZone#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the zone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#name DataplexZone#name}

---

##### `ResourceSpec`<sup>Required</sup> <a name="ResourceSpec" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.resourceSpec"></a>

```go
ResourceSpec DataplexZoneResourceSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a>

resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#resource_spec DataplexZone#resource_spec}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#type DataplexZone#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. Description of the zone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#description DataplexZone#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Optional. User friendly display name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#display_name DataplexZone#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#id DataplexZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. User defined labels for the zone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#labels DataplexZone#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#project DataplexZone#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataplexZone.DataplexZoneConfig.property.timeouts"></a>

```go
Timeouts DataplexZoneTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#timeouts DataplexZone#timeouts}

---

### DataplexZoneDiscoverySpec <a name="DataplexZoneDiscoverySpec" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

&dataplexzone.DataplexZoneDiscoverySpec {
	Enabled: interface{},
	CsvOptions: github.com/cdktf/cdktf-provider-google-go/google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions,
	ExcludePatterns: *[]*string,
	IncludePatterns: *[]*string,
	JsonOptions: github.com/cdktf/cdktf-provider-google-go/google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions,
	Schedule: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.enabled">Enabled</a></code> | <code>interface{}</code> | Required. Whether discovery is enabled. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.excludePatterns">ExcludePatterns</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.includePatterns">IncludePatterns</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.jsonOptions">JsonOptions</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a></code> | json_options block. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.schedule">Schedule</a></code> | <code>*string</code> | Optional. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Required. Whether discovery is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#enabled DataplexZone#enabled}

---

##### `CsvOptions`<sup>Optional</sup> <a name="CsvOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.csvOptions"></a>

```go
CsvOptions DataplexZoneDiscoverySpecCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#csv_options DataplexZone#csv_options}

---

##### `ExcludePatterns`<sup>Optional</sup> <a name="ExcludePatterns" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.excludePatterns"></a>

```go
ExcludePatterns *[]*string
```

- *Type:* *[]*string

Optional.

The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#exclude_patterns DataplexZone#exclude_patterns}

---

##### `IncludePatterns`<sup>Optional</sup> <a name="IncludePatterns" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.includePatterns"></a>

```go
IncludePatterns *[]*string
```

- *Type:* *[]*string

Optional.

The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#include_patterns DataplexZone#include_patterns}

---

##### `JsonOptions`<sup>Optional</sup> <a name="JsonOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.jsonOptions"></a>

```go
JsonOptions DataplexZoneDiscoverySpecJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#json_options DataplexZone#json_options}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Optional.

Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#schedule DataplexZone#schedule}

---

### DataplexZoneDiscoverySpecCsvOptions <a name="DataplexZoneDiscoverySpecCsvOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

&dataplexzone.DataplexZoneDiscoverySpecCsvOptions {
	Delimiter: *string,
	DisableTypeInference: interface{},
	Encoding: *string,
	HeaderRows: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.delimiter">Delimiter</a></code> | <code>*string</code> | Optional. The delimiter being used to separate values. This defaults to ','. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.disableTypeInference">DisableTypeInference</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.encoding">Encoding</a></code> | <code>*string</code> | Optional. The character encoding of the data. The default is UTF-8. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.headerRows">HeaderRows</a></code> | <code>*f64</code> | Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. |

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

Optional. The delimiter being used to separate values. This defaults to ','.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#delimiter DataplexZone#delimiter}

---

##### `DisableTypeInference`<sup>Optional</sup> <a name="DisableTypeInference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.disableTypeInference"></a>

```go
DisableTypeInference interface{}
```

- *Type:* interface{}

Optional.

Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#disable_type_inference DataplexZone#disable_type_inference}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#encoding DataplexZone#encoding}

---

##### `HeaderRows`<sup>Optional</sup> <a name="HeaderRows" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.headerRows"></a>

```go
HeaderRows *f64
```

- *Type:* *f64

Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#header_rows DataplexZone#header_rows}

---

### DataplexZoneDiscoverySpecJsonOptions <a name="DataplexZoneDiscoverySpecJsonOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

&dataplexzone.DataplexZoneDiscoverySpecJsonOptions {
	DisableTypeInference: interface{},
	Encoding: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions.property.disableTypeInference">DisableTypeInference</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions.property.encoding">Encoding</a></code> | <code>*string</code> | Optional. The character encoding of the data. The default is UTF-8. |

---

##### `DisableTypeInference`<sup>Optional</sup> <a name="DisableTypeInference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions.property.disableTypeInference"></a>

```go
DisableTypeInference interface{}
```

- *Type:* interface{}

Optional.

Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#disable_type_inference DataplexZone#disable_type_inference}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#encoding DataplexZone#encoding}

---

### DataplexZoneResourceSpec <a name="DataplexZoneResourceSpec" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

&dataplexzone.DataplexZoneResourceSpec {
	LocationType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec.property.locationType">LocationType</a></code> | <code>*string</code> | Required. |

---

##### `LocationType`<sup>Required</sup> <a name="LocationType" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec.property.locationType"></a>

```go
LocationType *string
```

- *Type:* *string

Required.

Immutable. The location type of the resources that are allowed to be attached to the assets within this zone. Possible values: LOCATION_TYPE_UNSPECIFIED, SINGLE_REGION, MULTI_REGION

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#location_type DataplexZone#location_type}

---

### DataplexZoneTimeouts <a name="DataplexZoneTimeouts" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

&dataplexzone.DataplexZoneTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#create DataplexZone#create}. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#delete DataplexZone#delete}. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#update DataplexZone#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#create DataplexZone#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#delete DataplexZone#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_zone#update DataplexZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexZoneAssetStatusList <a name="DataplexZoneAssetStatusList" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

dataplexzone.NewDataplexZoneAssetStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexZoneAssetStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.get"></a>

```go
func Get(index *f64) DataplexZoneAssetStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexZoneAssetStatusOutputReference <a name="DataplexZoneAssetStatusOutputReference" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

dataplexzone.NewDataplexZoneAssetStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexZoneAssetStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.activeAssets">ActiveAssets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.securityPolicyApplyingAssets">SecurityPolicyApplyingAssets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatus">DataplexZoneAssetStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveAssets`<sup>Required</sup> <a name="ActiveAssets" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.activeAssets"></a>

```go
func ActiveAssets() *f64
```

- *Type:* *f64

---

##### `SecurityPolicyApplyingAssets`<sup>Required</sup> <a name="SecurityPolicyApplyingAssets" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.securityPolicyApplyingAssets"></a>

```go
func SecurityPolicyApplyingAssets() *f64
```

- *Type:* *f64

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexZoneAssetStatus
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneAssetStatus">DataplexZoneAssetStatus</a>

---


### DataplexZoneDiscoverySpecCsvOptionsOutputReference <a name="DataplexZoneDiscoverySpecCsvOptionsOutputReference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

dataplexzone.NewDataplexZoneDiscoverySpecCsvOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexZoneDiscoverySpecCsvOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDisableTypeInference">ResetDisableTypeInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetHeaderRows">ResetHeaderRows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDelimiter"></a>

```go
func ResetDelimiter()
```

##### `ResetDisableTypeInference` <a name="ResetDisableTypeInference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDisableTypeInference"></a>

```go
func ResetDisableTypeInference()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetHeaderRows` <a name="ResetHeaderRows" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetHeaderRows"></a>

```go
func ResetHeaderRows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInferenceInput">DisableTypeInferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRowsInput">HeaderRowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInference">DisableTypeInference</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRows">HeaderRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `DisableTypeInferenceInput`<sup>Optional</sup> <a name="DisableTypeInferenceInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInferenceInput"></a>

```go
func DisableTypeInferenceInput() interface{}
```

- *Type:* interface{}

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `HeaderRowsInput`<sup>Optional</sup> <a name="HeaderRowsInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRowsInput"></a>

```go
func HeaderRowsInput() *f64
```

- *Type:* *f64

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `DisableTypeInference`<sup>Required</sup> <a name="DisableTypeInference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInference"></a>

```go
func DisableTypeInference() interface{}
```

- *Type:* interface{}

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `HeaderRows`<sup>Required</sup> <a name="HeaderRows" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRows"></a>

```go
func HeaderRows() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexZoneDiscoverySpecCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a>

---


### DataplexZoneDiscoverySpecJsonOptionsOutputReference <a name="DataplexZoneDiscoverySpecJsonOptionsOutputReference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

dataplexzone.NewDataplexZoneDiscoverySpecJsonOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexZoneDiscoverySpecJsonOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resetDisableTypeInference">ResetDisableTypeInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableTypeInference` <a name="ResetDisableTypeInference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resetDisableTypeInference"></a>

```go
func ResetDisableTypeInference()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInferenceInput">DisableTypeInferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInference">DisableTypeInference</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableTypeInferenceInput`<sup>Optional</sup> <a name="DisableTypeInferenceInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInferenceInput"></a>

```go
func DisableTypeInferenceInput() interface{}
```

- *Type:* interface{}

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `DisableTypeInference`<sup>Required</sup> <a name="DisableTypeInference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInference"></a>

```go
func DisableTypeInference() interface{}
```

- *Type:* interface{}

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexZoneDiscoverySpecJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a>

---


### DataplexZoneDiscoverySpecOutputReference <a name="DataplexZoneDiscoverySpecOutputReference" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

dataplexzone.NewDataplexZoneDiscoverySpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexZoneDiscoverySpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putCsvOptions">PutCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putJsonOptions">PutJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetCsvOptions">ResetCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetExcludePatterns">ResetExcludePatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetIncludePatterns">ResetIncludePatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetJsonOptions">ResetJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsvOptions` <a name="PutCsvOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putCsvOptions"></a>

```go
func PutCsvOptions(value DataplexZoneDiscoverySpecCsvOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putCsvOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a>

---

##### `PutJsonOptions` <a name="PutJsonOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putJsonOptions"></a>

```go
func PutJsonOptions(value DataplexZoneDiscoverySpecJsonOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putJsonOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a>

---

##### `ResetCsvOptions` <a name="ResetCsvOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetCsvOptions"></a>

```go
func ResetCsvOptions()
```

##### `ResetExcludePatterns` <a name="ResetExcludePatterns" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetExcludePatterns"></a>

```go
func ResetExcludePatterns()
```

##### `ResetIncludePatterns` <a name="ResetIncludePatterns" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetIncludePatterns"></a>

```go
func ResetIncludePatterns()
```

##### `ResetJsonOptions` <a name="ResetJsonOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetJsonOptions"></a>

```go
func ResetJsonOptions()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetSchedule"></a>

```go
func ResetSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference">DataplexZoneDiscoverySpecCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.jsonOptions">JsonOptions</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference">DataplexZoneDiscoverySpecJsonOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.csvOptionsInput">CsvOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.excludePatternsInput">ExcludePatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.includePatternsInput">IncludePatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.jsonOptionsInput">JsonOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.excludePatterns">ExcludePatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.includePatterns">IncludePatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CsvOptions`<sup>Required</sup> <a name="CsvOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.csvOptions"></a>

```go
func CsvOptions() DataplexZoneDiscoverySpecCsvOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference">DataplexZoneDiscoverySpecCsvOptionsOutputReference</a>

---

##### `JsonOptions`<sup>Required</sup> <a name="JsonOptions" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.jsonOptions"></a>

```go
func JsonOptions() DataplexZoneDiscoverySpecJsonOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference">DataplexZoneDiscoverySpecJsonOptionsOutputReference</a>

---

##### `CsvOptionsInput`<sup>Optional</sup> <a name="CsvOptionsInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.csvOptionsInput"></a>

```go
func CsvOptionsInput() DataplexZoneDiscoverySpecCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludePatternsInput`<sup>Optional</sup> <a name="ExcludePatternsInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.excludePatternsInput"></a>

```go
func ExcludePatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludePatternsInput`<sup>Optional</sup> <a name="IncludePatternsInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.includePatternsInput"></a>

```go
func IncludePatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `JsonOptionsInput`<sup>Optional</sup> <a name="JsonOptionsInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.jsonOptionsInput"></a>

```go
func JsonOptionsInput() DataplexZoneDiscoverySpecJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `ExcludePatterns`<sup>Required</sup> <a name="ExcludePatterns" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.excludePatterns"></a>

```go
func ExcludePatterns() *[]*string
```

- *Type:* *[]*string

---

##### `IncludePatterns`<sup>Required</sup> <a name="IncludePatterns" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.includePatterns"></a>

```go
func IncludePatterns() *[]*string
```

- *Type:* *[]*string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexZoneDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a>

---


### DataplexZoneResourceSpecOutputReference <a name="DataplexZoneResourceSpecOutputReference" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

dataplexzone.NewDataplexZoneResourceSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexZoneResourceSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.locationTypeInput">LocationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.locationType">LocationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationTypeInput`<sup>Optional</sup> <a name="LocationTypeInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.locationTypeInput"></a>

```go
func LocationTypeInput() *string
```

- *Type:* *string

---

##### `LocationType`<sup>Required</sup> <a name="LocationType" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.locationType"></a>

```go
func LocationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexZoneResourceSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a>

---


### DataplexZoneTimeoutsOutputReference <a name="DataplexZoneTimeoutsOutputReference" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexzone"

dataplexzone.NewDataplexZoneTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexZoneTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




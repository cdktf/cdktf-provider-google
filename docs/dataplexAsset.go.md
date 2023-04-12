# `dataplexAsset` Submodule <a name="`dataplexAsset` Submodule" id="@cdktf/provider-google.dataplexAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexAsset <a name="DataplexAsset" id="@cdktf/provider-google.dataplexAsset.DataplexAsset"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset google_dataplex_asset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

dataplexasset.NewDataplexAsset(scope Construct, id *string, config DataplexAssetConfig) DataplexAsset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig">DataplexAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig">DataplexAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.putDiscoverySpec">PutDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.putResourceSpec">PutResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDiscoverySpec` <a name="PutDiscoverySpec" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putDiscoverySpec"></a>

```go
func PutDiscoverySpec(value DataplexAssetDiscoverySpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putDiscoverySpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec">DataplexAssetDiscoverySpec</a>

---

##### `PutResourceSpec` <a name="PutResourceSpec" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putResourceSpec"></a>

```go
func PutResourceSpec(value DataplexAssetResourceSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec">DataplexAssetResourceSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putTimeouts"></a>

```go
func PutTimeouts(value DataplexAssetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts">DataplexAssetTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

dataplexasset.DataplexAsset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

dataplexasset.DataplexAsset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

dataplexasset.DataplexAsset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.discoverySpec">DiscoverySpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference">DataplexAssetDiscoverySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.discoveryStatus">DiscoveryStatus</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList">DataplexAssetDiscoveryStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.resourceSpec">ResourceSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference">DataplexAssetResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.resourceStatus">ResourceStatus</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList">DataplexAssetResourceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.securityStatus">SecurityStatus</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList">DataplexAssetSecurityStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference">DataplexAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.dataplexZoneInput">DataplexZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.discoverySpecInput">DiscoverySpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec">DataplexAssetDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.lakeInput">LakeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.resourceSpecInput">ResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec">DataplexAssetResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.dataplexZone">DataplexZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.lake">Lake</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DiscoverySpec`<sup>Required</sup> <a name="DiscoverySpec" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.discoverySpec"></a>

```go
func DiscoverySpec() DataplexAssetDiscoverySpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference">DataplexAssetDiscoverySpecOutputReference</a>

---

##### `DiscoveryStatus`<sup>Required</sup> <a name="DiscoveryStatus" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.discoveryStatus"></a>

```go
func DiscoveryStatus() DataplexAssetDiscoveryStatusList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList">DataplexAssetDiscoveryStatusList</a>

---

##### `ResourceSpec`<sup>Required</sup> <a name="ResourceSpec" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.resourceSpec"></a>

```go
func ResourceSpec() DataplexAssetResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference">DataplexAssetResourceSpecOutputReference</a>

---

##### `ResourceStatus`<sup>Required</sup> <a name="ResourceStatus" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.resourceStatus"></a>

```go
func ResourceStatus() DataplexAssetResourceStatusList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList">DataplexAssetResourceStatusList</a>

---

##### `SecurityStatus`<sup>Required</sup> <a name="SecurityStatus" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.securityStatus"></a>

```go
func SecurityStatus() DataplexAssetSecurityStatusList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList">DataplexAssetSecurityStatusList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.timeouts"></a>

```go
func Timeouts() DataplexAssetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference">DataplexAssetTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DataplexZoneInput`<sup>Optional</sup> <a name="DataplexZoneInput" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.dataplexZoneInput"></a>

```go
func DataplexZoneInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiscoverySpecInput`<sup>Optional</sup> <a name="DiscoverySpecInput" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.discoverySpecInput"></a>

```go
func DiscoverySpecInput() DataplexAssetDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec">DataplexAssetDiscoverySpec</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LakeInput`<sup>Optional</sup> <a name="LakeInput" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.lakeInput"></a>

```go
func LakeInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ResourceSpecInput`<sup>Optional</sup> <a name="ResourceSpecInput" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.resourceSpecInput"></a>

```go
func ResourceSpecInput() DataplexAssetResourceSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec">DataplexAssetResourceSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataplexZone`<sup>Required</sup> <a name="DataplexZone" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.dataplexZone"></a>

```go
func DataplexZone() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Lake`<sup>Required</sup> <a name="Lake" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.lake"></a>

```go
func Lake() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexAssetConfig <a name="DataplexAssetConfig" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

&dataplexasset.DataplexAssetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataplexZone: *string,
	DiscoverySpec: github.com/cdktf/cdktf-provider-google-go/google.dataplexAsset.DataplexAssetDiscoverySpec,
	Lake: *string,
	Location: *string,
	Name: *string,
	ResourceSpec: github.com/cdktf/cdktf-provider-google-go/google.dataplexAsset.DataplexAssetResourceSpec,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dataplexAsset.DataplexAssetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.dataplexZone">DataplexZone</a></code> | <code>*string</code> | The zone for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.discoverySpec">DiscoverySpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec">DataplexAssetDiscoverySpec</a></code> | discovery_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.lake">Lake</a></code> | <code>*string</code> | The lake for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.name">Name</a></code> | <code>*string</code> | The name of the asset. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.resourceSpec">ResourceSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec">DataplexAssetResourceSpec</a></code> | resource_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.description">Description</a></code> | <code>*string</code> | Optional. Description of the asset. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Optional. User friendly display name. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#id DataplexAsset#id}. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. User defined labels for the asset. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.project">Project</a></code> | <code>*string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts">DataplexAssetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataplexZone`<sup>Required</sup> <a name="DataplexZone" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.dataplexZone"></a>

```go
DataplexZone *string
```

- *Type:* *string

The zone for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#dataplex_zone DataplexAsset#dataplex_zone}

---

##### `DiscoverySpec`<sup>Required</sup> <a name="DiscoverySpec" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.discoverySpec"></a>

```go
DiscoverySpec DataplexAssetDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec">DataplexAssetDiscoverySpec</a>

discovery_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#discovery_spec DataplexAsset#discovery_spec}

---

##### `Lake`<sup>Required</sup> <a name="Lake" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.lake"></a>

```go
Lake *string
```

- *Type:* *string

The lake for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#lake DataplexAsset#lake}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#location DataplexAsset#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the asset.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#name DataplexAsset#name}

---

##### `ResourceSpec`<sup>Required</sup> <a name="ResourceSpec" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.resourceSpec"></a>

```go
ResourceSpec DataplexAssetResourceSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec">DataplexAssetResourceSpec</a>

resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#resource_spec DataplexAsset#resource_spec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. Description of the asset.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#description DataplexAsset#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Optional. User friendly display name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#display_name DataplexAsset#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#id DataplexAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. User defined labels for the asset.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#labels DataplexAsset#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#project DataplexAsset#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.timeouts"></a>

```go
Timeouts DataplexAssetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts">DataplexAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#timeouts DataplexAsset#timeouts}

---

### DataplexAssetDiscoverySpec <a name="DataplexAssetDiscoverySpec" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

&dataplexasset.DataplexAssetDiscoverySpec {
	Enabled: interface{},
	CsvOptions: github.com/cdktf/cdktf-provider-google-go/google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions,
	ExcludePatterns: *[]*string,
	IncludePatterns: *[]*string,
	JsonOptions: github.com/cdktf/cdktf-provider-google-go/google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions,
	Schedule: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.enabled">Enabled</a></code> | <code>interface{}</code> | Required. Whether discovery is enabled. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions">DataplexAssetDiscoverySpecCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.excludePatterns">ExcludePatterns</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.includePatterns">IncludePatterns</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.jsonOptions">JsonOptions</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions">DataplexAssetDiscoverySpecJsonOptions</a></code> | json_options block. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.schedule">Schedule</a></code> | <code>*string</code> | Optional. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Required. Whether discovery is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#enabled DataplexAsset#enabled}

---

##### `CsvOptions`<sup>Optional</sup> <a name="CsvOptions" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.csvOptions"></a>

```go
CsvOptions DataplexAssetDiscoverySpecCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions">DataplexAssetDiscoverySpecCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#csv_options DataplexAsset#csv_options}

---

##### `ExcludePatterns`<sup>Optional</sup> <a name="ExcludePatterns" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.excludePatterns"></a>

```go
ExcludePatterns *[]*string
```

- *Type:* *[]*string

Optional.

The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#exclude_patterns DataplexAsset#exclude_patterns}

---

##### `IncludePatterns`<sup>Optional</sup> <a name="IncludePatterns" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.includePatterns"></a>

```go
IncludePatterns *[]*string
```

- *Type:* *[]*string

Optional.

The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#include_patterns DataplexAsset#include_patterns}

---

##### `JsonOptions`<sup>Optional</sup> <a name="JsonOptions" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.jsonOptions"></a>

```go
JsonOptions DataplexAssetDiscoverySpecJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions">DataplexAssetDiscoverySpecJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#json_options DataplexAsset#json_options}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Optional.

Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#schedule DataplexAsset#schedule}

---

### DataplexAssetDiscoverySpecCsvOptions <a name="DataplexAssetDiscoverySpecCsvOptions" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

&dataplexasset.DataplexAssetDiscoverySpecCsvOptions {
	Delimiter: *string,
	DisableTypeInference: interface{},
	Encoding: *string,
	HeaderRows: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.property.delimiter">Delimiter</a></code> | <code>*string</code> | Optional. The delimiter being used to separate values. This defaults to ','. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.property.disableTypeInference">DisableTypeInference</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.property.encoding">Encoding</a></code> | <code>*string</code> | Optional. The character encoding of the data. The default is UTF-8. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.property.headerRows">HeaderRows</a></code> | <code>*f64</code> | Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. |

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

Optional. The delimiter being used to separate values. This defaults to ','.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#delimiter DataplexAsset#delimiter}

---

##### `DisableTypeInference`<sup>Optional</sup> <a name="DisableTypeInference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.property.disableTypeInference"></a>

```go
DisableTypeInference interface{}
```

- *Type:* interface{}

Optional.

Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#disable_type_inference DataplexAsset#disable_type_inference}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#encoding DataplexAsset#encoding}

---

##### `HeaderRows`<sup>Optional</sup> <a name="HeaderRows" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.property.headerRows"></a>

```go
HeaderRows *f64
```

- *Type:* *f64

Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#header_rows DataplexAsset#header_rows}

---

### DataplexAssetDiscoverySpecJsonOptions <a name="DataplexAssetDiscoverySpecJsonOptions" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

&dataplexasset.DataplexAssetDiscoverySpecJsonOptions {
	DisableTypeInference: interface{},
	Encoding: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions.property.disableTypeInference">DisableTypeInference</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions.property.encoding">Encoding</a></code> | <code>*string</code> | Optional. The character encoding of the data. The default is UTF-8. |

---

##### `DisableTypeInference`<sup>Optional</sup> <a name="DisableTypeInference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions.property.disableTypeInference"></a>

```go
DisableTypeInference interface{}
```

- *Type:* interface{}

Optional.

Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#disable_type_inference DataplexAsset#disable_type_inference}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#encoding DataplexAsset#encoding}

---

### DataplexAssetDiscoveryStatus <a name="DataplexAssetDiscoveryStatus" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

&dataplexasset.DataplexAssetDiscoveryStatus {

}
```


### DataplexAssetDiscoveryStatusStats <a name="DataplexAssetDiscoveryStatusStats" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStats.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

&dataplexasset.DataplexAssetDiscoveryStatusStats {

}
```


### DataplexAssetResourceSpec <a name="DataplexAssetResourceSpec" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

&dataplexasset.DataplexAssetResourceSpec {
	Type: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec.property.type">Type</a></code> | <code>*string</code> | Required. Immutable. Type of resource. Possible values: STORAGE_BUCKET, BIGQUERY_DATASET. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec.property.name">Name</a></code> | <code>*string</code> | Immutable. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec.property.type"></a>

```go
Type *string
```

- *Type:* *string

Required. Immutable. Type of resource. Possible values: STORAGE_BUCKET, BIGQUERY_DATASET.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#type DataplexAsset#type}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec.property.name"></a>

```go
Name *string
```

- *Type:* *string

Immutable.

Relative name of the cloud resource that contains the data that is being managed within a lake. For example: `projects/{project_number}/buckets/{bucket_id}` `projects/{project_number}/datasets/{dataset_id}`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#name DataplexAsset#name}

---

### DataplexAssetResourceStatus <a name="DataplexAssetResourceStatus" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

&dataplexasset.DataplexAssetResourceStatus {

}
```


### DataplexAssetSecurityStatus <a name="DataplexAssetSecurityStatus" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

&dataplexasset.DataplexAssetSecurityStatus {

}
```


### DataplexAssetTimeouts <a name="DataplexAssetTimeouts" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

&dataplexasset.DataplexAssetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#create DataplexAsset#create}. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#delete DataplexAsset#delete}. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#update DataplexAsset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#create DataplexAsset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#delete DataplexAsset#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataplex_asset#update DataplexAsset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexAssetDiscoverySpecCsvOptionsOutputReference <a name="DataplexAssetDiscoverySpecCsvOptionsOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

dataplexasset.NewDataplexAssetDiscoverySpecCsvOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexAssetDiscoverySpecCsvOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resetDisableTypeInference">ResetDisableTypeInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resetHeaderRows">ResetHeaderRows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resetDelimiter"></a>

```go
func ResetDelimiter()
```

##### `ResetDisableTypeInference` <a name="ResetDisableTypeInference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resetDisableTypeInference"></a>

```go
func ResetDisableTypeInference()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetHeaderRows` <a name="ResetHeaderRows" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resetHeaderRows"></a>

```go
func ResetHeaderRows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.disableTypeInferenceInput">DisableTypeInferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.headerRowsInput">HeaderRowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.disableTypeInference">DisableTypeInference</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.headerRows">HeaderRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions">DataplexAssetDiscoverySpecCsvOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `DisableTypeInferenceInput`<sup>Optional</sup> <a name="DisableTypeInferenceInput" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.disableTypeInferenceInput"></a>

```go
func DisableTypeInferenceInput() interface{}
```

- *Type:* interface{}

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `HeaderRowsInput`<sup>Optional</sup> <a name="HeaderRowsInput" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.headerRowsInput"></a>

```go
func HeaderRowsInput() *f64
```

- *Type:* *f64

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `DisableTypeInference`<sup>Required</sup> <a name="DisableTypeInference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.disableTypeInference"></a>

```go
func DisableTypeInference() interface{}
```

- *Type:* interface{}

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `HeaderRows`<sup>Required</sup> <a name="HeaderRows" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.headerRows"></a>

```go
func HeaderRows() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexAssetDiscoverySpecCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions">DataplexAssetDiscoverySpecCsvOptions</a>

---


### DataplexAssetDiscoverySpecJsonOptionsOutputReference <a name="DataplexAssetDiscoverySpecJsonOptionsOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

dataplexasset.NewDataplexAssetDiscoverySpecJsonOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexAssetDiscoverySpecJsonOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.resetDisableTypeInference">ResetDisableTypeInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableTypeInference` <a name="ResetDisableTypeInference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.resetDisableTypeInference"></a>

```go
func ResetDisableTypeInference()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.disableTypeInferenceInput">DisableTypeInferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.disableTypeInference">DisableTypeInference</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions">DataplexAssetDiscoverySpecJsonOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableTypeInferenceInput`<sup>Optional</sup> <a name="DisableTypeInferenceInput" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.disableTypeInferenceInput"></a>

```go
func DisableTypeInferenceInput() interface{}
```

- *Type:* interface{}

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `DisableTypeInference`<sup>Required</sup> <a name="DisableTypeInference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.disableTypeInference"></a>

```go
func DisableTypeInference() interface{}
```

- *Type:* interface{}

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexAssetDiscoverySpecJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions">DataplexAssetDiscoverySpecJsonOptions</a>

---


### DataplexAssetDiscoverySpecOutputReference <a name="DataplexAssetDiscoverySpecOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

dataplexasset.NewDataplexAssetDiscoverySpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexAssetDiscoverySpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.putCsvOptions">PutCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.putJsonOptions">PutJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetCsvOptions">ResetCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetExcludePatterns">ResetExcludePatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetIncludePatterns">ResetIncludePatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetJsonOptions">ResetJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsvOptions` <a name="PutCsvOptions" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.putCsvOptions"></a>

```go
func PutCsvOptions(value DataplexAssetDiscoverySpecCsvOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.putCsvOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions">DataplexAssetDiscoverySpecCsvOptions</a>

---

##### `PutJsonOptions` <a name="PutJsonOptions" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.putJsonOptions"></a>

```go
func PutJsonOptions(value DataplexAssetDiscoverySpecJsonOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.putJsonOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions">DataplexAssetDiscoverySpecJsonOptions</a>

---

##### `ResetCsvOptions` <a name="ResetCsvOptions" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetCsvOptions"></a>

```go
func ResetCsvOptions()
```

##### `ResetExcludePatterns` <a name="ResetExcludePatterns" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetExcludePatterns"></a>

```go
func ResetExcludePatterns()
```

##### `ResetIncludePatterns` <a name="ResetIncludePatterns" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetIncludePatterns"></a>

```go
func ResetIncludePatterns()
```

##### `ResetJsonOptions` <a name="ResetJsonOptions" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetJsonOptions"></a>

```go
func ResetJsonOptions()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetSchedule"></a>

```go
func ResetSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference">DataplexAssetDiscoverySpecCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.jsonOptions">JsonOptions</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference">DataplexAssetDiscoverySpecJsonOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.csvOptionsInput">CsvOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions">DataplexAssetDiscoverySpecCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.excludePatternsInput">ExcludePatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.includePatternsInput">IncludePatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.jsonOptionsInput">JsonOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions">DataplexAssetDiscoverySpecJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.excludePatterns">ExcludePatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.includePatterns">IncludePatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec">DataplexAssetDiscoverySpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CsvOptions`<sup>Required</sup> <a name="CsvOptions" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.csvOptions"></a>

```go
func CsvOptions() DataplexAssetDiscoverySpecCsvOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference">DataplexAssetDiscoverySpecCsvOptionsOutputReference</a>

---

##### `JsonOptions`<sup>Required</sup> <a name="JsonOptions" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.jsonOptions"></a>

```go
func JsonOptions() DataplexAssetDiscoverySpecJsonOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference">DataplexAssetDiscoverySpecJsonOptionsOutputReference</a>

---

##### `CsvOptionsInput`<sup>Optional</sup> <a name="CsvOptionsInput" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.csvOptionsInput"></a>

```go
func CsvOptionsInput() DataplexAssetDiscoverySpecCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions">DataplexAssetDiscoverySpecCsvOptions</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludePatternsInput`<sup>Optional</sup> <a name="ExcludePatternsInput" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.excludePatternsInput"></a>

```go
func ExcludePatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludePatternsInput`<sup>Optional</sup> <a name="IncludePatternsInput" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.includePatternsInput"></a>

```go
func IncludePatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `JsonOptionsInput`<sup>Optional</sup> <a name="JsonOptionsInput" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.jsonOptionsInput"></a>

```go
func JsonOptionsInput() DataplexAssetDiscoverySpecJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions">DataplexAssetDiscoverySpecJsonOptions</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `ExcludePatterns`<sup>Required</sup> <a name="ExcludePatterns" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.excludePatterns"></a>

```go
func ExcludePatterns() *[]*string
```

- *Type:* *[]*string

---

##### `IncludePatterns`<sup>Required</sup> <a name="IncludePatterns" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.includePatterns"></a>

```go
func IncludePatterns() *[]*string
```

- *Type:* *[]*string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexAssetDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec">DataplexAssetDiscoverySpec</a>

---


### DataplexAssetDiscoveryStatusList <a name="DataplexAssetDiscoveryStatusList" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

dataplexasset.NewDataplexAssetDiscoveryStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexAssetDiscoveryStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.get"></a>

```go
func Get(index *f64) DataplexAssetDiscoveryStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexAssetDiscoveryStatusOutputReference <a name="DataplexAssetDiscoveryStatusOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

dataplexasset.NewDataplexAssetDiscoveryStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexAssetDiscoveryStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.lastRunDuration">LastRunDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.lastRunTime">LastRunTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.stats">Stats</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList">DataplexAssetDiscoveryStatusStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatus">DataplexAssetDiscoveryStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastRunDuration`<sup>Required</sup> <a name="LastRunDuration" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.lastRunDuration"></a>

```go
func LastRunDuration() *string
```

- *Type:* *string

---

##### `LastRunTime`<sup>Required</sup> <a name="LastRunTime" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.lastRunTime"></a>

```go
func LastRunTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Stats`<sup>Required</sup> <a name="Stats" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.stats"></a>

```go
func Stats() DataplexAssetDiscoveryStatusStatsList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList">DataplexAssetDiscoveryStatusStatsList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexAssetDiscoveryStatus
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatus">DataplexAssetDiscoveryStatus</a>

---


### DataplexAssetDiscoveryStatusStatsList <a name="DataplexAssetDiscoveryStatusStatsList" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

dataplexasset.NewDataplexAssetDiscoveryStatusStatsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexAssetDiscoveryStatusStatsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.get"></a>

```go
func Get(index *f64) DataplexAssetDiscoveryStatusStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexAssetDiscoveryStatusStatsOutputReference <a name="DataplexAssetDiscoveryStatusStatsOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

dataplexasset.NewDataplexAssetDiscoveryStatusStatsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexAssetDiscoveryStatusStatsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.dataItems">DataItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.dataSize">DataSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.filesets">Filesets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.tables">Tables</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStats">DataplexAssetDiscoveryStatusStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataItems`<sup>Required</sup> <a name="DataItems" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.dataItems"></a>

```go
func DataItems() *f64
```

- *Type:* *f64

---

##### `DataSize`<sup>Required</sup> <a name="DataSize" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.dataSize"></a>

```go
func DataSize() *f64
```

- *Type:* *f64

---

##### `Filesets`<sup>Required</sup> <a name="Filesets" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.filesets"></a>

```go
func Filesets() *f64
```

- *Type:* *f64

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.tables"></a>

```go
func Tables() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexAssetDiscoveryStatusStats
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStats">DataplexAssetDiscoveryStatusStats</a>

---


### DataplexAssetResourceSpecOutputReference <a name="DataplexAssetResourceSpecOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

dataplexasset.NewDataplexAssetResourceSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexAssetResourceSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec">DataplexAssetResourceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexAssetResourceSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec">DataplexAssetResourceSpec</a>

---


### DataplexAssetResourceStatusList <a name="DataplexAssetResourceStatusList" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

dataplexasset.NewDataplexAssetResourceStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexAssetResourceStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.get"></a>

```go
func Get(index *f64) DataplexAssetResourceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexAssetResourceStatusOutputReference <a name="DataplexAssetResourceStatusOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

dataplexasset.NewDataplexAssetResourceStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexAssetResourceStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatus">DataplexAssetResourceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexAssetResourceStatus
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatus">DataplexAssetResourceStatus</a>

---


### DataplexAssetSecurityStatusList <a name="DataplexAssetSecurityStatusList" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

dataplexasset.NewDataplexAssetSecurityStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexAssetSecurityStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.get"></a>

```go
func Get(index *f64) DataplexAssetSecurityStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexAssetSecurityStatusOutputReference <a name="DataplexAssetSecurityStatusOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

dataplexasset.NewDataplexAssetSecurityStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexAssetSecurityStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatus">DataplexAssetSecurityStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexAssetSecurityStatus
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatus">DataplexAssetSecurityStatus</a>

---


### DataplexAssetTimeoutsOutputReference <a name="DataplexAssetTimeoutsOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataplexasset"

dataplexasset.NewDataplexAssetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexAssetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




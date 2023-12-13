# `dataGoogleVmwareengineNetworkPeering` Submodule <a name="`dataGoogleVmwareengineNetworkPeering` Submodule" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineNetworkPeering <a name="DataGoogleVmwareengineNetworkPeering" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/data-sources/vmwareengine_network_peering google_vmwareengine_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglevmwareenginenetworkpeering"

datagooglevmwareenginenetworkpeering.NewDataGoogleVmwareengineNetworkPeering(scope Construct, id *string, config DataGoogleVmwareengineNetworkPeeringConfig) DataGoogleVmwareengineNetworkPeering
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig">DataGoogleVmwareengineNetworkPeeringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig">DataGoogleVmwareengineNetworkPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVmwareengineNetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglevmwareenginenetworkpeering"

datagooglevmwareenginenetworkpeering.DataGoogleVmwareengineNetworkPeering_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglevmwareenginenetworkpeering"

datagooglevmwareenginenetworkpeering.DataGoogleVmwareengineNetworkPeering_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglevmwareenginenetworkpeering"

datagooglevmwareenginenetworkpeering.DataGoogleVmwareengineNetworkPeering_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglevmwareenginenetworkpeering"

datagooglevmwareenginenetworkpeering.DataGoogleVmwareengineNetworkPeering_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleVmwareengineNetworkPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleVmwareengineNetworkPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleVmwareengineNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/data-sources/vmwareengine_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.exportCustomRoutes">ExportCustomRoutes</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIp">ExportCustomRoutesWithPublicIp</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.importCustomRoutes">ImportCustomRoutes</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.importCustomRoutesWithPublicIp">ImportCustomRoutesWithPublicIp</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.peerNetwork">PeerNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.peerNetworkType">PeerNetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.stateDetails">StateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.vmwareEngineNetwork">VmwareEngineNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.vmwareEngineNetworkCanonical">VmwareEngineNetworkCanonical</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExportCustomRoutes`<sup>Required</sup> <a name="ExportCustomRoutes" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.exportCustomRoutes"></a>

```go
func ExportCustomRoutes() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExportCustomRoutesWithPublicIp`<sup>Required</sup> <a name="ExportCustomRoutesWithPublicIp" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIp"></a>

```go
func ExportCustomRoutesWithPublicIp() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ImportCustomRoutes`<sup>Required</sup> <a name="ImportCustomRoutes" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.importCustomRoutes"></a>

```go
func ImportCustomRoutes() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ImportCustomRoutesWithPublicIp`<sup>Required</sup> <a name="ImportCustomRoutesWithPublicIp" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.importCustomRoutesWithPublicIp"></a>

```go
func ImportCustomRoutesWithPublicIp() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PeerNetwork`<sup>Required</sup> <a name="PeerNetwork" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.peerNetwork"></a>

```go
func PeerNetwork() *string
```

- *Type:* *string

---

##### `PeerNetworkType`<sup>Required</sup> <a name="PeerNetworkType" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.peerNetworkType"></a>

```go
func PeerNetworkType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.stateDetails"></a>

```go
func StateDetails() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `VmwareEngineNetwork`<sup>Required</sup> <a name="VmwareEngineNetwork" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.vmwareEngineNetwork"></a>

```go
func VmwareEngineNetwork() *string
```

- *Type:* *string

---

##### `VmwareEngineNetworkCanonical`<sup>Required</sup> <a name="VmwareEngineNetworkCanonical" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.vmwareEngineNetworkCanonical"></a>

```go
func VmwareEngineNetworkCanonical() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineNetworkPeeringConfig <a name="DataGoogleVmwareengineNetworkPeeringConfig" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglevmwareenginenetworkpeering"

&datagooglevmwareenginenetworkpeering.DataGoogleVmwareengineNetworkPeeringConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.name">Name</a></code> | <code>*string</code> | The ID of the Network Peering. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/data-sources/vmwareengine_network_peering#id DataGoogleVmwareengineNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/data-sources/vmwareengine_network_peering#project DataGoogleVmwareengineNetworkPeering#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The ID of the Network Peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/data-sources/vmwareengine_network_peering#name DataGoogleVmwareengineNetworkPeering#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/data-sources/vmwareengine_network_peering#id DataGoogleVmwareengineNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/data-sources/vmwareengine_network_peering#project DataGoogleVmwareengineNetworkPeering#project}.

---




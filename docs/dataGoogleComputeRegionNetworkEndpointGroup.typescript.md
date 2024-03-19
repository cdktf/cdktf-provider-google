# `dataGoogleComputeRegionNetworkEndpointGroup` Submodule <a name="`dataGoogleComputeRegionNetworkEndpointGroup` Submodule" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionNetworkEndpointGroup <a name="DataGoogleComputeRegionNetworkEndpointGroup" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/compute_region_network_endpoint_group google_compute_region_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer"></a>

```typescript
import { dataGoogleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

new dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup(scope: Construct, id: string, config?: DataGoogleComputeRegionNetworkEndpointGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig">DataGoogleComputeRegionNetworkEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig">DataGoogleComputeRegionNetworkEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetSelfLink">resetSelfLink</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSelfLink` <a name="resetSelfLink" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetSelfLink"></a>

```typescript
public resetSelfLink(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeRegionNetworkEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isConstruct"></a>

```typescript
import { dataGoogleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformElement"></a>

```typescript
import { dataGoogleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleComputeRegionNetworkEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeRegionNetworkEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeRegionNetworkEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/compute_region_network_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRegionNetworkEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.appEngine">appEngine</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList">DataGoogleComputeRegionNetworkEndpointGroupAppEngineList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cloudFunction">cloudFunction</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList">DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cloudRun">cloudRun</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList">DataGoogleComputeRegionNetworkEndpointGroupCloudRunList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.networkEndpointType">networkEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.pscTargetService">pscTargetService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.selfLinkInput">selfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `appEngine`<sup>Required</sup> <a name="appEngine" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.appEngine"></a>

```typescript
public readonly appEngine: DataGoogleComputeRegionNetworkEndpointGroupAppEngineList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList">DataGoogleComputeRegionNetworkEndpointGroupAppEngineList</a>

---

##### `cloudFunction`<sup>Required</sup> <a name="cloudFunction" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cloudFunction"></a>

```typescript
public readonly cloudFunction: DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList">DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList</a>

---

##### `cloudRun`<sup>Required</sup> <a name="cloudRun" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cloudRun"></a>

```typescript
public readonly cloudRun: DataGoogleComputeRegionNetworkEndpointGroupCloudRunList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList">DataGoogleComputeRegionNetworkEndpointGroupCloudRunList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.networkEndpointType"></a>

```typescript
public readonly networkEndpointType: string;
```

- *Type:* string

---

##### `pscTargetService`<sup>Required</sup> <a name="pscTargetService" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.pscTargetService"></a>

```typescript
public readonly pscTargetService: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `selfLinkInput`<sup>Optional</sup> <a name="selfLinkInput" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.selfLinkInput"></a>

```typescript
public readonly selfLinkInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionNetworkEndpointGroupAppEngine <a name="DataGoogleComputeRegionNetworkEndpointGroupAppEngine" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngine.Initializer"></a>

```typescript
import { dataGoogleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

const dataGoogleComputeRegionNetworkEndpointGroupAppEngine: dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngine = { ... }
```


### DataGoogleComputeRegionNetworkEndpointGroupCloudFunction <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudFunction" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunction.Initializer"></a>

```typescript
import { dataGoogleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

const dataGoogleComputeRegionNetworkEndpointGroupCloudFunction: dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunction = { ... }
```


### DataGoogleComputeRegionNetworkEndpointGroupCloudRun <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudRun" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRun.Initializer"></a>

```typescript
import { dataGoogleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

const dataGoogleComputeRegionNetworkEndpointGroupCloudRun: dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRun = { ... }
```


### DataGoogleComputeRegionNetworkEndpointGroupConfig <a name="DataGoogleComputeRegionNetworkEndpointGroupConfig" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.Initializer"></a>

```typescript
import { dataGoogleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

const dataGoogleComputeRegionNetworkEndpointGroupConfig: dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/compute_region_network_endpoint_group#id DataGoogleComputeRegionNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.name">name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/compute_region_network_endpoint_group#project DataGoogleComputeRegionNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.region">region</a></code> | <code>string</code> | A reference to the region where the regional NEGs reside. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.selfLink">selfLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/compute_region_network_endpoint_group#self_link DataGoogleComputeRegionNetworkEndpointGroup#self_link}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/compute_region_network_endpoint_group#id DataGoogleComputeRegionNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/compute_region_network_endpoint_group#name DataGoogleComputeRegionNetworkEndpointGroup#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/compute_region_network_endpoint_group#project DataGoogleComputeRegionNetworkEndpointGroup#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

A reference to the region where the regional NEGs reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/compute_region_network_endpoint_group#region DataGoogleComputeRegionNetworkEndpointGroup#region}

---

##### `selfLink`<sup>Optional</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/compute_region_network_endpoint_group#self_link DataGoogleComputeRegionNetworkEndpointGroup#self_link}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRegionNetworkEndpointGroupAppEngineList <a name="DataGoogleComputeRegionNetworkEndpointGroupAppEngineList" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

new dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference <a name="DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

new dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask">urlMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngine">DataGoogleComputeRegionNetworkEndpointGroupAppEngine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `urlMask`<sup>Required</sup> <a name="urlMask" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask"></a>

```typescript
public readonly urlMask: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionNetworkEndpointGroupAppEngine;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngine">DataGoogleComputeRegionNetworkEndpointGroupAppEngine</a>

---


### DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

new dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

new dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function">function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask">urlMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunction">DataGoogleComputeRegionNetworkEndpointGroupCloudFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

---

##### `urlMask`<sup>Required</sup> <a name="urlMask" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask"></a>

```typescript
public readonly urlMask: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionNetworkEndpointGroupCloudFunction;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunction">DataGoogleComputeRegionNetworkEndpointGroupCloudFunction</a>

---


### DataGoogleComputeRegionNetworkEndpointGroupCloudRunList <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudRunList" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

new dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

new dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask">urlMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRun">DataGoogleComputeRegionNetworkEndpointGroupCloudRun</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `urlMask`<sup>Required</sup> <a name="urlMask" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask"></a>

```typescript
public readonly urlMask: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionNetworkEndpointGroupCloudRun;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRun">DataGoogleComputeRegionNetworkEndpointGroupCloudRun</a>

---




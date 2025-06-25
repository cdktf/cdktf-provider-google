# `dataGoogleComputeRegionInstanceGroup` Submodule <a name="`dataGoogleComputeRegionInstanceGroup` Submodule" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionInstanceGroup <a name="DataGoogleComputeRegionInstanceGroup" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/compute_region_instance_group google_compute_region_instance_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroup } from '@cdktf/provider-google'

new dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup(scope: Construct, id: string, config?: DataGoogleComputeRegionInstanceGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig">DataGoogleComputeRegionInstanceGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig">DataGoogleComputeRegionInstanceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetSelfLink">resetSelfLink</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSelfLink` <a name="resetSelfLink" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetSelfLink"></a>

```typescript
public resetSelfLink(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeRegionInstanceGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isConstruct"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroup } from '@cdktf/provider-google'

dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformElement"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroup } from '@cdktf/provider-google'

dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroup } from '@cdktf/provider-google'

dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroup } from '@cdktf/provider-google'

dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleComputeRegionInstanceGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeRegionInstanceGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeRegionInstanceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/compute_region_instance_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRegionInstanceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList">DataGoogleComputeRegionInstanceGroupInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.selfLinkInput">selfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.instances"></a>

```typescript
public readonly instances: DataGoogleComputeRegionInstanceGroupInstancesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList">DataGoogleComputeRegionInstanceGroupInstancesList</a>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `selfLinkInput`<sup>Optional</sup> <a name="selfLinkInput" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.selfLinkInput"></a>

```typescript
public readonly selfLinkInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionInstanceGroupConfig <a name="DataGoogleComputeRegionInstanceGroupConfig" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroup } from '@cdktf/provider-google'

const dataGoogleComputeRegionInstanceGroupConfig: dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/compute_region_instance_group#id DataGoogleComputeRegionInstanceGroup#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/compute_region_instance_group#name DataGoogleComputeRegionInstanceGroup#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/compute_region_instance_group#project DataGoogleComputeRegionInstanceGroup#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/compute_region_instance_group#region DataGoogleComputeRegionInstanceGroup#region}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.selfLink">selfLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/compute_region_instance_group#self_link DataGoogleComputeRegionInstanceGroup#self_link}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/compute_region_instance_group#id DataGoogleComputeRegionInstanceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/compute_region_instance_group#name DataGoogleComputeRegionInstanceGroup#name}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/compute_region_instance_group#project DataGoogleComputeRegionInstanceGroup#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/compute_region_instance_group#region DataGoogleComputeRegionInstanceGroup#region}.

---

##### `selfLink`<sup>Optional</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/compute_region_instance_group#self_link DataGoogleComputeRegionInstanceGroup#self_link}.

---

### DataGoogleComputeRegionInstanceGroupInstances <a name="DataGoogleComputeRegionInstanceGroupInstances" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstances.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroup } from '@cdktf/provider-google'

const dataGoogleComputeRegionInstanceGroupInstances: dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstances = { ... }
```


### DataGoogleComputeRegionInstanceGroupInstancesNamedPorts <a name="DataGoogleComputeRegionInstanceGroupInstancesNamedPorts" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPorts.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroup } from '@cdktf/provider-google'

const dataGoogleComputeRegionInstanceGroupInstancesNamedPorts: dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPorts = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRegionInstanceGroupInstancesList <a name="DataGoogleComputeRegionInstanceGroupInstancesList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroup } from '@cdktf/provider-google'

new dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList <a name="DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroup } from '@cdktf/provider-google'

new dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference <a name="DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroup } from '@cdktf/provider-google'

new dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPorts">DataGoogleComputeRegionInstanceGroupInstancesNamedPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupInstancesNamedPorts;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPorts">DataGoogleComputeRegionInstanceGroupInstancesNamedPorts</a>

---


### DataGoogleComputeRegionInstanceGroupInstancesOutputReference <a name="DataGoogleComputeRegionInstanceGroupInstancesOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroup } from '@cdktf/provider-google'

new dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.namedPorts">namedPorts</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList">DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstances">DataGoogleComputeRegionInstanceGroupInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `namedPorts`<sup>Required</sup> <a name="namedPorts" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.namedPorts"></a>

```typescript
public readonly namedPorts: DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList">DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupInstances;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstances">DataGoogleComputeRegionInstanceGroupInstances</a>

---




# `dataGoogleContainerRegistryImage` Submodule <a name="`dataGoogleContainerRegistryImage` Submodule" id="@cdktf/provider-google.dataGoogleContainerRegistryImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleContainerRegistryImage <a name="DataGoogleContainerRegistryImage" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/container_registry_image google_container_registry_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.Initializer"></a>

```typescript
import { dataGoogleContainerRegistryImage } from '@cdktf/provider-google'

new dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage(scope: Construct, id: string, config: DataGoogleContainerRegistryImageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig">DataGoogleContainerRegistryImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig">DataGoogleContainerRegistryImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.resetDigest">resetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.resetTag">resetTag</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDigest` <a name="resetDigest" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.resetDigest"></a>

```typescript
public resetDigest(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.resetTag"></a>

```typescript
public resetTag(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleContainerRegistryImage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.isConstruct"></a>

```typescript
import { dataGoogleContainerRegistryImage } from '@cdktf/provider-google'

dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.isTerraformElement"></a>

```typescript
import { dataGoogleContainerRegistryImage } from '@cdktf/provider-google'

dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.isTerraformDataSource"></a>

```typescript
import { dataGoogleContainerRegistryImage } from '@cdktf/provider-google'

dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.generateConfigForImport"></a>

```typescript
import { dataGoogleContainerRegistryImage } from '@cdktf/provider-google'

dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleContainerRegistryImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleContainerRegistryImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleContainerRegistryImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/container_registry_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleContainerRegistryImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.imageUrl">imageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.digestInput">digestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.digest">digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.tag">tag</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

---

##### `digestInput`<sup>Optional</sup> <a name="digestInput" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.digestInput"></a>

```typescript
public readonly digestInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleContainerRegistryImageConfig <a name="DataGoogleContainerRegistryImageConfig" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.Initializer"></a>

```typescript
import { dataGoogleContainerRegistryImage } from '@cdktf/provider-google'

const dataGoogleContainerRegistryImageConfig: dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/container_registry_image#name DataGoogleContainerRegistryImage#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.digest">digest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/container_registry_image#digest DataGoogleContainerRegistryImage#digest}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/container_registry_image#id DataGoogleContainerRegistryImage#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/container_registry_image#project DataGoogleContainerRegistryImage#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/container_registry_image#region DataGoogleContainerRegistryImage#region}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.tag">tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/container_registry_image#tag DataGoogleContainerRegistryImage#tag}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/container_registry_image#name DataGoogleContainerRegistryImage#name}.

---

##### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/container_registry_image#digest DataGoogleContainerRegistryImage#digest}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/container_registry_image#id DataGoogleContainerRegistryImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/container_registry_image#project DataGoogleContainerRegistryImage#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/container_registry_image#region DataGoogleContainerRegistryImage#region}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.dataGoogleContainerRegistryImage.DataGoogleContainerRegistryImageConfig.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/container_registry_image#tag DataGoogleContainerRegistryImage#tag}.

---




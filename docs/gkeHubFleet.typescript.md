# `gkeHubFleet` Submodule <a name="`gkeHubFleet` Submodule" id="@cdktf/provider-google.gkeHubFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubFleet <a name="GkeHubFleet" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet google_gke_hub_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

new gkeHubFleet.GkeHubFleet(scope: Construct, id: string, config?: GkeHubFleetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig">GkeHubFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig">GkeHubFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.putDefaultClusterConfig">putDefaultClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetDefaultClusterConfig">resetDefaultClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultClusterConfig` <a name="putDefaultClusterConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.putDefaultClusterConfig"></a>

```typescript
public putDefaultClusterConfig(value: GkeHubFleetDefaultClusterConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.putDefaultClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig">GkeHubFleetDefaultClusterConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.putTimeouts"></a>

```typescript
public putTimeouts(value: GkeHubFleetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts">GkeHubFleetTimeouts</a>

---

##### `resetDefaultClusterConfig` <a name="resetDefaultClusterConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetDefaultClusterConfig"></a>

```typescript
public resetDefaultClusterConfig(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GkeHubFleet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isConstruct"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

gkeHubFleet.GkeHubFleet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isTerraformElement"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

gkeHubFleet.GkeHubFleet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isTerraformResource"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

gkeHubFleet.GkeHubFleet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.generateConfigForImport"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

gkeHubFleet.GkeHubFleet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GkeHubFleet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GkeHubFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GkeHubFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GkeHubFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.defaultClusterConfig">defaultClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference">GkeHubFleetDefaultClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.state">state</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList">GkeHubFleetStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference">GkeHubFleetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.defaultClusterConfigInput">defaultClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig">GkeHubFleetDefaultClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts">GkeHubFleetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `defaultClusterConfig`<sup>Required</sup> <a name="defaultClusterConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.defaultClusterConfig"></a>

```typescript
public readonly defaultClusterConfig: GkeHubFleetDefaultClusterConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference">GkeHubFleetDefaultClusterConfigOutputReference</a>

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.state"></a>

```typescript
public readonly state: GkeHubFleetStateList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList">GkeHubFleetStateList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.timeouts"></a>

```typescript
public readonly timeouts: GkeHubFleetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference">GkeHubFleetTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `defaultClusterConfigInput`<sup>Optional</sup> <a name="defaultClusterConfigInput" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.defaultClusterConfigInput"></a>

```typescript
public readonly defaultClusterConfigInput: GkeHubFleetDefaultClusterConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig">GkeHubFleetDefaultClusterConfig</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GkeHubFleetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts">GkeHubFleetTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubFleetConfig <a name="GkeHubFleetConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.Initializer"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

const gkeHubFleetConfig: gkeHubFleet.GkeHubFleetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.defaultClusterConfig">defaultClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig">GkeHubFleetDefaultClusterConfig</a></code> | default_cluster_config block. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.displayName">displayName</a></code> | <code>string</code> | A user-assigned display name of the Fleet. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#id GkeHubFleet#id}. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#project GkeHubFleet#project}. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts">GkeHubFleetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultClusterConfig`<sup>Optional</sup> <a name="defaultClusterConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.defaultClusterConfig"></a>

```typescript
public readonly defaultClusterConfig: GkeHubFleetDefaultClusterConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig">GkeHubFleetDefaultClusterConfig</a>

default_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#default_cluster_config GkeHubFleet#default_cluster_config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A user-assigned display name of the Fleet.

When present, it must be between 4 to 30 characters.
Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#display_name GkeHubFleet#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#id GkeHubFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#project GkeHubFleet#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GkeHubFleetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts">GkeHubFleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#timeouts GkeHubFleet#timeouts}

---

### GkeHubFleetDefaultClusterConfig <a name="GkeHubFleetDefaultClusterConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig.Initializer"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

const gkeHubFleetDefaultClusterConfig: gkeHubFleet.GkeHubFleetDefaultClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig.property.binaryAuthorizationConfig">binaryAuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a></code> | binary_authorization_config block. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig.property.securityPostureConfig">securityPostureConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig">GkeHubFleetDefaultClusterConfigSecurityPostureConfig</a></code> | security_posture_config block. |

---

##### `binaryAuthorizationConfig`<sup>Optional</sup> <a name="binaryAuthorizationConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig.property.binaryAuthorizationConfig"></a>

```typescript
public readonly binaryAuthorizationConfig: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a>

binary_authorization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#binary_authorization_config GkeHubFleet#binary_authorization_config}

---

##### `securityPostureConfig`<sup>Optional</sup> <a name="securityPostureConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig.property.securityPostureConfig"></a>

```typescript
public readonly securityPostureConfig: GkeHubFleetDefaultClusterConfigSecurityPostureConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig">GkeHubFleetDefaultClusterConfigSecurityPostureConfig</a>

security_posture_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#security_posture_config GkeHubFleet#security_posture_config}

---

### GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig <a name="GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.Initializer"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

const gkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig: gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | Mode of operation for binauthz policy evaluation. Possible values: ["DISABLED", "POLICY_BINDINGS"]. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.property.policyBindings">policyBindings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>[]</code> | policy_bindings block. |

---

##### `evaluationMode`<sup>Optional</sup> <a name="evaluationMode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

Mode of operation for binauthz policy evaluation. Possible values: ["DISABLED", "POLICY_BINDINGS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#evaluation_mode GkeHubFleet#evaluation_mode}

---

##### `policyBindings`<sup>Optional</sup> <a name="policyBindings" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.property.policyBindings"></a>

```typescript
public readonly policyBindings: IResolvable | GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>[]

policy_bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#policy_bindings GkeHubFleet#policy_bindings}

---

### GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings <a name="GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings.Initializer"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

const gkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings: gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings.property.name">name</a></code> | <code>string</code> | The relative resource name of the binauthz platform policy to audit. GKE platform policies have the following format: 'projects/{project_number}/platforms/gke/policies/{policy_id}'. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The relative resource name of the binauthz platform policy to audit. GKE platform policies have the following format: 'projects/{project_number}/platforms/gke/policies/{policy_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#name GkeHubFleet#name}

---

### GkeHubFleetDefaultClusterConfigSecurityPostureConfig <a name="GkeHubFleetDefaultClusterConfigSecurityPostureConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig.Initializer"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

const gkeHubFleetDefaultClusterConfigSecurityPostureConfig: gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig.property.mode">mode</a></code> | <code>string</code> | Sets which mode to use for Security Posture features. Possible values: ["DISABLED", "BASIC", "ENTERPRISE"]. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig.property.vulnerabilityMode">vulnerabilityMode</a></code> | <code>string</code> | Sets which mode to use for vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_BASIC", "VULNERABILITY_ENTERPRISE"]. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Sets which mode to use for Security Posture features. Possible values: ["DISABLED", "BASIC", "ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#mode GkeHubFleet#mode}

---

##### `vulnerabilityMode`<sup>Optional</sup> <a name="vulnerabilityMode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig.property.vulnerabilityMode"></a>

```typescript
public readonly vulnerabilityMode: string;
```

- *Type:* string

Sets which mode to use for vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_BASIC", "VULNERABILITY_ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#vulnerability_mode GkeHubFleet#vulnerability_mode}

---

### GkeHubFleetState <a name="GkeHubFleetState" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetState.Initializer"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

const gkeHubFleetState: gkeHubFleet.GkeHubFleetState = { ... }
```


### GkeHubFleetTimeouts <a name="GkeHubFleetTimeouts" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts.Initializer"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

const gkeHubFleetTimeouts: gkeHubFleet.GkeHubFleetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#create GkeHubFleet#create}. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#delete GkeHubFleet#delete}. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#update GkeHubFleet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#create GkeHubFleet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#delete GkeHubFleet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/gke_hub_fleet#update GkeHubFleet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference <a name="GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

new gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.putPolicyBindings">putPolicyBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resetEvaluationMode">resetEvaluationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resetPolicyBindings">resetPolicyBindings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicyBindings` <a name="putPolicyBindings" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.putPolicyBindings"></a>

```typescript
public putPolicyBindings(value: IResolvable | GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.putPolicyBindings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>[]

---

##### `resetEvaluationMode` <a name="resetEvaluationMode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resetEvaluationMode"></a>

```typescript
public resetEvaluationMode(): void
```

##### `resetPolicyBindings` <a name="resetPolicyBindings" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resetPolicyBindings"></a>

```typescript
public resetPolicyBindings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.policyBindings">policyBindings</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.evaluationModeInput">evaluationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.policyBindingsInput">policyBindingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyBindings`<sup>Required</sup> <a name="policyBindings" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.policyBindings"></a>

```typescript
public readonly policyBindings: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList</a>

---

##### `evaluationModeInput`<sup>Optional</sup> <a name="evaluationModeInput" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.evaluationModeInput"></a>

```typescript
public readonly evaluationModeInput: string;
```

- *Type:* string

---

##### `policyBindingsInput`<sup>Optional</sup> <a name="policyBindingsInput" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.policyBindingsInput"></a>

```typescript
public readonly policyBindingsInput: IResolvable | GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>[]

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a>

---


### GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList <a name="GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

new gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.get"></a>

```typescript
public get(index: number): GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>[]

---


### GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference <a name="GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

new gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>

---


### GkeHubFleetDefaultClusterConfigOutputReference <a name="GkeHubFleetDefaultClusterConfigOutputReference" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.Initializer"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

new gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.putBinaryAuthorizationConfig">putBinaryAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.putSecurityPostureConfig">putSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.resetBinaryAuthorizationConfig">resetBinaryAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.resetSecurityPostureConfig">resetSecurityPostureConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBinaryAuthorizationConfig` <a name="putBinaryAuthorizationConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.putBinaryAuthorizationConfig"></a>

```typescript
public putBinaryAuthorizationConfig(value: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.putBinaryAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a>

---

##### `putSecurityPostureConfig` <a name="putSecurityPostureConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.putSecurityPostureConfig"></a>

```typescript
public putSecurityPostureConfig(value: GkeHubFleetDefaultClusterConfigSecurityPostureConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.putSecurityPostureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig">GkeHubFleetDefaultClusterConfigSecurityPostureConfig</a>

---

##### `resetBinaryAuthorizationConfig` <a name="resetBinaryAuthorizationConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.resetBinaryAuthorizationConfig"></a>

```typescript
public resetBinaryAuthorizationConfig(): void
```

##### `resetSecurityPostureConfig` <a name="resetSecurityPostureConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.resetSecurityPostureConfig"></a>

```typescript
public resetSecurityPostureConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.binaryAuthorizationConfig">binaryAuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.securityPostureConfig">securityPostureConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference">GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.binaryAuthorizationConfigInput">binaryAuthorizationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.securityPostureConfigInput">securityPostureConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig">GkeHubFleetDefaultClusterConfigSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig">GkeHubFleetDefaultClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binaryAuthorizationConfig`<sup>Required</sup> <a name="binaryAuthorizationConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.binaryAuthorizationConfig"></a>

```typescript
public readonly binaryAuthorizationConfig: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference</a>

---

##### `securityPostureConfig`<sup>Required</sup> <a name="securityPostureConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.securityPostureConfig"></a>

```typescript
public readonly securityPostureConfig: GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference">GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference</a>

---

##### `binaryAuthorizationConfigInput`<sup>Optional</sup> <a name="binaryAuthorizationConfigInput" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.binaryAuthorizationConfigInput"></a>

```typescript
public readonly binaryAuthorizationConfigInput: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a>

---

##### `securityPostureConfigInput`<sup>Optional</sup> <a name="securityPostureConfigInput" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.securityPostureConfigInput"></a>

```typescript
public readonly securityPostureConfigInput: GkeHubFleetDefaultClusterConfigSecurityPostureConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig">GkeHubFleetDefaultClusterConfigSecurityPostureConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFleetDefaultClusterConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig">GkeHubFleetDefaultClusterConfig</a>

---


### GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference <a name="GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

new gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resetVulnerabilityMode">resetVulnerabilityMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetVulnerabilityMode` <a name="resetVulnerabilityMode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resetVulnerabilityMode"></a>

```typescript
public resetVulnerabilityMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.vulnerabilityModeInput">vulnerabilityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.vulnerabilityMode">vulnerabilityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig">GkeHubFleetDefaultClusterConfigSecurityPostureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `vulnerabilityModeInput`<sup>Optional</sup> <a name="vulnerabilityModeInput" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.vulnerabilityModeInput"></a>

```typescript
public readonly vulnerabilityModeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `vulnerabilityMode`<sup>Required</sup> <a name="vulnerabilityMode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.vulnerabilityMode"></a>

```typescript
public readonly vulnerabilityMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFleetDefaultClusterConfigSecurityPostureConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig">GkeHubFleetDefaultClusterConfigSecurityPostureConfig</a>

---


### GkeHubFleetStateList <a name="GkeHubFleetStateList" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.Initializer"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

new gkeHubFleet.GkeHubFleetStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.get"></a>

```typescript
public get(index: number): GkeHubFleetStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeHubFleetStateOutputReference <a name="GkeHubFleetStateOutputReference" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

new gkeHubFleet.GkeHubFleetStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetState">GkeHubFleetState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFleetState;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetState">GkeHubFleetState</a>

---


### GkeHubFleetTimeoutsOutputReference <a name="GkeHubFleetTimeoutsOutputReference" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.Initializer"></a>

```typescript
import { gkeHubFleet } from '@cdktf/provider-google'

new gkeHubFleet.GkeHubFleetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts">GkeHubFleetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeHubFleetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts">GkeHubFleetTimeouts</a>

---




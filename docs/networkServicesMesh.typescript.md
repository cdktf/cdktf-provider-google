# `networkServicesMesh` Submodule <a name="`networkServicesMesh` Submodule" id="@cdktf/provider-google.networkServicesMesh"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMesh <a name="NetworkServicesMesh" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh google_network_services_mesh}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.Initializer"></a>

```typescript
import { networkServicesMesh } from '@cdktf/provider-google'

new networkServicesMesh.NetworkServicesMesh(scope: Construct, id: string, config: NetworkServicesMeshConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig">NetworkServicesMeshConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig">NetworkServicesMeshConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetInterceptionPort">resetInterceptionPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkServicesMeshTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts">NetworkServicesMeshTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterceptionPort` <a name="resetInterceptionPort" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetInterceptionPort"></a>

```typescript
public resetInterceptionPort(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkServicesMesh resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isConstruct"></a>

```typescript
import { networkServicesMesh } from '@cdktf/provider-google'

networkServicesMesh.NetworkServicesMesh.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isTerraformElement"></a>

```typescript
import { networkServicesMesh } from '@cdktf/provider-google'

networkServicesMesh.NetworkServicesMesh.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isTerraformResource"></a>

```typescript
import { networkServicesMesh } from '@cdktf/provider-google'

networkServicesMesh.NetworkServicesMesh.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.generateConfigForImport"></a>

```typescript
import { networkServicesMesh } from '@cdktf/provider-google'

networkServicesMesh.NetworkServicesMesh.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkServicesMesh resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesMesh to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesMesh that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesMesh to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference">NetworkServicesMeshTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.interceptionPortInput">interceptionPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts">NetworkServicesMeshTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.interceptionPort">interceptionPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesMeshTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference">NetworkServicesMeshTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interceptionPortInput`<sup>Optional</sup> <a name="interceptionPortInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.interceptionPortInput"></a>

```typescript
public readonly interceptionPortInput: number;
```

- *Type:* number

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkServicesMeshTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts">NetworkServicesMeshTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interceptionPort`<sup>Required</sup> <a name="interceptionPort" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.interceptionPort"></a>

```typescript
public readonly interceptionPort: number;
```

- *Type:* number

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMeshConfig <a name="NetworkServicesMeshConfig" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.Initializer"></a>

```typescript
import { networkServicesMesh } from '@cdktf/provider-google'

const networkServicesMeshConfig: networkServicesMesh.NetworkServicesMeshConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.name">name</a></code> | <code>string</code> | Short name of the Mesh resource to be created. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.description">description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#id NetworkServicesMesh#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.interceptionPort">interceptionPort</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the Mesh resource. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.location">location</a></code> | <code>string</code> | Location (region) of the Mesh resource to be created. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#project NetworkServicesMesh#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts">NetworkServicesMeshTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Short name of the Mesh resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#name NetworkServicesMesh#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#description NetworkServicesMesh#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#id NetworkServicesMesh#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interceptionPort`<sup>Optional</sup> <a name="interceptionPort" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.interceptionPort"></a>

```typescript
public readonly interceptionPort: number;
```

- *Type:* number

Optional.

If set to a valid TCP port (1-65535), instructs the SIDECAR proxy to listen on the
specified port of localhost (127.0.0.1) address. The SIDECAR proxy will expect all traffic to
be redirected to this port regardless of its actual ip:port destination. If unset, a port
'15001' is used as the interception port. This will is applicable only for sidecar proxy
deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#interception_port NetworkServicesMesh#interception_port}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the Mesh resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#labels NetworkServicesMesh#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location (region) of the Mesh resource to be created.

Only the value 'global' is currently allowed; defaults to 'global' if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#location NetworkServicesMesh#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#project NetworkServicesMesh#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesMeshTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts">NetworkServicesMeshTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#timeouts NetworkServicesMesh#timeouts}

---

### NetworkServicesMeshTimeouts <a name="NetworkServicesMeshTimeouts" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts.Initializer"></a>

```typescript
import { networkServicesMesh } from '@cdktf/provider-google'

const networkServicesMeshTimeouts: networkServicesMesh.NetworkServicesMeshTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#create NetworkServicesMesh#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#delete NetworkServicesMesh#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#update NetworkServicesMesh#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#create NetworkServicesMesh#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#delete NetworkServicesMesh#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#update NetworkServicesMesh#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMeshTimeoutsOutputReference <a name="NetworkServicesMeshTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkServicesMesh } from '@cdktf/provider-google'

new networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts">NetworkServicesMeshTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesMeshTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts">NetworkServicesMeshTimeouts</a>

---




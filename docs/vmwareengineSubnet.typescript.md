# `vmwareengineSubnet` Submodule <a name="`vmwareengineSubnet` Submodule" id="@cdktf/provider-google.vmwareengineSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineSubnet <a name="VmwareengineSubnet" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vmwareengine_subnet google_vmwareengine_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer"></a>

```typescript
import { vmwareengineSubnet } from '@cdktf/provider-google'

new vmwareengineSubnet.VmwareengineSubnet(scope: Construct, id: string, config: VmwareengineSubnetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig">VmwareengineSubnetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig">VmwareengineSubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.putTimeouts"></a>

```typescript
public putTimeouts(value: VmwareengineSubnetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts">VmwareengineSubnetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VmwareengineSubnet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isConstruct"></a>

```typescript
import { vmwareengineSubnet } from '@cdktf/provider-google'

vmwareengineSubnet.VmwareengineSubnet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isTerraformElement"></a>

```typescript
import { vmwareengineSubnet } from '@cdktf/provider-google'

vmwareengineSubnet.VmwareengineSubnet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isTerraformResource"></a>

```typescript
import { vmwareengineSubnet } from '@cdktf/provider-google'

vmwareengineSubnet.VmwareengineSubnet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.generateConfigForImport"></a>

```typescript
import { vmwareengineSubnet } from '@cdktf/provider-google'

vmwareengineSubnet.VmwareengineSubnet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VmwareengineSubnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VmwareengineSubnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VmwareengineSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vmwareengine_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VmwareengineSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.dhcpAddressRanges">dhcpAddressRanges</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList">VmwareengineSubnetDhcpAddressRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.standardConfig">standardConfig</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference">VmwareengineSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.vlanId">vlanId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts">VmwareengineSubnetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dhcpAddressRanges`<sup>Required</sup> <a name="dhcpAddressRanges" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.dhcpAddressRanges"></a>

```typescript
public readonly dhcpAddressRanges: VmwareengineSubnetDhcpAddressRangesList;
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList">VmwareengineSubnetDhcpAddressRangesList</a>

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

---

##### `standardConfig`<sup>Required</sup> <a name="standardConfig" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.standardConfig"></a>

```typescript
public readonly standardConfig: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.timeouts"></a>

```typescript
public readonly timeouts: VmwareengineSubnetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference">VmwareengineSubnetTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.ipCidrRangeInput"></a>

```typescript
public readonly ipCidrRangeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VmwareengineSubnetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts">VmwareengineSubnetTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineSubnetConfig <a name="VmwareengineSubnetConfig" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.Initializer"></a>

```typescript
import { vmwareengineSubnet } from '@cdktf/provider-google'

const vmwareengineSubnetConfig: vmwareengineSubnet.VmwareengineSubnetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | The IP address range of the subnet in CIDR format. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.name">name</a></code> | <code>string</code> | The ID of the subnet. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.parent">parent</a></code> | <code>string</code> | The resource name of the private cloud to create a new subnet in. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vmwareengine_subnet#id VmwareengineSubnet#id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts">VmwareengineSubnetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

The IP address range of the subnet in CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vmwareengine_subnet#ip_cidr_range VmwareengineSubnet#ip_cidr_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the subnet.

For userDefined subnets, this name should be in the format of "service-n",
where n ranges from 1 to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vmwareengine_subnet#name VmwareengineSubnet#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The resource name of the private cloud to create a new subnet in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vmwareengine_subnet#parent VmwareengineSubnet#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vmwareengine_subnet#id VmwareengineSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VmwareengineSubnetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts">VmwareengineSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vmwareengine_subnet#timeouts VmwareengineSubnet#timeouts}

---

### VmwareengineSubnetDhcpAddressRanges <a name="VmwareengineSubnetDhcpAddressRanges" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRanges.Initializer"></a>

```typescript
import { vmwareengineSubnet } from '@cdktf/provider-google'

const vmwareengineSubnetDhcpAddressRanges: vmwareengineSubnet.VmwareengineSubnetDhcpAddressRanges = { ... }
```


### VmwareengineSubnetTimeouts <a name="VmwareengineSubnetTimeouts" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts.Initializer"></a>

```typescript
import { vmwareengineSubnet } from '@cdktf/provider-google'

const vmwareengineSubnetTimeouts: vmwareengineSubnet.VmwareengineSubnetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vmwareengine_subnet#create VmwareengineSubnet#create}. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vmwareengine_subnet#delete VmwareengineSubnet#delete}. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vmwareengine_subnet#update VmwareengineSubnet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vmwareengine_subnet#create VmwareengineSubnet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vmwareengine_subnet#delete VmwareengineSubnet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vmwareengine_subnet#update VmwareengineSubnet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineSubnetDhcpAddressRangesList <a name="VmwareengineSubnetDhcpAddressRangesList" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.Initializer"></a>

```typescript
import { vmwareengineSubnet } from '@cdktf/provider-google'

new vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.get"></a>

```typescript
public get(index: number): VmwareengineSubnetDhcpAddressRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VmwareengineSubnetDhcpAddressRangesOutputReference <a name="VmwareengineSubnetDhcpAddressRangesOutputReference" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer"></a>

```typescript
import { vmwareengineSubnet } from '@cdktf/provider-google'

new vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.firstAddress">firstAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.lastAddress">lastAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRanges">VmwareengineSubnetDhcpAddressRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `firstAddress`<sup>Required</sup> <a name="firstAddress" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.firstAddress"></a>

```typescript
public readonly firstAddress: string;
```

- *Type:* string

---

##### `lastAddress`<sup>Required</sup> <a name="lastAddress" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.lastAddress"></a>

```typescript
public readonly lastAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VmwareengineSubnetDhcpAddressRanges;
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRanges">VmwareengineSubnetDhcpAddressRanges</a>

---


### VmwareengineSubnetTimeoutsOutputReference <a name="VmwareengineSubnetTimeoutsOutputReference" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.Initializer"></a>

```typescript
import { vmwareengineSubnet } from '@cdktf/provider-google'

new vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts">VmwareengineSubnetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VmwareengineSubnetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts">VmwareengineSubnetTimeouts</a>

---




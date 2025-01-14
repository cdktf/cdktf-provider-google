# `computeRouterInterface` Submodule <a name="`computeRouterInterface` Submodule" id="@cdktf/provider-google.computeRouterInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRouterInterface <a name="ComputeRouterInterface" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface google_compute_router_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer"></a>

```typescript
import { computeRouterInterface } from '@cdktf/provider-google'

new computeRouterInterface.ComputeRouterInterface(scope: Construct, id: string, config: ComputeRouterInterfaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig">ComputeRouterInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig">ComputeRouterInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetInterconnectAttachment">resetInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetIpRange">resetIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetRedundantInterface">resetRedundantInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetVpnTunnel">resetVpnTunnel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRouterInterfaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterconnectAttachment` <a name="resetInterconnectAttachment" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetInterconnectAttachment"></a>

```typescript
public resetInterconnectAttachment(): void
```

##### `resetIpRange` <a name="resetIpRange" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetIpRange"></a>

```typescript
public resetIpRange(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetPrivateIpAddress"></a>

```typescript
public resetPrivateIpAddress(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRedundantInterface` <a name="resetRedundantInterface" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetRedundantInterface"></a>

```typescript
public resetRedundantInterface(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpnTunnel` <a name="resetVpnTunnel" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetVpnTunnel"></a>

```typescript
public resetVpnTunnel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRouterInterface resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isConstruct"></a>

```typescript
import { computeRouterInterface } from '@cdktf/provider-google'

computeRouterInterface.ComputeRouterInterface.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformElement"></a>

```typescript
import { computeRouterInterface } from '@cdktf/provider-google'

computeRouterInterface.ComputeRouterInterface.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformResource"></a>

```typescript
import { computeRouterInterface } from '@cdktf/provider-google'

computeRouterInterface.ComputeRouterInterface.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.generateConfigForImport"></a>

```typescript
import { computeRouterInterface } from '@cdktf/provider-google'

computeRouterInterface.ComputeRouterInterface.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeRouterInterface resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRouterInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRouterInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRouterInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference">ComputeRouterInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.interconnectAttachmentInput">interconnectAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.ipRangeInput">ipRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.ipVersionInput">ipVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.redundantInterfaceInput">redundantInterfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.routerInput">routerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.vpnTunnelInput">vpnTunnelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.interconnectAttachment">interconnectAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.ipRange">ipRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.redundantInterface">redundantInterface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.router">router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.vpnTunnel">vpnTunnel</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRouterInterfaceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference">ComputeRouterInterfaceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interconnectAttachmentInput`<sup>Optional</sup> <a name="interconnectAttachmentInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.interconnectAttachmentInput"></a>

```typescript
public readonly interconnectAttachmentInput: string;
```

- *Type:* string

---

##### `ipRangeInput`<sup>Optional</sup> <a name="ipRangeInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.ipRangeInput"></a>

```typescript
public readonly ipRangeInput: string;
```

- *Type:* string

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.privateIpAddressInput"></a>

```typescript
public readonly privateIpAddressInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `redundantInterfaceInput`<sup>Optional</sup> <a name="redundantInterfaceInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.redundantInterfaceInput"></a>

```typescript
public readonly redundantInterfaceInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.routerInput"></a>

```typescript
public readonly routerInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeRouterInterfaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a>

---

##### `vpnTunnelInput`<sup>Optional</sup> <a name="vpnTunnelInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.vpnTunnelInput"></a>

```typescript
public readonly vpnTunnelInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interconnectAttachment`<sup>Required</sup> <a name="interconnectAttachment" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.interconnectAttachment"></a>

```typescript
public readonly interconnectAttachment: string;
```

- *Type:* string

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `redundantInterface`<sup>Required</sup> <a name="redundantInterface" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.redundantInterface"></a>

```typescript
public readonly redundantInterface: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `vpnTunnel`<sup>Required</sup> <a name="vpnTunnel" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.vpnTunnel"></a>

```typescript
public readonly vpnTunnel: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouterInterfaceConfig <a name="ComputeRouterInterfaceConfig" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.Initializer"></a>

```typescript
import { computeRouterInterface } from '@cdktf/provider-google'

const computeRouterInterfaceConfig: computeRouterInterface.ComputeRouterInterfaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.name">name</a></code> | <code>string</code> | A unique name for the interface, required by GCE. Changing this forces a new interface to be created. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.router">router</a></code> | <code>string</code> | The name of the router this interface will be attached to. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#id ComputeRouterInterface#id}. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.interconnectAttachment">interconnectAttachment</a></code> | <code>string</code> | The name or resource link to the VLAN interconnect for this interface. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.ipRange">ipRange</a></code> | <code>string</code> | The IP address and range of the interface. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.ipVersion">ipVersion</a></code> | <code>string</code> | IP version of this interface. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | The regional private internal IP address that is used to establish BGP sessions to a VM instance acting as a third-party Router Appliance. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which this interface's router belongs. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.redundantInterface">redundantInterface</a></code> | <code>string</code> | The name of the interface that is redundant to this interface. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.region">region</a></code> | <code>string</code> | The region this interface's router sits in. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.subnetwork">subnetwork</a></code> | <code>string</code> | The URI of the subnetwork resource that this interface belongs to, which must be in the same region as the Cloud Router. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.vpnTunnel">vpnTunnel</a></code> | <code>string</code> | The name or resource link to the VPN tunnel this interface will be linked to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique name for the interface, required by GCE. Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#name ComputeRouterInterface#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

The name of the router this interface will be attached to.

Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#router ComputeRouterInterface#router}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#id ComputeRouterInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnectAttachment`<sup>Optional</sup> <a name="interconnectAttachment" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.interconnectAttachment"></a>

```typescript
public readonly interconnectAttachment: string;
```

- *Type:* string

The name or resource link to the VLAN interconnect for this interface.

Changing this forces a new interface to be created. Only one of interconnect_attachment, subnetwork or vpn_tunnel can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#interconnect_attachment ComputeRouterInterface#interconnect_attachment}

---

##### `ipRange`<sup>Optional</sup> <a name="ipRange" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

The IP address and range of the interface.

The IP range must be in the RFC3927 link-local IP space. Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#ip_range ComputeRouterInterface#ip_range}

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

IP version of this interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#ip_version ComputeRouterInterface#ip_version}

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

The regional private internal IP address that is used to establish BGP sessions to a VM instance acting as a third-party Router Appliance.

Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#private_ip_address ComputeRouterInterface#private_ip_address}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which this interface's router belongs.

If it is not provided, the provider project is used. Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#project ComputeRouterInterface#project}

---

##### `redundantInterface`<sup>Optional</sup> <a name="redundantInterface" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.redundantInterface"></a>

```typescript
public readonly redundantInterface: string;
```

- *Type:* string

The name of the interface that is redundant to this interface.

Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#redundant_interface ComputeRouterInterface#redundant_interface}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region this interface's router sits in.

If not specified, the project region will be used. Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#region ComputeRouterInterface#region}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

The URI of the subnetwork resource that this interface belongs to, which must be in the same region as the Cloud Router.

Changing this forces a new interface to be created. Only one of subnetwork, interconnect_attachment or vpn_tunnel can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#subnetwork ComputeRouterInterface#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRouterInterfaceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#timeouts ComputeRouterInterface#timeouts}

---

##### `vpnTunnel`<sup>Optional</sup> <a name="vpnTunnel" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.vpnTunnel"></a>

```typescript
public readonly vpnTunnel: string;
```

- *Type:* string

The name or resource link to the VPN tunnel this interface will be linked to.

Changing this forces a new interface to be created. Only one of vpn_tunnel, interconnect_attachment or subnetwork can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#vpn_tunnel ComputeRouterInterface#vpn_tunnel}

---

### ComputeRouterInterfaceTimeouts <a name="ComputeRouterInterfaceTimeouts" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts.Initializer"></a>

```typescript
import { computeRouterInterface } from '@cdktf/provider-google'

const computeRouterInterfaceTimeouts: computeRouterInterface.ComputeRouterInterfaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#create ComputeRouterInterface#create}. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#delete ComputeRouterInterface#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#create ComputeRouterInterface#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/compute_router_interface#delete ComputeRouterInterface#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRouterInterfaceTimeoutsOutputReference <a name="ComputeRouterInterfaceTimeoutsOutputReference" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRouterInterface } from '@cdktf/provider-google'

new computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRouterInterfaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a>

---




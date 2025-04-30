# `networkServicesGrpcRoute` Submodule <a name="`networkServicesGrpcRoute` Submodule" id="@cdktf/provider-google.networkServicesGrpcRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesGrpcRoute <a name="NetworkServicesGrpcRoute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route google_network_services_grpc_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

new networkServicesGrpcRoute.NetworkServicesGrpcRoute(scope: Construct, id: string, config: NetworkServicesGrpcRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig">NetworkServicesGrpcRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig">NetworkServicesGrpcRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetGateways">resetGateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetMeshes">resetMeshes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putRules"></a>

```typescript
public putRules(value: IResolvable | NetworkServicesGrpcRouteRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules">NetworkServicesGrpcRouteRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkServicesGrpcRouteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts">NetworkServicesGrpcRouteTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGateways` <a name="resetGateways" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetGateways"></a>

```typescript
public resetGateways(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMeshes` <a name="resetMeshes" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetMeshes"></a>

```typescript
public resetMeshes(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkServicesGrpcRoute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isConstruct"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

networkServicesGrpcRoute.NetworkServicesGrpcRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformElement"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformResource"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkServicesGrpcRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesGrpcRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesGrpcRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesGrpcRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList">NetworkServicesGrpcRouteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference">NetworkServicesGrpcRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.gatewaysInput">gatewaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.hostnamesInput">hostnamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.meshesInput">meshesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules">NetworkServicesGrpcRouteRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts">NetworkServicesGrpcRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.gateways">gateways</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.hostnames">hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.meshes">meshes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.rules"></a>

```typescript
public readonly rules: NetworkServicesGrpcRouteRulesList;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList">NetworkServicesGrpcRouteRulesList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesGrpcRouteTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference">NetworkServicesGrpcRouteTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `gatewaysInput`<sup>Optional</sup> <a name="gatewaysInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.gatewaysInput"></a>

```typescript
public readonly gatewaysInput: string[];
```

- *Type:* string[]

---

##### `hostnamesInput`<sup>Optional</sup> <a name="hostnamesInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.hostnamesInput"></a>

```typescript
public readonly hostnamesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `meshesInput`<sup>Optional</sup> <a name="meshesInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.meshesInput"></a>

```typescript
public readonly meshesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | NetworkServicesGrpcRouteRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules">NetworkServicesGrpcRouteRules</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkServicesGrpcRouteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts">NetworkServicesGrpcRouteTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `gateways`<sup>Required</sup> <a name="gateways" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.gateways"></a>

```typescript
public readonly gateways: string[];
```

- *Type:* string[]

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `meshes`<sup>Required</sup> <a name="meshes" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.meshes"></a>

```typescript
public readonly meshes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesGrpcRouteConfig <a name="NetworkServicesGrpcRouteConfig" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

const networkServicesGrpcRouteConfig: networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.hostnames">hostnames</a></code> | <code>string[]</code> | Required. Service hostnames with an optional port for which this route describes traffic. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.name">name</a></code> | <code>string</code> | Name of the GrpcRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules">NetworkServicesGrpcRouteRules</a>[]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.description">description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.gateways">gateways</a></code> | <code>string[]</code> | List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#id NetworkServicesGrpcRoute#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the GrpcRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.location">location</a></code> | <code>string</code> | Location (region) of the GRPCRoute resource to be created. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.meshes">meshes</a></code> | <code>string[]</code> | List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#project NetworkServicesGrpcRoute#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts">NetworkServicesGrpcRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.hostnames"></a>

```typescript
public readonly hostnames: string[];
```

- *Type:* string[]

Required. Service hostnames with an optional port for which this route describes traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#hostnames NetworkServicesGrpcRoute#hostnames}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the GrpcRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#name NetworkServicesGrpcRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | NetworkServicesGrpcRouteRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules">NetworkServicesGrpcRouteRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#rules NetworkServicesGrpcRoute#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#description NetworkServicesGrpcRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.gateways"></a>

```typescript
public readonly gateways: string[];
```

- *Type:* string[]

List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#gateways NetworkServicesGrpcRoute#gateways}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#id NetworkServicesGrpcRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the GrpcRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#labels NetworkServicesGrpcRoute#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location (region) of the GRPCRoute resource to be created.

Only the value 'global' is currently allowed; defaults to 'global' if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#location NetworkServicesGrpcRoute#location}

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.meshes"></a>

```typescript
public readonly meshes: string[];
```

- *Type:* string[]

List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#meshes NetworkServicesGrpcRoute#meshes}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#project NetworkServicesGrpcRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesGrpcRouteTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts">NetworkServicesGrpcRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#timeouts NetworkServicesGrpcRoute#timeouts}

---

### NetworkServicesGrpcRouteRules <a name="NetworkServicesGrpcRouteRules" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

const networkServicesGrpcRouteRules: networkServicesGrpcRoute.NetworkServicesGrpcRouteRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules.property.matches">matches</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches">NetworkServicesGrpcRouteRulesMatches</a>[]</code> | matches block. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules.property.action"></a>

```typescript
public readonly action: NetworkServicesGrpcRouteRulesAction;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#action NetworkServicesGrpcRoute#action}

---

##### `matches`<sup>Optional</sup> <a name="matches" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules.property.matches"></a>

```typescript
public readonly matches: IResolvable | NetworkServicesGrpcRouteRulesMatches[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches">NetworkServicesGrpcRouteRulesMatches</a>[]

matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#matches NetworkServicesGrpcRoute#matches}

---

### NetworkServicesGrpcRouteRulesAction <a name="NetworkServicesGrpcRouteRulesAction" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

const networkServicesGrpcRouteRulesAction: networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.destinations">destinations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations">NetworkServicesGrpcRouteRulesActionDestinations</a>[]</code> | destinations block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.faultInjectionPolicy">faultInjectionPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a></code> | fault_injection_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.timeout">timeout</a></code> | <code>string</code> | Specifies the timeout for selected route. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | NetworkServicesGrpcRouteRulesActionDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations">NetworkServicesGrpcRouteRulesActionDestinations</a>[]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#destinations NetworkServicesGrpcRoute#destinations}

---

##### `faultInjectionPolicy`<sup>Optional</sup> <a name="faultInjectionPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.faultInjectionPolicy"></a>

```typescript
public readonly faultInjectionPolicy: NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

fault_injection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#fault_injection_policy NetworkServicesGrpcRoute#fault_injection_policy}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: NetworkServicesGrpcRouteRulesActionRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#retry_policy NetworkServicesGrpcRoute#retry_policy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Specifies the timeout for selected route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#timeout NetworkServicesGrpcRoute#timeout}

---

### NetworkServicesGrpcRouteRulesActionDestinations <a name="NetworkServicesGrpcRouteRulesActionDestinations" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

const networkServicesGrpcRouteRulesActionDestinations: networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations.property.serviceName">serviceName</a></code> | <code>string</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations.property.weight">weight</a></code> | <code>number</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#service_name NetworkServicesGrpcRoute#service_name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#weight NetworkServicesGrpcRoute#weight}

---

### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

const networkServicesGrpcRouteRulesActionFaultInjectionPolicy: networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.abort">abort</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a></code> | abort block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.delay">delay</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a></code> | delay block. |

---

##### `abort`<sup>Optional</sup> <a name="abort" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.abort"></a>

```typescript
public readonly abort: NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

abort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#abort NetworkServicesGrpcRoute#abort}

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.delay"></a>

```typescript
public readonly delay: NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

delay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#delay NetworkServicesGrpcRoute#delay}

---

### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

const networkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort: networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus">httpStatus</a></code> | <code>number</code> | The HTTP status code used to abort the request. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.percentage">percentage</a></code> | <code>number</code> | The percentage of traffic which will be aborted. |

---

##### `httpStatus`<sup>Optional</sup> <a name="httpStatus" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus"></a>

```typescript
public readonly httpStatus: number;
```

- *Type:* number

The HTTP status code used to abort the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#http_status NetworkServicesGrpcRoute#http_status}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

The percentage of traffic which will be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#percentage NetworkServicesGrpcRoute#percentage}

---

### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

const networkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay: networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay">fixedDelay</a></code> | <code>string</code> | Specify a fixed delay before forwarding the request. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.percentage">percentage</a></code> | <code>number</code> | The percentage of traffic on which delay will be injected. |

---

##### `fixedDelay`<sup>Optional</sup> <a name="fixedDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay"></a>

```typescript
public readonly fixedDelay: string;
```

- *Type:* string

Specify a fixed delay before forwarding the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#fixed_delay NetworkServicesGrpcRoute#fixed_delay}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

The percentage of traffic on which delay will be injected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#percentage NetworkServicesGrpcRoute#percentage}

---

### NetworkServicesGrpcRouteRulesActionRetryPolicy <a name="NetworkServicesGrpcRouteRulesActionRetryPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

const networkServicesGrpcRouteRulesActionRetryPolicy: networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy.property.numRetries">numRetries</a></code> | <code>number</code> | Specifies the allowed number of retries. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy.property.retryConditions">retryConditions</a></code> | <code>string[]</code> | Specifies one or more conditions when this retry policy applies. Possible values: ["connect-failure", "refused-stream", "cancelled", "deadline-exceeded", "resource-exhausted", "unavailable"]. |

---

##### `numRetries`<sup>Optional</sup> <a name="numRetries" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy.property.numRetries"></a>

```typescript
public readonly numRetries: number;
```

- *Type:* number

Specifies the allowed number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#num_retries NetworkServicesGrpcRoute#num_retries}

---

##### `retryConditions`<sup>Optional</sup> <a name="retryConditions" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy.property.retryConditions"></a>

```typescript
public readonly retryConditions: string[];
```

- *Type:* string[]

Specifies one or more conditions when this retry policy applies. Possible values: ["connect-failure", "refused-stream", "cancelled", "deadline-exceeded", "resource-exhausted", "unavailable"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#retry_conditions NetworkServicesGrpcRoute#retry_conditions}

---

### NetworkServicesGrpcRouteRulesMatches <a name="NetworkServicesGrpcRouteRulesMatches" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

const networkServicesGrpcRouteRulesMatches: networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders">NetworkServicesGrpcRouteRulesMatchesHeaders</a>[]</code> | headers block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches.property.method">method</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a></code> | method block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches.property.headers"></a>

```typescript
public readonly headers: IResolvable | NetworkServicesGrpcRouteRulesMatchesHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders">NetworkServicesGrpcRouteRulesMatchesHeaders</a>[]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#headers NetworkServicesGrpcRoute#headers}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches.property.method"></a>

```typescript
public readonly method: NetworkServicesGrpcRouteRulesMatchesMethod;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a>

method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#method NetworkServicesGrpcRoute#method}

---

### NetworkServicesGrpcRouteRulesMatchesHeaders <a name="NetworkServicesGrpcRouteRulesMatchesHeaders" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

const networkServicesGrpcRouteRulesMatchesHeaders: networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.key">key</a></code> | <code>string</code> | Required. The key of the header. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.value">value</a></code> | <code>string</code> | Required. The value of the header. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.type">type</a></code> | <code>string</code> | The type of match. Default value: "EXACT" Possible values: ["TYPE_UNSPECIFIED", "EXACT", "REGULAR_EXPRESSION"]. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Required. The key of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#key NetworkServicesGrpcRoute#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Required. The value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#value NetworkServicesGrpcRoute#value}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of match. Default value: "EXACT" Possible values: ["TYPE_UNSPECIFIED", "EXACT", "REGULAR_EXPRESSION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#type NetworkServicesGrpcRoute#type}

---

### NetworkServicesGrpcRouteRulesMatchesMethod <a name="NetworkServicesGrpcRouteRulesMatchesMethod" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

const networkServicesGrpcRouteRulesMatchesMethod: networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.grpcMethod">grpcMethod</a></code> | <code>string</code> | Required. Name of the method to match against. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.grpcService">grpcService</a></code> | <code>string</code> | Required. Name of the service to match against. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.caseSensitive">caseSensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies that matches are case sensitive. The default value is true. |

---

##### `grpcMethod`<sup>Required</sup> <a name="grpcMethod" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.grpcMethod"></a>

```typescript
public readonly grpcMethod: string;
```

- *Type:* string

Required. Name of the method to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#grpc_method NetworkServicesGrpcRoute#grpc_method}

---

##### `grpcService`<sup>Required</sup> <a name="grpcService" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.grpcService"></a>

```typescript
public readonly grpcService: string;
```

- *Type:* string

Required. Name of the service to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#grpc_service NetworkServicesGrpcRoute#grpc_service}

---

##### `caseSensitive`<sup>Optional</sup> <a name="caseSensitive" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies that matches are case sensitive. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#case_sensitive NetworkServicesGrpcRoute#case_sensitive}

---

### NetworkServicesGrpcRouteTimeouts <a name="NetworkServicesGrpcRouteTimeouts" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

const networkServicesGrpcRouteTimeouts: networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#create NetworkServicesGrpcRoute#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#delete NetworkServicesGrpcRoute#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#update NetworkServicesGrpcRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#create NetworkServicesGrpcRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#delete NetworkServicesGrpcRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_grpc_route#update NetworkServicesGrpcRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesGrpcRouteRulesActionDestinationsList <a name="NetworkServicesGrpcRouteRulesActionDestinationsList" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

new networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.get"></a>

```typescript
public get(index: number): NetworkServicesGrpcRouteRulesActionDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations">NetworkServicesGrpcRouteRulesActionDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesGrpcRouteRulesActionDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations">NetworkServicesGrpcRouteRulesActionDestinations</a>[]

---


### NetworkServicesGrpcRouteRulesActionDestinationsOutputReference <a name="NetworkServicesGrpcRouteRulesActionDestinationsOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

new networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations">NetworkServicesGrpcRouteRulesActionDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesGrpcRouteRulesActionDestinations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations">NetworkServicesGrpcRouteRulesActionDestinations</a>

---


### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

new networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus">resetHttpStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpStatus` <a name="resetHttpStatus" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus"></a>

```typescript
public resetHttpStatus(): void
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage"></a>

```typescript
public resetPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput">httpStatusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus">httpStatus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpStatusInput`<sup>Optional</sup> <a name="httpStatusInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput"></a>

```typescript
public readonly httpStatusInput: number;
```

- *Type:* number

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `httpStatus`<sup>Required</sup> <a name="httpStatus" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus"></a>

```typescript
public readonly httpStatus: number;
```

- *Type:* number

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

---


### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

new networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay">resetFixedDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFixedDelay` <a name="resetFixedDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay"></a>

```typescript
public resetFixedDelay(): void
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage"></a>

```typescript
public resetPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput">fixedDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay">fixedDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedDelayInput`<sup>Optional</sup> <a name="fixedDelayInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput"></a>

```typescript
public readonly fixedDelayInput: string;
```

- *Type:* string

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `fixedDelay`<sup>Required</sup> <a name="fixedDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay"></a>

```typescript
public readonly fixedDelay: string;
```

- *Type:* string

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

---


### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

new networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putAbort">putAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putDelay">putDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort">resetAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay">resetDelay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbort` <a name="putAbort" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putAbort"></a>

```typescript
public putAbort(value: NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putAbort.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `putDelay` <a name="putDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putDelay"></a>

```typescript
public putDelay(value: NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putDelay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `resetAbort` <a name="resetAbort" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort"></a>

```typescript
public resetAbort(): void
```

##### `resetDelay` <a name="resetDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay"></a>

```typescript
public resetDelay(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abort">abort</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delay">delay</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput">abortInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput">delayInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `abort`<sup>Required</sup> <a name="abort" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abort"></a>

```typescript
public readonly abort: NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference</a>

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delay"></a>

```typescript
public readonly delay: NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference</a>

---

##### `abortInput`<sup>Optional</sup> <a name="abortInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput"></a>

```typescript
public readonly abortInput: NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput"></a>

```typescript
public readonly delayInput: NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

---


### NetworkServicesGrpcRouteRulesActionOutputReference <a name="NetworkServicesGrpcRouteRulesActionOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

new networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putFaultInjectionPolicy">putFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetFaultInjectionPolicy">resetFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | NetworkServicesGrpcRouteRulesActionDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations">NetworkServicesGrpcRouteRulesActionDestinations</a>[]

---

##### `putFaultInjectionPolicy` <a name="putFaultInjectionPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putFaultInjectionPolicy"></a>

```typescript
public putFaultInjectionPolicy(value: NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putFaultInjectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putRetryPolicy"></a>

```typescript
public putRetryPolicy(value: NetworkServicesGrpcRouteRulesActionRetryPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetDestinations"></a>

```typescript
public resetDestinations(): void
```

##### `resetFaultInjectionPolicy` <a name="resetFaultInjectionPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetFaultInjectionPolicy"></a>

```typescript
public resetFaultInjectionPolicy(): void
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetRetryPolicy"></a>

```typescript
public resetRetryPolicy(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList">NetworkServicesGrpcRouteRulesActionDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicy">faultInjectionPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference">NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations">NetworkServicesGrpcRouteRulesActionDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicyInput">faultInjectionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.destinations"></a>

```typescript
public readonly destinations: NetworkServicesGrpcRouteRulesActionDestinationsList;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList">NetworkServicesGrpcRouteRulesActionDestinationsList</a>

---

##### `faultInjectionPolicy`<sup>Required</sup> <a name="faultInjectionPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicy"></a>

```typescript
public readonly faultInjectionPolicy: NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference">NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | NetworkServicesGrpcRouteRulesActionDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations">NetworkServicesGrpcRouteRulesActionDestinations</a>[]

---

##### `faultInjectionPolicyInput`<sup>Optional</sup> <a name="faultInjectionPolicyInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicyInput"></a>

```typescript
public readonly faultInjectionPolicyInput: NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicyInput"></a>

```typescript
public readonly retryPolicyInput: NetworkServicesGrpcRouteRulesActionRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesGrpcRouteRulesAction;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a>

---


### NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference <a name="NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

new networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetNumRetries">resetNumRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetRetryConditions">resetRetryConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumRetries` <a name="resetNumRetries" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetNumRetries"></a>

```typescript
public resetNumRetries(): void
```

##### `resetRetryConditions` <a name="resetRetryConditions" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetRetryConditions"></a>

```typescript
public resetRetryConditions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput">numRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput">retryConditionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetries">numRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditions">retryConditions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numRetriesInput`<sup>Optional</sup> <a name="numRetriesInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput"></a>

```typescript
public readonly numRetriesInput: number;
```

- *Type:* number

---

##### `retryConditionsInput`<sup>Optional</sup> <a name="retryConditionsInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput"></a>

```typescript
public readonly retryConditionsInput: string[];
```

- *Type:* string[]

---

##### `numRetries`<sup>Required</sup> <a name="numRetries" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetries"></a>

```typescript
public readonly numRetries: number;
```

- *Type:* number

---

##### `retryConditions`<sup>Required</sup> <a name="retryConditions" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditions"></a>

```typescript
public readonly retryConditions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesGrpcRouteRulesActionRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a>

---


### NetworkServicesGrpcRouteRulesList <a name="NetworkServicesGrpcRouteRulesList" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

new networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.get"></a>

```typescript
public get(index: number): NetworkServicesGrpcRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules">NetworkServicesGrpcRouteRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesGrpcRouteRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules">NetworkServicesGrpcRouteRules</a>[]

---


### NetworkServicesGrpcRouteRulesMatchesHeadersList <a name="NetworkServicesGrpcRouteRulesMatchesHeadersList" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

new networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.get"></a>

```typescript
public get(index: number): NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders">NetworkServicesGrpcRouteRulesMatchesHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesGrpcRouteRulesMatchesHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders">NetworkServicesGrpcRouteRulesMatchesHeaders</a>[]

---


### NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference <a name="NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

new networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders">NetworkServicesGrpcRouteRulesMatchesHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesGrpcRouteRulesMatchesHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders">NetworkServicesGrpcRouteRulesMatchesHeaders</a>

---


### NetworkServicesGrpcRouteRulesMatchesList <a name="NetworkServicesGrpcRouteRulesMatchesList" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

new networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.get"></a>

```typescript
public get(index: number): NetworkServicesGrpcRouteRulesMatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches">NetworkServicesGrpcRouteRulesMatches</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesGrpcRouteRulesMatches[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches">NetworkServicesGrpcRouteRulesMatches</a>[]

---


### NetworkServicesGrpcRouteRulesMatchesMethodOutputReference <a name="NetworkServicesGrpcRouteRulesMatchesMethodOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

new networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resetCaseSensitive">resetCaseSensitive</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaseSensitive` <a name="resetCaseSensitive" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resetCaseSensitive"></a>

```typescript
public resetCaseSensitive(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitiveInput">caseSensitiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethodInput">grpcMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcServiceInput">grpcServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitive">caseSensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethod">grpcMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcService">grpcService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caseSensitiveInput`<sup>Optional</sup> <a name="caseSensitiveInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitiveInput"></a>

```typescript
public readonly caseSensitiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `grpcMethodInput`<sup>Optional</sup> <a name="grpcMethodInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethodInput"></a>

```typescript
public readonly grpcMethodInput: string;
```

- *Type:* string

---

##### `grpcServiceInput`<sup>Optional</sup> <a name="grpcServiceInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcServiceInput"></a>

```typescript
public readonly grpcServiceInput: string;
```

- *Type:* string

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `grpcMethod`<sup>Required</sup> <a name="grpcMethod" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethod"></a>

```typescript
public readonly grpcMethod: string;
```

- *Type:* string

---

##### `grpcService`<sup>Required</sup> <a name="grpcService" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcService"></a>

```typescript
public readonly grpcService: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesGrpcRouteRulesMatchesMethod;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a>

---


### NetworkServicesGrpcRouteRulesMatchesOutputReference <a name="NetworkServicesGrpcRouteRulesMatchesOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

new networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putMethod">putMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resetMethod">resetMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | NetworkServicesGrpcRouteRulesMatchesHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders">NetworkServicesGrpcRouteRulesMatchesHeaders</a>[]

---

##### `putMethod` <a name="putMethod" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putMethod"></a>

```typescript
public putMethod(value: NetworkServicesGrpcRouteRulesMatchesMethod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putMethod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a>

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList">NetworkServicesGrpcRouteRulesMatchesHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.method">method</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference">NetworkServicesGrpcRouteRulesMatchesMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders">NetworkServicesGrpcRouteRulesMatchesHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.methodInput">methodInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches">NetworkServicesGrpcRouteRulesMatches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.headers"></a>

```typescript
public readonly headers: NetworkServicesGrpcRouteRulesMatchesHeadersList;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList">NetworkServicesGrpcRouteRulesMatchesHeadersList</a>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.method"></a>

```typescript
public readonly method: NetworkServicesGrpcRouteRulesMatchesMethodOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference">NetworkServicesGrpcRouteRulesMatchesMethodOutputReference</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | NetworkServicesGrpcRouteRulesMatchesHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders">NetworkServicesGrpcRouteRulesMatchesHeaders</a>[]

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: NetworkServicesGrpcRouteRulesMatchesMethod;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesGrpcRouteRulesMatches;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches">NetworkServicesGrpcRouteRulesMatches</a>

---


### NetworkServicesGrpcRouteRulesOutputReference <a name="NetworkServicesGrpcRouteRulesOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

new networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putMatches">putMatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resetMatches">resetMatches</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putAction"></a>

```typescript
public putAction(value: NetworkServicesGrpcRouteRulesAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a>

---

##### `putMatches` <a name="putMatches" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putMatches"></a>

```typescript
public putMatches(value: IResolvable | NetworkServicesGrpcRouteRulesMatches[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putMatches.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches">NetworkServicesGrpcRouteRulesMatches</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetMatches` <a name="resetMatches" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resetMatches"></a>

```typescript
public resetMatches(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference">NetworkServicesGrpcRouteRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.matches">matches</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList">NetworkServicesGrpcRouteRulesMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.matchesInput">matchesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches">NetworkServicesGrpcRouteRulesMatches</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules">NetworkServicesGrpcRouteRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.action"></a>

```typescript
public readonly action: NetworkServicesGrpcRouteRulesActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference">NetworkServicesGrpcRouteRulesActionOutputReference</a>

---

##### `matches`<sup>Required</sup> <a name="matches" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.matches"></a>

```typescript
public readonly matches: NetworkServicesGrpcRouteRulesMatchesList;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList">NetworkServicesGrpcRouteRulesMatchesList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: NetworkServicesGrpcRouteRulesAction;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a>

---

##### `matchesInput`<sup>Optional</sup> <a name="matchesInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.matchesInput"></a>

```typescript
public readonly matchesInput: IResolvable | NetworkServicesGrpcRouteRulesMatches[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches">NetworkServicesGrpcRouteRulesMatches</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesGrpcRouteRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules">NetworkServicesGrpcRouteRules</a>

---


### NetworkServicesGrpcRouteTimeoutsOutputReference <a name="NetworkServicesGrpcRouteTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkServicesGrpcRoute } from '@cdktf/provider-google'

new networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts">NetworkServicesGrpcRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesGrpcRouteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts">NetworkServicesGrpcRouteTimeouts</a>

---



